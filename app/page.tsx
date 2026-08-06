import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Method from '@/components/Method'
import About from '@/components/About'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import Temoignage from '@/components/Temoignage'
import AnimatedBackground from '@/components/AnimatedBackground'
import Navigation from '@/components/Navigation'
import SmoothScroll from '@/components/SmoothScroll'
import Footer from '@/components/Footer'
import prof from '@/data/prof.json'
import { translations } from '@/locales/translations'

export default function Home() {
  // Données structurées Schema.org — la langue par défaut du site est le français
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: prof.nom,
    jobTitle: `Professeur particulier de ${prof.matieres.join(', ')}`,
    url: prof.siteUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: prof.ville,
      addressCountry: 'BE',
    },
    email: prof.email,
    telephone: `+${prof.whatsapp}`,
    description: prof.accroche,
    knowsAbout: [...prof.matieres, ...prof.publics],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: translations.fr.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a.join(' ') },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AnimatedBackground />
      <Navigation />
      <SmoothScroll />

      <main className="min-h-screen relative">
        <Hero
          nom={prof.nom}
          moyenne={prof.diplomeMoyenne}
          moyenneSur={prof.diplomeSur}
        />

        <Services />

        <Method />

        <Temoignage />

        <About />

        <Faq />

        <Contact email={prof.email} whatsapp={prof.whatsapp} nom={prof.nom} />

        <Footer
          nom={prof.nom}
          ville={prof.ville}
          email={prof.email}
          whatsapp={prof.whatsapp}
        />
      </main>
    </>
  )
}
