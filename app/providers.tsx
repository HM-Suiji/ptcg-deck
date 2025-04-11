'use client'

import React from 'react'

import type { ReactNode } from 'react'
import { Provider as JotaiProvider } from 'jotai'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem disableTransitionOnChange>
      <JotaiProvider>{children}</JotaiProvider>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </ThemeProvider>
  )
}
