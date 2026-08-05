'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Mail,
  MessageSquare,
  Home,
  Video,
  Calculator,
  Atom,
  Code,
  Brain,
  Compass,
  Stethoscope,
} from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import WhatsAppIcon from './WhatsAppIcon'

interface ContactFormProps {
  email: string
  whatsapp: string
  nom: string
}

// One icon set per level, so the subject buttons stay meaningful whatever the level.
const subjectIcons: Record<string, typeof Calculator[]> = {
  secondaire: [Calculator, Atom, Code],
  superieur: [Calculator, Atom, Code, Brain],
  examens: [Compass, Stethoscope],
}

// Every choice in the form is the same object: a bordered cell that turns green
// once picked. One selected state, not three.
const choiceBase =
  'rounded-xl border text-left transition-[background-color,border-color,color] duration-200'
const choiceIdle = 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
const choicePicked = 'border-primary bg-emerald-50/70 text-slate-900'

const fieldClass =
  'w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-[15px] text-slate-900 placeholder-slate-400 transition-colors duration-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30'

const labelClass = 'block text-[13px] font-semibold text-slate-700 mb-2.5'

export default function ContactForm({ email, whatsapp, nom }: ContactFormProps) {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    level: 'secondaire',
    subjects: [] as string[],
    location: 'domicile',
    courseType: 'suivi',
    reason: '',
    frequencyNumber: '',
    frequencyPeriod: '',
    availability: '',
    message: ''
  })

  const [step, setStep] = useState(1)

  const handleSubmit = async (platform: 'whatsapp' | 'email' | 'sms') => {
    const m = t.form.msg
    const subjectsText = formData.subjects.join(' + ')
    const periodText = formData.frequencyPeriod === 'semaine' ? m.periodWeek : m.periodMonth
    const frequencyText = formData.frequencyNumber
      ? m.freqValue.replace('{n}', formData.frequencyNumber).replace('{period}', periodText)
      : m.freqToDiscuss

    const modalityText = formData.location === 'domicile' ? m.modalityHome : m.modalityOnline
    const courseTypeText = formData.courseType === 'suivi' ? m.courseTypeRegular : m.courseTypeOneoff
    const levelText = t.form.levels.find((l) => l.id === formData.level)?.label ?? ''

    const lines = [
      `${m.student} : ${formData.name}`,
      `${m.level} : ${levelText}`,
      `${m.subjects} : ${subjectsText}`,
      `${m.modality} : ${modalityText}`,
      `${m.courseType} : ${courseTypeText}`,
    ]

    if (formData.reason) lines.push(`${m.reason} : ${formData.reason}`)
    if (formData.courseType === 'suivi') lines.push(`${m.frequency} : ${frequencyText}`)
    lines.push(`${m.availability} : ${formData.availability}`)

    // One short line per field: readable as-is in WhatsApp, SMS and email,
    // where the previous heavy rules and shouting labels rendered badly.
    let message = `${m.greeting.replace('{nom}', nom)}

${m.intro}

${lines.map((line) => `• ${line}`).join('\n')}`

    if (formData.message) {
      message += `\n\n${m.message} :\n${formData.message}`
    }

    message += `\n\n${m.closing}`

    if (platform === 'sms') {
      window.location.href = `sms:+${whatsapp}?&body=${encodeURIComponent(message)}`
    } else if (platform === 'whatsapp') {
      const whatsappMessage = encodeURIComponent(message)
      window.open(`https://wa.me/${whatsapp}?text=${whatsappMessage}`, '_blank')
    } else if (platform === 'email') {
      const emailSubject = encodeURIComponent(m.emailSubject.replace('{subjects}', subjectsText))
      const emailBody = encodeURIComponent(message)
      window.location.href = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`
    }
  }

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value }

      // Validation pour la fréquence
      if (field === 'frequencyNumber') {
        const maxValue = prev.frequencyPeriod === 'semaine' ? 4 : 16
        const numValue = parseInt(value, 10)

        // Ne valider que si c'est un nombre valide
        if (!isNaN(numValue)) {
          if (numValue < 1) {
            newData.frequencyNumber = '1'
          } else if (numValue > maxValue) {
            newData.frequencyNumber = maxValue.toString()
          } else {
            newData.frequencyNumber = value
          }
        } else {
          // Permettre la saisie vide temporaire
          newData.frequencyNumber = value
        }
      }

      // Si on change la période, vérifier que la fréquence est toujours valide
      if (field === 'frequencyPeriod') {
        if (!value) {
          // Désélection : on retombe sur "à discuter ensemble"
          newData.frequencyNumber = ''
        } else {
          const maxValue = value === 'semaine' ? 4 : 16
          const currentNum = parseInt(prev.frequencyNumber, 10)

          if (!prev.frequencyNumber) {
            newData.frequencyNumber = '2'
          } else if (!isNaN(currentNum) && currentNum > maxValue) {
            newData.frequencyNumber = maxValue.toString()
          }
        }
      }

      return newData
    })
  }

  const toggleSubject = (subject: string) => {
    setFormData(prev => {
      if (prev.subjects.includes(subject)) {
        return { ...prev, subjects: prev.subjects.filter(s => s !== subject) }
      }
      // The two entrance exams cannot be sat together, so that level is single choice
      const subjects = prev.level === 'examens' ? [subject] : [...prev.subjects, subject]
      return { ...prev, subjects }
    })
  }

  // Subject names differ from one level to the next, so the selection is reset with the level.
  const selectLevel = (levelId: string) => {
    setFormData(prev => (prev.level === levelId ? prev : { ...prev, level: levelId, subjects: [] }))
  }

  const activeLevel = t.form.levels.find((l) => l.id === formData.level) ?? t.form.levels[0]
  const icons = subjectIcons[activeLevel.id] ?? subjectIcons.secondaire
  const subjects = activeLevel.subjects.map((name, i) => ({ name, icon: icons[i % icons.length] }))

  // The three ways to send are the same object as the direct contact rows
  const sendChannels = [
    { id: 'sms' as const, icon: MessageSquare, label: 'SMS', description: t.contact.smsDesc },
    { id: 'whatsapp' as const, icon: WhatsAppIcon, label: 'WhatsApp', description: t.contact.whatsappDesc },
    { id: 'email' as const, icon: Mail, label: 'Email', description: t.contact.emailDesc },
  ]

  return (
    <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.05)]">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">{t.form.title}</h3>
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 whitespace-nowrap">
          {t.form.stepLabel.replace('{n}', String(step))}
        </span>
      </div>
      <p className="mt-1 text-sm text-slate-500">{t.form.subtitle}</p>

      {/* One track that fills, rather than three coloured segments */}
      <div className="mt-5 mb-7 h-px bg-slate-200">
        <div
          className="h-px bg-primary transition-[width] duration-500 ease-out"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {/* Step 1: Informations de base */}
        {step === 1 && (
          <div className="space-y-6 animate-[fadeInUp_0.4s_ease-out]">
            <div>
              <label className={labelClass}>
                {t.form.labelName} <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                className={fieldClass}
                placeholder={t.form.placeholderName}
              />
            </div>

            <div>
              <label className={labelClass}>
                {t.form.labelLevel} <span className="text-primary">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {t.form.levels.map((level) => (
                  <button
                    key={level.id}
                    type="button"
                    onClick={() => selectLevel(level.id)}
                    className={`${choiceBase} px-3 py-2.5 text-center text-xs sm:text-[13px] font-medium ${
                      formData.level === level.id ? choicePicked : choiceIdle
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelClass}>
                {t.form.labelSubjects} <span className="text-primary">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {subjects.map((subject) => {
                  const Icon = subject.icon
                  const isSelected = formData.subjects.includes(subject.name)
                  return (
                    <button
                      key={subject.name}
                      type="button"
                      onClick={() => toggleSubject(subject.name)}
                      className={`${choiceBase} flex items-center gap-2 px-3 py-2.5 text-[13px] font-medium ${
                        isSelected ? choicePicked : choiceIdle
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 flex-shrink-0 ${
                          isSelected ? 'text-primary' : 'text-slate-400'
                        }`}
                      />
                      {subject.name}
                    </button>
                  )
                })}
              </div>
              {formData.level !== 'examens' && (
                <p className="text-xs text-slate-400 mt-2">{t.form.subjectsHint}</p>
              )}
            </div>

            <div>
              <label className={labelClass}>
                {t.form.labelModalite} <span className="text-primary">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'domicile', label: t.form.optHome, icon: Home },
                  { id: 'visio', label: t.form.optOnline, icon: Video },
                ].map((option) => {
                  const Icon = option.icon
                  const isSelected = formData.location === option.id
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => updateFormData('location', option.id)}
                      className={`${choiceBase} flex items-center gap-2.5 px-3 py-3 text-[13px] font-medium ${
                        isSelected ? choicePicked : choiceIdle
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 flex-shrink-0 ${
                          isSelected ? 'text-primary' : 'text-slate-400'
                        }`}
                      />
                      {option.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={!formData.name || formData.subjects.length === 0}
              className="w-full btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:translate-y-0"
            >
              {t.form.btnContinue}
            </button>
          </div>
        )}

        {/* Step 2: Type de cours */}
        {step === 2 && (
          <div className="space-y-6 animate-[fadeInUp_0.4s_ease-out]">
            <div>
              <label className={labelClass}>
                {t.form.labelCourseType} <span className="text-primary">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    id: 'suivi',
                    title: t.form.courseRegularTitle,
                    description: t.form.courseRegularDesc,
                  },
                  {
                    id: 'ponctuel',
                    title: t.form.courseOneoffTitle,
                    description: t.form.courseOneoffDesc,
                  },
                ].map((option) => {
                  const isSelected = formData.courseType === option.id
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => updateFormData('courseType', option.id)}
                      className={`${choiceBase} px-4 py-3.5 ${isSelected ? choicePicked : choiceIdle}`}
                    >
                      <span className="block text-[15px] font-semibold text-slate-900">
                        {option.title}
                      </span>
                      <span className="block mt-0.5 text-xs text-slate-500">
                        {option.description}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div>
              <label className={labelClass}>{t.form.labelReason}</label>
              <div className="grid grid-cols-2 gap-2">
                {t.form.reasons.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => updateFormData('reason', formData.reason === r ? '' : r)}
                    className={`${choiceBase} px-3 py-2.5 text-[13px] font-medium ${
                      formData.reason === r ? choicePicked : choiceIdle
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {formData.courseType === 'suivi' && (
              <div>
                <label className={labelClass}>{t.form.labelFrequency}</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    max={formData.frequencyPeriod === 'semaine' ? 4 : 16}
                    value={formData.frequencyNumber}
                    onChange={(e) => updateFormData('frequencyNumber', e.target.value)}
                    disabled={!formData.frequencyPeriod}
                    className={`${fieldClass} w-16 flex-shrink-0 text-center font-semibold px-0 disabled:bg-slate-50 disabled:text-slate-300`}
                    placeholder="—"
                  />
                  <span className="text-sm text-slate-400 flex-shrink-0">{t.form.freqPer}</span>
                  <div className="flex-1 grid grid-cols-2 gap-2">
                    {[
                      { id: 'semaine', label: t.form.freqWeek },
                      { id: 'mois', label: t.form.freqMonth },
                    ].map((period) => (
                      <button
                        key={period.id}
                        type="button"
                        onClick={() =>
                          updateFormData(
                            'frequencyPeriod',
                            formData.frequencyPeriod === period.id ? '' : period.id
                          )
                        }
                        className={`${choiceBase} px-3 py-3 text-center text-[13px] font-medium ${
                          formData.frequencyPeriod === period.id ? choicePicked : choiceIdle
                        }`}
                      >
                        {period.label}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  {formData.frequencyPeriod ? t.form.freqHint : `→ ${t.form.msg.freqToDiscuss}`}
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="btn-secondary flex-1">
                {t.form.btnBack}
              </button>
              <button type="button" onClick={() => setStep(3)} className="btn-primary flex-1">
                {t.form.btnContinue}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Disponibilités et envoi */}
        {step === 3 && (
          <div className="space-y-6 animate-[fadeInUp_0.4s_ease-out]">
            <div>
              <label className={labelClass}>
                {t.form.labelAvailability} <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.availability}
                onChange={(e) => updateFormData('availability', e.target.value)}
                className={fieldClass}
                placeholder={t.form.placeholderAvailability}
              />
            </div>

            <div>
              <label className={labelClass}>{t.form.labelMessage}</label>
              <textarea
                value={formData.message}
                onChange={(e) => updateFormData('message', e.target.value)}
                rows={3}
                className={`${fieldClass} resize-none`}
                placeholder={t.form.placeholderMessage}
              />
            </div>

            <div className="pt-5 border-t border-slate-200">
              <p className={labelClass}>{t.form.chooseContact}</p>

              {/* Same rows as the direct contact block, so sending the form
                  looks like what it is: choosing a channel */}
              <div className="rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
                {sendChannels.map((channel) => {
                  const Icon = channel.icon
                  return (
                    <button
                      key={channel.id}
                      type="button"
                      onClick={() => handleSubmit(channel.id)}
                      disabled={!formData.availability}
                      className="group w-full flex items-center gap-3.5 px-4 py-3.5 text-left transition-colors duration-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                    >
                      <span className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-primary transition-colors duration-200 group-hover:bg-emerald-100 group-disabled:group-hover:bg-emerald-50">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="flex-1 text-sm font-semibold text-slate-900">
                        {channel.label}
                      </span>
                      <span className="hidden sm:block text-xs text-slate-500">
                        {channel.description}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="w-4 h-4 flex-shrink-0 text-slate-300 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>
                  )
                })}
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full btn-secondary mt-4"
              >
                {t.form.btnBack}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
