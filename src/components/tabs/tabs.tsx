import { ReactNode } from "react"

interface TabsProps {
    children: ReactNode;
}

export default function Tabs({children}: TabsProps) {
    return (
        <div className='flex flex-col items-start gap-10 self-stretch flex-[1_0_0]'>
            {children}
        </div>
    )
}