import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-(--color-primary) to-(--color-accent) text-transparent bg-clip-text mb-5">
              宝可梦集换式卡牌游戏
            </h1>
            <p className="mb-5 text-base text-gray-700">
              欢迎来到宝可梦卡牌世界，开始您的卡牌对战之旅吧！
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/battle/mode"
                className="btn btn-primary btn-lg text-lg px-8"
              >
                开始对战
              </Link>
              <Link
                href="/deck"
                className="btn btn-secondary btn-lg text-lg px-8"
              >
                卡组配置
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
