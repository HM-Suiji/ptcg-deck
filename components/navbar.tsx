'use client'

import Link from 'next/link'
import { GithubIcon } from './icons'
import { ThemeSwitch } from './theme-switch'
import { motion } from 'motion/react'
import { useState, useRef, useEffect } from 'react'

export const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null)

  const clearHideTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => {
    return () => clearHideTimer()
  }, [])

  const handleMouseLeave = () => {
    clearHideTimer()
    timerRef.current = setTimeout(() => {
      setVisible(false)
    }, 2000)
  }

  return (
    <div className="navbar-container">
      <div
        className="fixed top-0 left-0 w-full h-[20px] z-50"
        onMouseEnter={() => {
          clearHideTimer()
          setVisible(true)
        }}
      />

      <motion.div
        className="navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-50"
        initial={{ y: '-100%' }}
        animate={{ y: visible ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onMouseEnter={clearHideTimer}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex-1">
          <a className="btn btn-accent btn-ghost text-xl">PTCG Deck</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ThemeSwitch />
            </li>
            <li>
              <Link href={''} target="_blank">
                <GithubIcon />
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
