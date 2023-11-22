export default function Contact() {
    return (
        <div className='flex w-[375px] lg:w-[1440px] lg:h-[1232px] flex-col items-center gap-12 lg:gap-20 px-5 lg:px-16 py-16 lg:py-28'>
        <div className='flex items-start gap-12 lg:gap-20 self-stretch flex-col lg:flex-row'>
          <div className='flex flex-col items-start gap-4 lg:flex-[1_0_0] self-stretch'>
            <p className='text-center text-base not-italic font-semibold leading-[150%]'>Innovative</p>
            <div className='flex flex-col items-start gap-6 self-stretch'>
              <h2 className='self-stretch text-4xl lg:text-5xl not-italic font-bold leading-[120%]'>Get in Touch</h2>
              <p className='self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]'>
              We'd love to hear from you. Contact us for any inquiries or collaborations.
              </p>
            </div>
          </div>
          <div className='flex lg:w-[500px] flex-col items-start gap-6 px-0 py-2 self-stretch'>
            <div className='flex items-start gap-4 self-stretch'>
              <div className='w-6 h6'></div>
              <div className='flex flex-col items-start gap-2 flex-[1_0_0]'>
                <h6 className='self-stretch text-xl not-italic font-bold leading-[140%]'>Email</h6>
                <p className='self-stretch text-base not-italic font-normal leading-[150%] underline'>development_gf@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[1312px] h-[738px] shrink-0'></div>
      </div>
    )
}