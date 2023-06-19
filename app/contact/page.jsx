
import ContactForm from '@components/ContactForm/ContactForm'
import React from 'react'

const Contact = () => {
  return (
    <>
     <section id='contact' className='md:h-full pb-20'>
            {/* Title */}
                <div className='space-y-5'>
                    <h3 className='text-orange uppercase'>Contact</h3>
                    <div className='space-y-5'>
                        <h1 className='text-2xl md:text-3xl'><span className="underline decoration-1 decoration-slate underline-offset-[12px]">Get In </span> Touch</h1>
                        <p className='text-xl md:text-2xl text-darkWhite text-justify'>
                        If you have any suggestion, project or even you want to say “hello”, please fill out the form below and I will reply you shortly.
                        </p>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                    {/* Address Details */}
                   <div className='space-y-10'>
                    <div className='pt-10 space-y-2'>
                            <p className='text-xs text-slate tracking-wider uppercase'>Address</p>
                            <p className='md:text-2xl text-xl'>Lakhimpur-Kheri, U.P.<br /> India</p>
                        </div>
                        {/* Phone */}
                        <div className='space-y-2'>
                            <p className='text-xs text-slate tracking-wider uppercase'>Phone</p>
                            <p className='md:text-2xl text-xl'>(+91) 6386946873 </p>
                        </div>
                    <div>
                        <p className='text-sm underline decoration-slate decoration-1 underline-offset-4'>devendrajohari9@gmail.com</p>
                    </div>
                   </div>
                </div>
        </section>
    
    </>
  )
}

export default Contact