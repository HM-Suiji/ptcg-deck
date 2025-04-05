import React from 'react'
import Image from 'next/image'

export const GameLayout = () => {
  return (
    <div className="h-screen bg-base-100 text-base-content relative overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 opacity-30 mix-blend-multiply">
        <Image
          src="/images/placemat/pikachu.webp"
          alt=""
          fill
          className="object-cover select-none"
          priority
          draggable={false}
        />
      </div>

      {/* 中央宝可梦球区域 */}
      <div className="absolute left-1/2 top-1/2 z-10 !-translate-x-1/2 !-translate-y-1/2">
        <div className="w-24 h-24 rounded-full border-2 border-neutral/30 bg-base-100 flex justify-center items-center shadow-md">
          <div className="w-16 h-16 rounded-full border-2 border-neutral/30 flex justify-center items-center bg-base-200/50">
            <div className="w-8 h-8 rounded-full bg-primary/30"></div>
          </div>
        </div>
      </div>

      {/* 场地牌 */}
      <div className="absolute left-1/4 top-1/2 z-10 !-translate-x-1/2 !-translate-y-1/2">
        <div className="w-16 h-24 border border-neutral/30 rounded-md bg-base-100/70 flex justify-center items-center">
          <span className="text-xs text-neutral">场地牌</span>
        </div>
      </div>

      {/* 控制按钮 */}
      <div className="absolute top-1/2 right-1/4 z-20 !-translate-y-1/2">
        <button className="badge badge-info bg-secondary/60 text-secondary-content/70 shadow-sm hover:bg-secondary/30 hover:text-secondary-content/80 transition-colors">
          过
        </button>
      </div>

      {/* 对手区域 */}
      <div className="absolute top-0 left-0 right-0 h-[50%] bg-base-200/50 border-b border-neutral/20">
        {/* 对手手牌区 */}
        <div className="absolute left-1/2 top-4 !-translate-x-1/2">
          <div className="w-96 h-24 border border-neutral/30 rounded-md bg-neutral/10 flex justify-center items-center">
            <span className="text-xs text-neutral">手牌区</span>
          </div>
        </div>

        {/* 左侧区域 - 对手 */}
        <div className="absolute left-0 bottom-0 w-20 p-1">
          <div className="mb-2">
            <div className="w-14 h-20 border border-neutral/30 rounded-md bg-base-100/70 mx-auto"></div>
            <div className="text-xs mt-1 text-neutral text-center">牌库</div>
          </div>
          <div>
            <div className="w-14 h-20 border border-neutral/30 rounded-md bg-base-100/70 mx-auto"></div>
            <div className="text-xs mt-1 text-neutral text-center">弃牌区</div>
          </div>
        </div>

        {/* 中央区域 - 对手备战区 */}
        <div className="absolute left-1/2 bottom-[55%] !-translate-x-1/2 !translate-y-1/2">
          <div className="flex justify-center gap-2">
            <div className="w-14 h-20 border border-neutral/30 rounded-md bg-base-100/70"></div>
            <div className="w-14 h-20 border border-neutral/30 rounded-md bg-base-100/70"></div>
            <div className="w-14 h-20 border border-neutral/30 rounded-md bg-base-100/70"></div>
            <div className="w-14 h-20 border border-neutral/30 rounded-md bg-base-100/70"></div>
            <div className="w-14 h-20 border border-neutral/30 rounded-md bg-base-100/70"></div>
          </div>
        </div>

        {/* 中央卡牌区域 - 对手战斗场 */}
        <div className="absolute left-1/2 bottom-2/7 !-translate-x-1/2 !translate-y-1/2">
          <div className="w-16 h-24 border border-neutral/30 rounded-md bg-base-100/70"></div>
        </div>

        {/* 右侧区域 - 对手奖赏卡区 */}
        <div className="absolute right-0 bottom-0 w-20 p-1">
          <div className="relative">
            <div className="h-20 border border-neutral/30 rounded-md bg-base-100/70 absolute left-1/3 w-14 z-20"></div>
            <div className="h-20 border border-neutral/30 rounded-md bg-base-100/70 relative w-14"></div>
          </div>
          <div className="relative mt-2">
            <div className="h-20 border border-neutral/30 rounded-md bg-base-100/70 absolute left-1/3 w-14 z-20"></div>
            <div className="h-20 border border-neutral/30 rounded-md bg-base-100/70 relative w-14"></div>
          </div>
          <div className="relative mt-2">
            <div className="h-20 border border-neutral/30 rounded-md bg-base-100/70 absolute left-1/3 w-14 z-20"></div>
            <div className="h-20 border border-neutral/30 rounded-md bg-base-100/70 relative w-14"></div>
          </div>
        </div>
      </div>

      {/* 玩家区域*/}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-primary/5">
        {/* 左侧区域 - 玩家奖赏卡区 */}
        <div className="absolute left-0 top-0 w-20 p-1">
          <div className="relative mb-2">
            <div className="h-20 border border-neutral/30 rounded-md bg-base-100/70 absolute left-1/3 w-14 z-20"></div>
            <div className="h-20 border border-neutral/30 rounded-md bg-base-100/70 relative w-14"></div>
          </div>
          <div className="relative mb-2">
            <div className="h-20 border border-neutral/30 rounded-md bg-base-100/70 absolute left-1/3 w-14 z-20"></div>
            <div className="h-20 border border-neutral/30 rounded-md bg-base-100/70 relative w-14"></div>
          </div>
          <div className="relative">
            <div className="h-20 border border-neutral/30 rounded-md bg-base-100/70 absolute left-1/3 w-14 z-20"></div>
            <div className="h-20 border border-neutral/30 rounded-md bg-base-100/70 relative w-14"></div>
          </div>
        </div>

        {/* 中央卡牌区域 - 玩家战斗场 */}
        <div className="absolute left-1/2 top-2/7 !-translate-x-1/2 !-translate-y-1/2">
          <div className="w-16 h-24 border border-primary/30 rounded-md bg-base-100/70"></div>
        </div>

        {/* 玩家备战区 */}
        <div className="absolute left-1/2 p-4 top-[55%] !-translate-x-1/2 !-translate-y-1/2">
          <div className="flex justify-center gap-2">
            <div className="w-14 h-20 border border-primary/30 rounded-md bg-base-100/70"></div>
            <div className="w-14 h-20 border border-primary/30 rounded-md bg-base-100/70"></div>
            <div className="w-14 h-20 border border-primary/30 rounded-md bg-base-100/70"></div>
            <div className="w-14 h-20 border border-primary/30 rounded-md bg-base-100/70"></div>
            <div className="w-14 h-20 border border-primary/30 rounded-md bg-base-100/70"></div>
          </div>
        </div>

        {/* 玩家手牌区 */}
        <div className="absolute left-1/2 bottom-4 !-translate-x-1/2">
          <div className="w-96 h-24 border border-primary/30 rounded-md bg-secondary/10 flex justify-center items-center">
            <span className="text-xs text-primary/70">手牌区</span>
          </div>
        </div>

        {/* 右侧区域 - 玩家牌库和弃牌区 */}
        <div className="absolute right-0 top-0 w-20 p-1">
          <div className="mb-2">
            <div className="w-14 h-20 border border-primary/30 rounded-md bg-base-100/70 mx-auto"></div>
            <div className="text-xs mt-1 text-primary/70 text-center">牌库</div>
          </div>
          <div>
            <div className="w-14 h-20 border border-primary/30 rounded-md bg-base-100/70 mx-auto"></div>
            <div className="text-xs mt-1 text-primary/70 text-center">
              弃牌区
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
