"use client"

import React, { useEffect, useState } from 'react'
import { Achievements } from '@utils/data'

const Intro = () => {
    const [displayTitle, setDisplayTitle] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
  
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setDisplayTitle(Achievements.titles[index].title);
            if(index >= Achievements.titles.length - 1){
                setIndex(0);
            }else{
                setIndex(index+1);
            }
        }, 2000);
  
        //Clearing the interval
        return () => clearInterval(interval);
    }, [displayTitle]);

    return (
    <>
        <section id='intro' className='flex justify-center'>
            <div className='flex flex-col gap-10'>
                <div className='relative h-fit flex justify-center group'>
                    <div className='absolute md:w-[390px] md:h-[560px] w-5/6 border border-slate group-hover:border-white h-[430px]'></div>
                    <div className='absolute md:w-[440px] w-full md:h-[520px] h-[390px] border-slate mt-4 border group-hover:border-white'></div>
                    <div className='w-fit text-center space-y-4 mt-8'>
                        <div className="md:w-[300px] w-[230px] h-[260px] md:h-[400px]">
                            <img src="/profile.jpg" alt='' className='w-full h-full object-cover opacity-70' />
                        </div>
                        <div>
                            <p className='uppercase text-slate'>Hi there! I am</p>
                            <div className='w-full flex justify-between'>
                                <div className='text-green text-2xl'>[</div>
                                <p className='text-xl self-center typed'>
                                {displayTitle}
                                </p>
                                <div className='text-green text-2xl'>]</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <div className='w-2 h-2 bg-green rounded-full'></div>
                    <div><p className='font-light underline md:text-base text-sm underline-offset-4 decoration-1 decoration-slate'>I’m available for a freelance job. Hire me</p></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Intro