import React from 'react'

import type { ReactNode } from 'react'
import { Provider as JotaiProvider } from 'jotai'

export function Provider({ children }: { children: ReactNode }) {
  return <JotaiProvider>{children}</JotaiProvider>
}
