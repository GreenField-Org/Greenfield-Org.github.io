import './wave.css'

interface WaveProps {
  color: string
  direction?: "top" | "bottom"
  animate?: boolean
}

const Wave: React.FC<WaveProps> = ({
  color, 
  direction = top,
  animate = true
}) => {
  return (
    <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className={direction === "top" ? "rotate-0" : "rotate-180"}>
            <defs>
              <path id='sineWave' fill={color} fill-opacity="0.2" d="M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160 V0 H0"/>
            </defs>
            <use className={animate ? "wave" : "sm:animate-none"} href="#sineWave" />
            <use className={animate ? "wave" : "sm:animate-none"} x="-100%" href="#sineWave" />
            <use className={animate ? "wave1" : "sm:animate-none"} href="#sineWave" />
            <use className={animate ? "wave1" : "sm:animate-none"} x="-100%" href="#sineWave" />
            <use className={animate ? "wave2" : "sm:animate-none"} href="#sineWave" />
            <use className={animate ? "wave2" : "sm:animate-none"} x="-100%" href="#sineWave" />
          </svg>
  )
}

export default Wave