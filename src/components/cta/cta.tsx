import Button from "../button/button";

export default function Cta() {
    return (
        <div className='flex w-[375px] lg:w-[1440px] flex-col items-start gap-12 lg:gap-20 px-5 lg:px-16 py-16 lg:py-28'>
            <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-20 justify-center self-stretch'>
            <div className='flex flex-col items-start gap-3 lg:gap-6 lg:flex-[1_0_0] self-stretch'>
                <div className='flex w-[375px] lg:w-[768px] flex-col items-start gap-12 lg:gap-6 px-5 py-16'>
                    <h3 className='self-stretch  text-[32px] lg:text-[40px] not-italic font-bold leading-[120%]'>Transforming Ideas into Powerful Solutions</h3>
                    <p className='self-stretch  text-base lg:text-lg not-italic font-normal leading-[150%]'>
                        Contact us today for a personalized consultation of quote.
                    </p>
                </div>
            </div>
            <div className='flex items-start gap-4'>
                <Button buttonText='Contact' />
                <Button buttonText='Get Started' />
            </div>
        </div>
      </div>
    )
}