import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="hero bg-accent/50 min-h-screen relative">
      <div className="absolute inset-0 opacity-30 mix-blend-multiply">
        <Image
          src="/images/confused-pikachu.jpg"
          alt="背景皮卡丘"
          fill
          className="object-cover select-none"
          priority
          draggable={false}
        />
      </div>

      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">页面走丢了！</h1>

          <p className="mb-5">
            看起来你想要找的页面像宝可梦一样逃跑了！ 也许它被火箭队抓走了？
          </p>

          <Link href="/" className="btn btn-primary">
            返回首页
          </Link>
        </div>
      </div>
    </div>
  )
}
