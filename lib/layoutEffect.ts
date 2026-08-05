import { useEffect, useLayoutEffect } from 'react'

// useLayoutEffect warns when it runs on the server. Components that measure the
// DOM need it on the client and nothing at all on the server.
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
