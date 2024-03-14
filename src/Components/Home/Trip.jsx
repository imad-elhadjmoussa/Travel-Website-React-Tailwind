import React from 'react'
import { motion } from 'framer-motion'


export const Trip = ({ trip }) => {
    return (
        <motion.div
            className=' p-3 cursor-pointer rounded-lg shadow-lg flex flex-col gap-2 sm:max-w-none max-w-[400px]'
            
            transition={{duration:0.3}}
            whileHover={
                {
                    scale:1.03
                }
            }

        >
            <div>
                <img className='h-[250px] w-[100%] rounded-lg' src={trip.img} alt="" />
            </div>
            <h2 className=' font-bold text-2xl text-dark1 '>
                {trip.textHead}
            </h2>
            <p className=' text-dark2 '>
                {trip.textContent}
            </p>
        </motion.div>
    )
}
