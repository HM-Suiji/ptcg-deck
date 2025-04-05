'use client'

import React from 'react'

import type { ReactNode } from 'react'
import { Provider as JotaiProvider } from 'jotai'
import { ThemeProvider } from 'next-themes'

export function Provider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem disableTransitionOnChange>
      <JotaiProvider>{children}</JotaiProvider>
    </ThemeProvider>
  )
}
