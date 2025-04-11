'use client'

import Link from 'next/link'
import { GithubIcon } from './icons'
import { ThemeSwitch } from './theme-switch'
import { motion } from 'motion/react'

export const Navbar: React.FC = () => {
  return (
    <motion.div className="navbar-container" whileHover={'hovered'}>
      <div className="fixed top-0 left-0 w-full h-[20px] z-50" />

      <motion.div
        className="navbar bg-base-100/75 shadow-sm fixed top-0 left-0 right-0 z-50"
        variants={{
          hidden: {
            y: '-100%',
            transition: {
              delay: 2,
            },
          },
          hovered: {
            y: 0,
          },
        }}
        initial="hidden"
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
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
              <Link
                href="https://github.com/HM-Suiji/ptcg-deck"
                target="_blank"
              >
                <GithubIcon />
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}
