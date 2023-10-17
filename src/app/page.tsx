import MainMenu from '@/components/MainMenu'
import MainMenuButton from '@/components/MainMenuButton'
import Post from '@/components/Post'
import { FilePlus2 } from 'lucide-react'

export default function Home() {
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
            <div className="flex w-full items-center justify-between border-t border-mainPalette-textLowlight py-2">
              <div className="text-blue-500">
                <label
                  className="flex cursor-pointer items-center gap-2 rounded-full p-2 hover:bg-blue-500 hover:bg-opacity-30"
                  htmlFor="postfile"
                >
                  <FilePlus2 className="h-5 w-5" />
                </label>
                <input
                  className="absolute top-[-999px]"
                  type="file"
                  name="postfile"
                  id="postfile"
                />
              </div>
              <button className="rounded-full bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-400">
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
