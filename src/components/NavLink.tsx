import Link from 'next/link'
import { ReactNode } from 'react'

type NavLink = {
  text: string
  icon: ReactNode
  url: string
}

export default function NavLink({ text, icon, url }: NavLink) {
  return (
    <div className="flex w-fit cursor-pointer items-center justify-start gap-4 rounded-full transition-all hover:bg-mainPalette-textLowlight md:p-4 lg:py-2 lg:pl-2 lg:pr-6">
      <div className="text-white">{icon}</div>
      <li className="hidden text-lg text-mainPalette-text lg:block">
        <Link href={url}>{text}</Link>
      </li>
    </div>
  )
}
