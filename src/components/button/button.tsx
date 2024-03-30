interface ButtonProps {
  buttonText: string
  onClick?: () => void
}

export default function Button({ buttonText, onClick }: ButtonProps) {
  return (
    <button
      className={`flex justify-center items-center gap-2 border px-6 py-3 border-solid bg-primary rounded-2xl text-white`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  )
}
