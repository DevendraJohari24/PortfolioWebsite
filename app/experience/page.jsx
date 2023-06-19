import React from 'react'
import ExperienceCard from '@components/ExperienceCard/ExperienceCard';
import { Experiences } from '@utils/data';

const Experience = () => {
  return (
    <>
    <section className='md:h-fit' id='experience'>
            {/* Title */}
           <div className='w-full space-y-5'>
           <div className="flex md:text-3xl text-2xl gap-4">
                <div className='text-orange decoration-1 underline underline-offset-8'>Experience</div>
                <div className='w-12 my-auto md:block hidden'><div className='w-full h-0.5 bg-slate'></div></div>
                <div className="md:block hidden">Education</div>
                <div className='w-12 my-auto md:block hidden'><div className='w-full h-0.5 bg-slate'></div></div>
                <div className='md:block hidden'>Skills</div>
            </div>

            {/* Experience Card */}
            <div className=' space-y-8'>
                {Experiences.experience.map((item, index) => (
                    <ExperienceCard key={index} company_title={item.company_name} start_date={item.start_date} end_date={item.end_date} designation={item.designation} description={item.description} />
                ))}
            </div>   

           </div>
        </section>
    </>
  )
}

export default Experience