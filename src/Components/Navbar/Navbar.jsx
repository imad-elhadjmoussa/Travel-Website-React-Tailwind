import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion'
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom'
import { Menu } from './Menu';


export const Navbar = () => {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className=' fixed right-0 left-0 z-50 bg-white my-2 mx-2 rounded-xl text-dark1  p-3 shadow-lg md:flex md:justify-between md:items-center' >
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl cursor-pointer font-bold'>
                    <Link to='/'>Trippy</Link>
                </h1>
                <div
                    className=' cursor-pointer  rounded-full p-1  transition ease-linear duration-200 md:hidden'
                    onClick={() => { setIsClicked(!isClicked) }}
                >
                    {!isClicked ? <MenuIcon style={{ width: '30px', height: '30px', cursor: 'pointer', transition: '2' }} /> : <ClearIcon exit={{ opacity: 0, scale: 0 }} />}
                </div>
            </div>

            {
                isClicked && (<motion.div initial={{ height: '0px' }} animate={{ height: '275px' }} transition={{ duration: '0.5' }} exit={{ height: '200px' }} className='md:hidden  transition ease-linear duration-200 flex justify-center'>
                    <Menu isAnimate={true} />
                </motion.div>)
            }

            <div className=' hidden md:block'>
                <Menu isAnimate={false} />
            </div>

        </div>
    )
}






