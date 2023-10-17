import { MessageCircle, Heart } from 'lucide-react'

type PostType = {
  profileName: string
  username: string
  content: string
  date: string
  img?: HTMLImageElement
  comments: number
  likes: number
}

export default function Post({
  profileName,
  username,
  content,
  date,
  img,
  comments,
  likes,
}: PostType) {
  return (
    <div className="flex border-b border-mainPalette-textLowlight px-4 py-2">
      <div className="mr-2">
        <div className=" h-8 w-8 rounded-full bg-white hover:opacity-80" />
      </div>

      <div className="flex w-full flex-col gap-1">
        <div className="flex h-fit items-center gap-2 text-zinc-400">
          <p className="cursor-pointer font-bold text-white hover:underline">
            {profileName}
          </p>
          <p>{username}</p>
          <p>•</p>
          <p className="cursor-pointer hover:underline">{date}</p>
        </div>

        <div className="w-full">
          <p className=" text-white">{content}</p>
        </div>

        <div className="h-[350px] w-full">
          <div className="h-full w-full rounded-xl bg-red-300" />
        </div>

        <div className="flex w-full items-center gap-6">
          <div className="group flex cursor-pointer text-zinc-400">
            <MessageCircle className="rounded-full bg-transparent p-1 transition-all group-hover:bg-blue-500 group-hover:bg-opacity-10 group-hover:text-blue-600" />
            <p className="group-hover:text-blue-600">{comments}</p>
          </div>

          <div className="group flex cursor-pointer text-zinc-400">
            <Heart className="rounded-full bg-transparent p-1 transition-all group-hover:bg-red-500 group-hover:bg-opacity-10 group-hover:text-red-600" />
            <p className="transition-all group-hover:text-red-600">{likes}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
