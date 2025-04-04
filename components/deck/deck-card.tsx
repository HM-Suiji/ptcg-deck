import React from 'react'
import Image from 'next/image'
import { Clock } from 'lucide-react'

export const DeckCard: React.FC<{
  imageUrl: string
  title: string
  description: string
  createdAt: string
  badgeText: string
}> = ({ imageUrl, title, description, createdAt, badgeText }) => {
  return (
    <div className="flex items-center p-4 bg-base-100 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl border-b border-base-300">
      <div className="flex-shrink-0 mr-4">
        <Image
          width={80}
          height={80}
          src={imageUrl}
          alt={title}
          className="w-16 h-auto object-contain rounded"
        />
      </div>

      <div className="flex-grow flex flex-col justify-center min-w-0 mr-4">
        <h2 className="text-base md:text-lg font-semibold text-base-content truncate">
          {title}
        </h2>
        <p className="text-sm text-base-content/70 mt-1 truncate">
          {description}
        </p>
        <div className="flex items-center text-sm text-base-content/50 mt-2">
          <Clock size={16} />
          <span>{createdAt}</span>
        </div>
      </div>

      <div className="flex-shrink-0 ml-auto">
        <span className="badge badge-outline text-xs whitespace-nowrap">
          {badgeText}
        </span>
      </div>
    </div>
  )
}
