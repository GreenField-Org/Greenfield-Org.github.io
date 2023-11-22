interface TabProps {
    title: string;
    description: string;
}

export default function Tab({title, description}: TabProps) {
    return (
        <div className='flex justify-center items-start gap-8'>
            <div className='flex flex-col justify-center items-start gap-3 lg:gap-4 flex-[1_0_0]'>
                <h4 className='self-stretch text-2xl lg:text-[32px] not-italic font-bold leading-[140%] lg:leading-[130%]'>{title}</h4>
                <p className='self-stretch text-base not-italic font-normal leading-[150%]'>{description}</p>
            </div>
        </div>
    )
}