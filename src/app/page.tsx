import Button from '@/components/button/button'
import Contact from '@/components/contact/contact'
import Container from '@/components/container/container'
import Cta from '@/components/cta/cta'

export default function Home() {
  return (
    <main>
      <div className='flex w-[375px] lg:w-[1440px] h-[900px] flex-col items-center gap-20 px-5 lg:px-16 py-0'>
        <div className='flex items-center flex-[1_0_0] self-stretch'>
          <div className='flex flex-col lg:justify-center items-start gap-6 lg:flex-[1_0_0] self-stretch px-0 py-16 lg:pr-0'>
            <div className='flex flex-col items-start gap-6 self-stretch'>
              <h1 className='self-stretch text-[40px] lg:text-[56px] not-italic font-bold leading-[120%]'>Empowering Innovation Through Inclusive Software Development</h1>
              <p className='self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]'>At GreenField Dev, we are a LGBTQIA+ owned software development company dedicated to creating innovative solutions that drive positive change. With our expertise and commitment to social good, we work closely with our clients to meet their goals in a safe and respectful space.</p>
            </div>
            <div className='flex items-start gap-4 pt-4'>
              <Button buttonText='Learn More' />
            </div>
          </div>
          <div className='flex h-[460.305px] lg:h-[900px] items-start gap-[8.183px] lg:gap-4 flex-[1_0_0] w-[335px]'>
            <div className='flex w-[319.253px] h-[2732px] flex-col items-start gap-4 absolute bottom-[-1832px] right-0'></div>
            <div className='flex w-[319.253px] h-[2732px] flex-col items-start gap-4 absolute bottom-[-1680px]'></div>
          </div>
        </div>
      </div>
      <div className='flex w-[1440px] flex-col items-start gap-20 px-16 py-28'>
        <div className='flex items-start gap-20 self-stretch'>
          <div className='flex flex-col items-start gap-4 flex-[1_0_0]'>
            <p className='self-stretch text-base not-italic font-semibold leading-[150%]'>Empowering</p>
            <h2 className='self-stretch text-5xl not-italic font-bold leading-[120%]'>Creating a Safe and Respectful Space for Clients</h2>
          </div>
          <div className='flex flex-col items-start gap-6 self-stretch flex-[1_0_0]'>
            <p className='self-stretch text-lg not-italic font-normal leading-[150%]'>At GreenField Dev, we are committed to social good and strive to create a safe and respectful space for our clients. Through our LGBTQIA+ owned company, we prioritize inclusivity and work closely with our clients to help them achieve their goals.</p>
            <div className='flex items-start gap-6 self-stretch px-0 py-2'>
              <div className='flex flex-col items-start gap-4 flex-[1_0_0]'>
                <h6 className='self-stretch  text-xl not-italic font-bold leading-[140%]'>Inclusivity</h6>
                <p className='self-stretch  text-base not-italic font-normal leading-[150%]'>We embrace diversity and ensure that every client feels valued and respected.</p>
              </div>
              <div className='flex flex-col items-start gap-4 flex-[1_0_0]'>
                <h6 className='self-stretch  text-xl not-italic font-bold leading-[140%]'>Collabration</h6>
                <p className='self-stretch  text-base not-italic font-normal leading-[150%]'>We work hand in hand with our clients to understand their needs and deliver exceptional results.</p>
              </div>
            </div>
            <div className='flex items-center gap-6 pt-4'>
              <Button buttonText='Learn More' />
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className='flex items-center gap-20 self-stretch'>
          <div className='flex flex-col items-start gap-10 flex-[1_0_0]'>
            <div className='flex justify-center items-start gap-8 self-stretch'>
              <h4 className='self-stretch  text-[32px] not-italic font-bold leading-[130%]'>Custom Software Development</h4>
              <p className='self-stretch  text-base not-italic font-normal leading-[150%]'>We create tailored software solutions that meet your unique business needs. Our team of experienced developers will work closely with you to ensure a successful outcome.</p>
            </div>
            <div className='flex justify-center items-start gap-8 self-stretch'>
              <h4 className='self-stretch  text-[32px] not-italic font-bold leading-[130%]'>Mobile App Development</h4>
              <p className='self-stretch  text-base not-italic font-normal leading-[150%]'>We specialize in developing mobile applications for iOS and Android platforms. Our apps are user-friendly, visually appealing, and designed to enhance your brand's presence.</p>
            </div>
            <div className='flex justify-center items-start gap-8 self-stretch'>
              <h4 className='self-stretch  text-[32px] not-italic font-bold leading-[130%]'>Web Development</h4>
              <p className='self-stretch  text-base not-italic font-normal leading-[150%]'>Our web development services cover everything from creating responsive websites to building complex web applications. We focus on delivering high-quality solutions that drive results.</p>
            </div>
          </div>
          <div className='h-[640px] flex-[1_0_0]'></div>
        </div>
      </Container>
      <Container>
        <div className='flex items-center gap-20 self-stretch'>
          <div className='flex flex-col items-start gap-6 flex-[1_0_0]'>
            <div className='flex flex-col items-start gap-8 self-stretch'>
              <div className='flex flex-col items-start gap-4 self-stretch'>
                <p className='text-center text-base not-italic font-semibold leading-[150%]'>Innovation</p>
                <h2 className='self-stretch  text-5xl not-italic font-bold leading-[120%]'>Unlocking Potential through Innovative Software Solutions</h2>
                <p className='self-stretch  text-lg not-italic font-normal leading-[150%]'>
                At GreenField Dev, we are proud to be an LGBTQIA+ owned software development company. We believe in the power of diversity and inclusivity, and we leverage our unique perspective to deliver exceptional software solutions that meet your goals.
                </p>
              </div>
            </div>
            <div className='flex items-start gap-6 self-stretch px-0 py-2'>
              <div className='flex flex-col items-start gap-2 flex-[1_0_0]'>
                <h2 className='self-stretch  text-5xl not-italic font-bold leading-[120%]'>50%</h2>
                <p className='self-stretch  text-base not-italic font-normal leading-[150%]'>Reduced Development Time with Agile Methodology</p>
              </div>
              <div className='flex flex-col items-start gap-2 flex-[1_0_0]'>
                <h2 className='self-stretch  text-5xl not-italic font-bold leading-[120%]'>50%</h2>
                <p className='self-stretch  text-base not-italic font-normal leading-[150%]'>Increased Customer Satisfaction with User-Centric Design</p>
              </div>
            </div>
            <div className='flex items-center gap-6 pt-4'>
              <Button buttonText='Learn More' />
            </div>
          </div>
          <div className='h-[640px] flex-[1_0_0]'></div>
        </div>
      </Container>
      <Container>
        <div className='flex items-center gap-20 self-stretch'>
          <div className='h-[640px] flex-[1_0_0]'></div>
          <div className='flex flex-col items-start gap-8 flex-[1_0_0]'>
            <div className='flex items-start gap-1' id='stars'></div>
            <p className='self-stretch text-2xl not-italic font-bold leading-[140%]'></p>
            <div className='flex items-center gap-5'></div>
          </div>
        </div>
      </Container>
      <Cta />
      <Contact />
    </main>
  )
}
