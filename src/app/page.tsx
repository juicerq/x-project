import MainMenu from '@/components/MainMenu'
import MainMenuButton from '@/components/MainMenuButton'
import MakePost from '@/components/MakePost'
import Post from '@/components/Post'

export default function Home() {
  return (
    <main className="relative w-screen border-x border-mainPalette-textLowlight lg:w-[550px]">
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

          <MakePost />
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
