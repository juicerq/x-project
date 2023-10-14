import { Heart, MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative h-[2000px] w-screen border-x border-mainPalette-textLowlight lg:w-[550px]">
      <div className="fixed w-screen items-center border border-mainPalette-textLowlight bg-black bg-opacity-50 backdrop-blur-xl lg:w-[550px] lg:-translate-x-[1px]">
        <button className="h-fit p-2 text-xl font-bold text-mainPalette-text lg:h-10">
          Home
        </button>
        <button className="flex-center group h-12 w-full text-mainPalette-text transition-all lg:h-16 lg:hover:bg-mainPalette-textLowlight">
          <p className="group-active:scale-95">Following</p>
        </button>
      </div>
      <div className="w-full border-y border-mainPalette-textLowlight pt-[105px]">
        <div className="flex px-4 py-2">
          <div className="mr-2">
            <div className=" h-8 w-8 rounded-full bg-white hover:opacity-80" />
          </div>
          <div className="w-full space-y-2">
            <div className="flex items-center gap-2 text-zinc-400">
              <p className="cursor-pointer font-bold text-white hover:underline">
                Jui
              </p>
              <p>@jui.cerq</p>
              <p>-</p>
              <p className="cursor-pointer hover:underline">2h</p>
            </div>
            <div className="h-[350px] w-full">
              <div className="h-full w-full rounded-xl bg-red-300" />
            </div>
            <div className="flex w-full items-center gap-6">
              <div className="group flex cursor-pointer text-zinc-400">
                <MessageCircle className="rounded-full bg-transparent p-1 transition-all group-hover:bg-blue-500 group-hover:bg-opacity-30 group-hover:text-blue-600" />
                <p className="group-hover:text-blue-600">0</p>
              </div>
              <div className="group flex cursor-pointer text-zinc-400">
                <Heart className="rounded-full bg-transparent p-1 transition-all group-hover:bg-red-500 group-hover:bg-opacity-30 group-hover:text-red-600" />
                <p className="transition-all group-hover:text-red-600">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
