import React, {useContext} from 'react'
import About from './about/page';
import Experience from './experience/page';
import Portfolio from './portfolio/page';
import Blogs from './blogs/page';
import Contact from './contact/page';

const Index = () => {
    return (
        <>
        <div className='space-y-12'>
        <section className="w-full pt-20 h-screen" id='home'>
            <div className='space-y-5'>
            <h3 className='text-orange uppercase'>Introduction</h3>        
            <div className='flex flex-col gap-5'>
                    <h1 className='md:text-3xl text-2xl'><span className="underline decoration-1 decoration-slate underline-offset-[20px]">Full Stack </span> Developer</h1>
                    {/* Description */}
                    <p className="text-xl text-darkWhite md:w-2/3 text-justify">
                        I design and develop services for customers of all sizes, 
                        specializing in creating stylish, modern websites, 
                        web services and online stores.
                    </p>
            </div>
                {/* Signature */}
                <h1 className='text-4xl text-slate font-YellowTail'>Devendra Johari</h1>
            </div>
        </section>
            <About />
            <Experience />
                 <Portfolio />
                 <Blogs />
                 <Contact /> 
        </div>
        </>
  )
}

export default Index;