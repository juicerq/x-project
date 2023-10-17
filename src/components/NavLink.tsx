import Link from 'next/link'
import { ReactNode } from 'react'

type NavLink = {
  text: string
  icon: ReactNode
  url: string
  isBold: boolean
  setBold: (text: string) => void
}

export default function NavLink({ text, icon, url, isBold, setBold }: NavLink) {
  return (
    <li className={`text-lg text-mainPalette-text`}>
      <Link
        href={url}
        onClick={() => setBold(text)}
        className={`flex w-fit gap-4 rounded-full transition-all hover:bg-mainPalette-textLowlight md:p-4 lg:py-2 lg:pr-6 ${
          isBold && 'font-bold'
        }`}
      >
        <div className="text-white md:h-8 md:w-8 lg:h-6 lg:w-6">{icon}</div>
        <p className="hidden lg:block">{text}</p>
      </Link>
    </li>
  )
}
