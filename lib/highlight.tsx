import { Fragment, ReactNode } from 'react'

/**
 * Renders **double-asterisk** spans in a translation string as green emphasis.
 * Keeps the locale files plain strings rather than markup.
 */
export function withHighlights(text: string): ReactNode {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-primary">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  )
}
