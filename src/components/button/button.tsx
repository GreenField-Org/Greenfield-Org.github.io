interface ButtonProps {
    buttonText: string;
    onClick?: () => void;
}

export default function Button({ buttonText, onClick }: ButtonProps) {
    return (
        <button className={`flex justify-center items-center gap-2 border px-6 py-3 border-solid border-green-400 rounded-2xl`} onClick={onClick}>{buttonText}</button>
    )
}