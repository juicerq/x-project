'use client'

import MainMenu from '@/components/MainMenu'
import MainMenuButton from '@/components/MainMenuButton'
import Post from '@/components/Post'

export default function Home() {
  const tweetInput = document.getElementById('tweet-input')

  return (
    <main className="relative h-[2000px] w-screen border-x border-mainPalette-textLowlight lg:w-[550px]">
      <div className="fixed w-screen items-center border-x border-b border-mainPalette-textLowlight bg-black bg-opacity-50 backdrop-blur-xl lg:w-[550px] lg:-translate-x-[1px]">
        <button className="h-fit p-2 text-xl font-bold text-mainPalette-text lg:h-10">
          Home
        </button>

        <MainMenu>
          <MainMenuButton text="Following" />
        </MainMenu>
      </div>
      <div className="w-full border-y border-mainPalette-textLowlight pt-[105px]">
        <div className="flex border-b border-mainPalette-textLowlight px-4 pt-4">
          <div className="mr-2">
            <div className=" h-8 w-8 rounded-full bg-white hover:opacity-80" />
          </div>

          <div className="w-full">
            <textarea
              className=" h-20 w-full resize-none overflow-y-clip bg-transparent text-white focus:outline-none"
              placeholder="What's happening?!"
            />
            <div className="flex w-full justify-end border-t border-mainPalette-textLowlight py-2">
              <button className="rounded-full bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-400 active:scale-95">
                Post
              </button>
            </div>
          </div>
        </div>

        <Post
          profileName="Jui"
          username="@jui.cerq"
          content="Meu primeiro post"
          date="Oct 10"
          comments={5}
          likes={102}
        />
        <Post
          profileName="Jui"
          username="@jui.cerq"
          content="Meu primeiro post"
          date="Oct 10"
          comments={5}
          likes={102}
        />
      </div>
    </main>
  )
}
