import React from 'react'
import { DeckCard } from '@/components/deck/deck-card'

export default function DeckPage() {
  return (
    <div className="m-12">
      卡组
      <div className="flex justify-center">
        <DeckCard
          imageUrl="/images/confused-pikachu.jpg"
          title="aaa"
          description="aaa"
          createdAt="z"
          badgeText="sss"
        />
      </div>
    </div>
  )
}
