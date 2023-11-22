import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
    name: string;
    role: string;
    bio: string;
    socials?: Array<ReactNode>;
}

export default function Card({name, role, bio, socials}: CardProps) {
    return (
        <div className='flex flex-col items-start gap-5 self-stretch'>
            <div className='flex flex-col items-start gap-5 self-stretch'>
                <div className='flex flex-col items-start gap-3 self-stretch'>
                    <div className='flex flex-col items-start gap-3 self-stretch'>
                        <div className='flex flex-col items-center self-stretch'>
                            <p className='self-stretch text-lg not-italic font-semibold leading-[150%]'>{name}</p>
                            <p className='self-stretch text-base not-italic font-normal leading-[150%]'>{role}</p>
                        </div>
                        <p className='self-stretch text-base not-italic font-normal leading-[150%]'>{bio}</p>
                    </div>
                    <div className='flex items-start gap-3.5 pt-1'>
                        {/*socials */}
                    </div>
                </div>
            </div>
        </div>
    )
}