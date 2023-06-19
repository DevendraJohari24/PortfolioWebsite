import React from 'react'

const About = () => {
  return (
    <>
    <section className='md:h-fit -mt-12' id='about'>
            {/* Title */}
            <div className='space-y-5'>
                <h3 className='text-orange uppercase'>About Me</h3>
                <div className='space-y-4'>
                    <h1 className='md:text-3xl text-2xl'><span className="underline decoration-slate decoration-1 underline-offset-[20px]">Biograp</span>hy</h1>
                    <p className='text-xl text-darkWhite text-justify'>
                    I am an enthusiastic and passionate Full Stack Developer with a strong desire to learn and grow in the field of software development. As a recent graduate, I am eager to apply my skills and knowledge to contribute to innovative projects and make a meaningful impact in the industry.                    </p>
                </div>
            {/* Details */}
            <div className={`flex flex-col md:flex-row md:gap-0 gap-5 `}>
                {/* Details */}
                <div className={`flex md:space-x-20 space-x-4 text-sm md:text-lg`}>
                    <div className='flex flex-col space-y-5 text-slate uppercase font-bold'>
                        <p>Name</p>
                        <p>Birthday</p>
                        <p>Age</p>
                        <p>Address</p>
                        <p>Phone</p>
                        <p>Email</p>
                        <p>LinkedIn</p>
                    </div>
                    <div className='flex flex-col space-y-5 dark:text-white text-black'>
                        <p>Devendra Johari</p>
                        <p>20th November 2001 </p>
                        <p>22 years</p>
                        <p>Lakhimpur-Kheri</p>
                        <p>(+91) 6386946873</p>
                        <p>devendrajohari9@gmail.com</p>
                        <a href='https://www.linkedin.com/in/devendra-johari-a169b0190/'><p>devendra-johari-a169b0190</p></a>
                    </div>
                </div>
            {/* Download CV */}
            <div className={`flex self-center md:self-start md:mt-0 mt-5`}>
            <a href="" target='_blank'>

                    <div className='p-5 flex flex-col items-center border'>
                    <div className='w-24 h-24'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full text-darkWhite">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>
                    </div>
                        <div className='uppercase text-slate font-semibold text-sm'>Download CV</div>
                    </div>
                    </a>
            </div>                 
        </div>

        </div>

        </section>
    </>
  )
}

export default About