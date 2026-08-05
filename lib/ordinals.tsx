import { Fragment, ReactNode } from 'react'

// Only the French forms: "1st" and "1e" are already the plain spellings in
// English and Dutch, so those strings pass through untouched.
const ORDINAL = /(\d+)(ères?|èmes?)/g

/** Renders "1ère → 6ème" with the suffix raised and smaller. */
export function withOrdinals(text: string): ReactNode {
  const out: ReactNode[] = []
  let cursor = 0
  let match: RegExpExecArray | null

  ORDINAL.lastIndex = 0
  while ((match = ORDINAL.exec(text)) !== null) {
    if (match.index > cursor) out.push(text.slice(cursor, match.index))
    out.push(
      <Fragment key={match.index}>
        {match[1]}
        <sup className="text-[0.65em] font-semibold">{match[2]}</sup>
      </Fragment>
    )
    cursor = match.index + match[0].length
  }

  if (cursor < text.length) out.push(text.slice(cursor))
  return out
}
