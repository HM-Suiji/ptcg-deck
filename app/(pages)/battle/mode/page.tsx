'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Wifi, Globe } from 'lucide-react'

export default function ModePage() {
  return (
    <div className="relative min-h-screen w-full bg-base-100 overflow-hidden flex items-center justify-center">
      {/* 背景装饰 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-primary/20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-secondary/20 translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-accent/30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-primary/10"></div>
      </div>

      {/* 主内容 */}
      <div className="relative z-10 w-full max-w-5xl">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-base-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          选择对战模式
        </motion.h1>

        <div className="relative w-full aspect-[2/1] rounded-box overflow-hidden bg-base-200/80 backdrop-blur-sm border border-base-300 shadow-xl">
          {/* 斜切分隔线 */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <svg width="100%" height="100%" preserveAspectRatio="none">
              <line
                x1="55%"
                y1="0"
                x2="45%"
                y2="100%"
                stroke="currentColor"
                strokeWidth="2"
                className="text-base-content/30"
              />
            </svg>
          </div>

          {/* 模式卡片容器 */}
          <div className="absolute inset-0 grid grid-cols-2 gap-0">
            {/* 局域网模式 */}
            <motion.div className="relative flex items-center justify-center p-6 clip-left-content">
              <Link href="/battle/local" className="w-full h-full">
                <motion.div
                  className="w-full h-full flex flex-col items-center justify-center gap-4 p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full flex items-center justify-center bg-primary text-primary-content"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Wifi className="text-3xl" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-base-content">
                    局域网模式
                  </h2>
                  <p className="text-center text-base-content/70">
                    与局域网内的朋友进行对战
                  </p>
                  <motion.button
                    className="btn btn-primary mt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    选择
                  </motion.button>
                </motion.div>
              </Link>
            </motion.div>

            {/* 在线匹配模式 */}
            <motion.div className="relative flex items-center justify-center p-6 clip-right-content">
              <Link href="/battle/online" className="w-full h-full">
                <motion.div
                  className="w-full h-full flex flex-col items-center justify-center gap-4 p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full flex items-center justify-center bg-secondary text-secondary-content"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Globe className="text-3xl" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-base-content">
                    在线匹配模式
                  </h2>
                  <p className="text-center text-base-content/70">
                    与全球训练师进行在线对战
                  </p>
                  <motion.button
                    className="btn btn-secondary mt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    选择
                  </motion.button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
