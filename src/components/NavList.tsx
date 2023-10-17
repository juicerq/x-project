'use client'

import { Home, Search } from 'lucide-react'
import NavLink from './NavLink'
import { useState } from 'react'

export default function NavList() {
  const [bold, setBold] = useState<string>('Home')

  const handleBoldLink = (text: string) => {
    setBold(text)
  }

  return (
    <nav>
      <ul className="flex flex-col gap-2 p-0">
        <NavLink
          text="Home"
          icon={<Home />}
          url="/"
          isBold={bold === 'Home'}
          setBold={handleBoldLink}
        />
        <NavLink
          text="Explore"
          icon={<Search />}
          url="/explore"
          isBold={bold === 'Explore'}
          setBold={handleBoldLink}
        />
        {/* <NavLink
          text="Notifications"
          icon={<Bell className="md:h-8 md:w-8 lg:h-6 lg:w-6" />}
          url="/explore"
          isBold={bold === 'Notifications'}
          setBold={handleBoldLink}
        /> */}
      </ul>
    </nav>
  )
}
