import { ReactNode } from "react"

export interface ContainerProps {
    children: ReactNode
}

export default function Container({children}: ContainerProps) {
    return (
        <div className='flex w-[1440px] flex-col items-start gap-20 px-16 py-28'>
            {children}
        </div>
    )
}