import MainMenu from '@/components/MainMenu'
import MainMenuButton from '@/components/MainMenuButton'
import { Search } from 'lucide-react'

export default function Explore() {
  return (
    <main className="relative h-[2000px] w-screen border-x border-mainPalette-textLowlight lg:w-[550px]">
      <div className="fixed w-screen items-center border border-mainPalette-textLowlight bg-black bg-opacity-50 backdrop-blur-xl lg:w-[550px] lg:-translate-x-[1px]">
        <div className="relative w-full px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="peer w-full rounded-full bg-mainPalette-textLowlight p-2 pl-14 text-white outline-none focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-blue-500"
          />
          <Search className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 text-zinc-400 peer-focus-visible:text-blue-500" />
        </div>

        <MainMenu>
          <MainMenuButton text="Most Liked" />
        </MainMenu>
      </div>
    </main>
  )
}
