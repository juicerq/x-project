import { X, Home, Search, Bell } from 'lucide-react'
import NavLink from '../NavLink'

export default function SideBar() {
  return (
    <div className="flex min-h-screen w-1/4 flex-col items-center border-r border-mainPalette-textLowlight py-2">
      <div className="flex h-full flex-col justify-start gap-2">
        <div className="w-fit rounded-full p-1 text-white hover:bg-mainPalette-textLowlight">
          <X size={35} />
        </div>
        <ul className="flex flex-col gap-2 p-0">
          <NavLink text="Home" icon={<Home size={20} />} />
          <NavLink text="Explore" icon={<Search size={20} />} />
          <NavLink text="Notifications" icon={<Bell size={20} />} />
        </ul>
      </div>
    </div>
  )
}
