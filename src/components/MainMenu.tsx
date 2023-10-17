import { ReactNode } from 'react'

type MainMenuType = {
  children: ReactNode
}

export default function MainMenu({ children }: MainMenuType) {
  return <div className="flex-center group h-12 w-full lg:h-16">{children}</div>
}
