import { ReactNode } from "react"

export interface ContainerProps {
    children: ReactNode
}

export default function Container({children}: ContainerProps) {
    return (
        <div className='flex w-[375px] lg:w-[1440px] flex-col items-start gap-12 lg:gap-20 px-5 lg:px-16 py-16 lg:py-28'>
            {children}
        </div>
    )
}