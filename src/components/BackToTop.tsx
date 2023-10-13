'use client'

import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [display, setDisplay] = useState('hidden')

  function scrollFunction() {
    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    ) {
      setDisplay('block')
    } else {
      setDisplay('hidden')
    }
  }

  function backToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  useEffect(() => {
    const handleScroll = () => {
      scrollFunction()
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      onClick={() => backToTop()}
      className={`fixed bottom-3 right-3 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-[#2c2c2c] text-xl text-white ${display} duration-400 lg:hover:text-mainPalette-primaryButton transition-all`}
    >
      <ChevronUp size={20} />
    </button>
  )
}
