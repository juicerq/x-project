import { X, MoreHorizontal, Feather } from 'lucide-react'
import NavList from './NavList'

export default function SideBar() {
  return (
    <aside className="hidden max-h-screen flex-col items-end overflow-y-hidden md:py-4 lg:flex lg:w-[28%] lg:px-8 2xl:w-1/3">
      <div className="fixed flex h-full flex-col justify-start md:w-14 md:items-center md:gap-6 lg:w-64 lg:items-start lg:gap-4">
        <div className="w-fit cursor-pointer rounded-full p-1 text-white hover:bg-mainPalette-textLowlight">
          <X size={35} />
        </div>

        <NavList />

        <button className="lg:flex-center rounded-full bg-blue-500 font-bold text-mainPalette-text hover:bg-blue-400 md:p-4 lg:flex lg:h-fit lg:w-full lg:rounded-full lg:py-2 2xl:px-6">
          <Feather size={10} className="hidden text-white md:block lg:hidden" />
          <span className="hidden text-xl lg:block">Post</span>
        </button>

        <div className="relative h-full w-full">
          <div className="cursor-pointer gap-4 rounded-full hover:bg-mainPalette-textLowlight md:absolute md:bottom-10 md:left-1/2 md:h-12 md:w-12 md:-translate-x-1/2 lg:flex lg:h-fit lg:w-full lg:items-center lg:px-3 lg:py-2">
            <div className="rounded-full bg-white md:h-full md:w-full lg:h-10 lg:w-10" />

            <div className="flex flex-col">
              <p className="hidden text-sm font-bold text-white lg:block">
                jui
              </p>
              <p className="hidden text-sm text-zinc-400 lg:block">@jui.cerq</p>
            </div>

            <div>
              <MoreHorizontal
                size={20}
                className="ml-16 hidden text-white lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
