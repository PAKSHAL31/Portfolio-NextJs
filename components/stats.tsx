'use client'

import CountUp, {useCountUp} from "react-countup"


const stats = [
    {
        num: 5,
        text: "Years of experience"
    },
    {
        num: 10,
        text: "Projects Completed"
    },
    {
        num: 8,
        text: "Technologies Mastered"
    },
]

const Stats = () => {
  return (
   <section>
    <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((item,index)=>{
                return (
                    <div key = {index} className="flex-1 flex gap-4 items-center justify-center xl:justify-normal">
                        <CountUp 
                        end = {item.num}
                        duration={4}
                        delay={0.5}
                        className="text-[5.5rem] font-extrabold" />
                        <p className={`${item.text.length < 15 ? "max-w-[150px]": "max-w-[200px]"} leading-snug font-semibold`}>{item.text}</p>
                    </div>
                )
            })}
        </div>
    </div>
    </section>
  )
}

export default Stats
