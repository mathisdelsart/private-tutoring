import type { ComponentType } from 'react'

export interface Channel {
  id: string
  icon: ComponentType<{ className?: string }>
  title: string
  /** Phone number or address, shown under the name when there is one */
  value?: string
  description: string
  /** A link (direct contact) or a button (sending the form) */
  href?: string
  newTab?: boolean
  onClick?: () => void
  disabled?: boolean
}

/**
 * The three ways to reach me, side by side in one block: a third of the height
 * of three separate cards, and the same object whether it opens a conversation
 * or sends the form.
 */
export default function ContactChannels({
  channels,
  className = '',
}: {
  channels: Channel[]
  className?: string
}) {
  // A row on a phone, a column from sm up: neither layout wastes height
  const cellClass =
    'group flex items-center gap-4 px-5 py-4 text-left sm:flex-col sm:items-center sm:text-center sm:gap-0 sm:px-4 sm:py-6 transition-colors duration-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent'

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white overflow-hidden grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 ${className}`}
    >
      {channels.map((channel) => {
        const Icon = channel.icon
        const content = (
          <>
            <span className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-primary transition-colors duration-200 group-hover:bg-emerald-100">
              <Icon className="w-[18px] h-[18px]" />
            </span>
            {/* sm:contents dissolves this wrapper once the cell is a column */}
            <span className="min-w-0 sm:contents">
              <span className="block text-sm font-semibold text-slate-900 sm:mt-3">
                {channel.title}
              </span>
              {channel.value && (
                <span className="block text-[13px] text-slate-600 break-words sm:mt-0.5">
                  {channel.value}
                </span>
              )}
              <span className="block text-xs text-slate-500 sm:mt-1">{channel.description}</span>
            </span>
          </>
        )

        return channel.href ? (
          <a
            key={channel.id}
            href={channel.href}
            target={channel.newTab ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className={cellClass}
          >
            {content}
          </a>
        ) : (
          <button
            key={channel.id}
            type="button"
            onClick={channel.onClick}
            disabled={channel.disabled}
            className={cellClass}
          >
            {content}
          </button>
        )
      })}
    </div>
  )
}
