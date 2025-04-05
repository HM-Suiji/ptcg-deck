import React from 'react'
import { GameLayout } from '@/components/game/game-layout'

export default async function LocalGamePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <div className="relative">
      <h1 className="absolute z-50 top-6 left-1/8">局域网游戏 - {id}</h1>
      <GameLayout />
    </div>
  )
}
