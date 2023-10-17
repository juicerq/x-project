import { FilePlus2 } from 'lucide-react'

export default function MakePost() {
  return (
    <div className="w-full">
      <textarea
        className=" h-20 w-full resize-none overflow-y-clip bg-transparent text-white focus:outline-none"
        placeholder="What's happening?!"
      />
      <div className="flex w-full items-center justify-between border-t border-mainPalette-textLowlight py-2">
        <div className="text-blue-500">
          <label
            className="flex cursor-pointer items-center gap-2 rounded-full p-2 hover:bg-blue-500 hover:bg-opacity-10"
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
  )
}
