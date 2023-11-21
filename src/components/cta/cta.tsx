import Button from "../button/button";

export default function Cta() {
    return (
        <div className='flex w-[1440px] flex-col items-start gap-20 px-16 py-28'>
            <div className='flex items-center gap-20 self-stretch'>
            <div className='flex flex-col items-start gap-6 flex-[1_0_0]'>
                <div className='flex w-[768px] flex-col items-start gap-6'>
                    <h3 className='self-stretch  text-[40px] not-italic font-bold leading-[120%]'>Transforming Ideas into Powerful Solutions</h3>
                    <p className='self-stretch  text-lg not-italic font-normal leading-[150%]'>
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