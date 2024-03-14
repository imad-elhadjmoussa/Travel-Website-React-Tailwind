import React from 'react'
import contactBg from './../../Images/2.jpg'
import { ContactForm } from './ContactForm'

export const Contact = () => {
    return (
        <div >
            <div
                style={{ backgroundImage: `url(${contactBg})` }}
                className='bg-center bg-cover bg-no-repeat w-[100vw] h-[70vh] flex items-center justify-center'
            >
                <h1 className='text-5xl font-bold text-white'>
                    Contact
                </h1>
            </div>
            <div className=' flex justify-center px-10 pt-10'>
                <ContactForm />
            </div>
        </div>
    )
}
