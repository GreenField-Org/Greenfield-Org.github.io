import Button from "@/components/button/button";
import Card from "@/components/card/card";
import Container from "@/components/container/container";
import Cta from "@/components/cta/cta";
import Image from "next/image";

export default function About() {
  const team = [
    {
      name: 'Daniel Greener-Vigil',
      role: 'Staff Software Engineer',
      bio: 'Daniel is a highly skilled software engineer with a passion for creating innovative solutions.'
    }, 
    {
      name: 'Hanna Littlefield',
      role: 'Software Engineer',
      bio: ''
    }
  ]

  return (
    <main>
      <div className='flex w-[375px] flex-col items-start gap-12 px-5 py-16'>
        <div className='flex flex-col items-start gap-5 self-stretch'>
          <div className='flex flex-col items-start gap-3 self-stretch'>
            <p className='text-center text-base not-italic font-semibold leading-[150%]'>Empowering</p>
            <h1 className='self-stretch text-[40px] not-italic font-bold leading-[120%]'>GreenField Dev: LGBTQAI+ Owned</h1>
          </div>
          <div className='flex flex-col items-start gap-2 self-stretch'>
            <p className='self-stretch text-base not-italic font-normal leading-[150%]'>
              We are a software development company that prides itself on social good. As an LGBTQIA+ owned business, we are committed to creating a safe and respectful space for our clients to achieve their goals.
            </p>
            <div className='flex items-start gap-4 pt-4'>
              <Button buttonText="Learn More"/>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className='flex flex-col items-start gap-12 self-stretch'>
          <div className='flex flex-col items-start gap-2 self-stretch'>
            <div className='flex flex-col items-start gap-3 self-stretch'>
              <p className='text-center text-base not-italic font-semibold leading-[150%]'>Innovative</p>
              <div className='flex flex-col items-start gap-5 self-stretch'>
                <h2 className='self-stretch text-4xl not-italic font-bold leading-[120%]'>Building a Better Future Through Technology</h2>
                <p className='self-stretch text-base not-italic font-normal leading-[150%]'>
                  At GreenField Dev, we are a LGBTQIA+ owned software development company that prides ourselves in creating social good. We work closely with our clients to meet their goals in a safe and respectful space.
                </p>
              </div>
            </div>
            <div className='flex items-center gap-6 pt-4'>
              <Button buttonText='Learn More' />
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className='flex flex-col items-start gap-12 self-stretch'>
          <div className='flex flex-col items-start gap-6 self-stretch'>
            <div className='flex flex-col items-start gap-3 self-stretch'>
              <p className='text-base not-italic font-semibold leading-[150%]'>Innovative</p>
              <div className='flex flex-col items-start gap-5 self-stretch'>
                <h2 className='self-stretch text-4xl not-italic font-bold leading-[120%]'>Meet Our Team</h2>
                <p className='self-stretch text-base not-italic font-normal leading-[150%]'>
                Get to know the talented individuals behind GreenField Dev.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start gap-12 self-stretch'>
            {team.map(member => {
              return <Card key={member.name} name={member.name} role={member.role} bio={member.bio} />
            })}
          </div>
        </div>
      </Container>
      <div className='flex w-[375px] flex-col justify-center items-center gap-12 px-5 py-12'>
        <div className='flex flex-col items-start gap-8 self-stretch'>
          <p className='self-stretch text-base not-italic font-bold leading-[150%]'>Trusted by industry leaders for exceptional software solutions</p>
          <div className='flex flex-col items-start gap-4 self-stretch pt-4'>
            {/* companies logos */}
            <Image src={'/img/CMMechanical_logo.png'} height={150} width={150} alt="C&M Mecanical HVAC"/>
          </div>
        </div>
      </div>
      <Cta />
    </main>
  )
}