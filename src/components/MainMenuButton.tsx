type MainMenuButtonType = {
  text: string
}

export default function MainMenuButton({ text }: MainMenuButtonType) {
  return (
    <button className=" h-full w-full text-mainPalette-text transition-all lg:hover:bg-mainPalette-textLowlight lg:hover:bg-opacity-50">
      <p className="group-active:scale-95">{text}</p>
    </button>
  )
}
