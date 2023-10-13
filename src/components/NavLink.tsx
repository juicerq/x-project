import { ReactNode } from 'react'

type NavLink = {
  text: string
  icon: ReactNode
}

export default function NavLink({ text, icon }: NavLink) {
  return (
    <div className="flex w-fit cursor-pointer items-center justify-start gap-4 rounded-2xl py-2 pl-2 pr-4 transition-all hover:bg-mainPalette-textLowlight">
      <div className="text-white">{icon}</div>
      <li className="text-lg font-bold text-mainPalette-text">{text}</li>
    </div>
  )
}
