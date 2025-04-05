'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export default function LocalPage() {
  const [id, setId] = useState<string | null>(null)
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <label className="input">
        房间号
        <input
          type="text"
          className="grow"
          onChange={(e) => setId(e.target.value)}
        />
      </label>
      <Link href={`/battle/local/${id}`} className="btn btn-accent">
        开始局域网游戏
      </Link>
    </div>
  )
}
