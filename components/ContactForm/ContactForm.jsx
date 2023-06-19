"use client"
import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6ek032h', 'template_uagihy6', form.current, '6d8OQz_t9mT_2zS_A')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  return (
    <>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-5'>
            <div className='flex md:flex-row flex-col w-full gap-5'>
                <div className='md:w-1/2'>
                    <input type='text' name='name' placeholder='Name *' className='w-full h-full p-4 bg-transparent border border-slate' />
                </div>
                <div className='md:w-1/2'>
                    <input type='email' name='email' placeholder='Email *' className='w-full h-full p-4 bg-transparent border border-slate' />
                </div>
            </div>
            <div>
                <input type='phone' name='phone' placeholder='Phone' className='w-full h-full p-4 bg-transparent border border-slate' />
            </div>
            <div>
                <textarea name='message' rows={5} placeholder='Message' className='w-full h-full p-4 bg-transparent border border-slate' />
            </div>
            <button type="submit" className='w-full border border-slate p-3 uppercase'>Send Message</button> 
        </form>
    </>
  )
}

export default ContactForm