import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { motion } from 'framer-motion'
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom'

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

const Menu = ({ isAnimate }) => {

    const list = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 1,
            }
        },
        hidden: {
            opacity: 0
        },
    }

    const item = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            }
        },
        hidden: {
            opacity: 0,
            x: -100,
        },
    }

    return (
        <motion.ul
            className='md:flex-row md:gap-9 md:items-center py-4 md:py-0 flex flex-col gap-6 text-lg font-bold'
            initial="hidden"
            animate="visible"
            variants={list}
        >
            <motion.li variants={isAnimate && item}  >
                <MenuItem icon={<HomeIcon />} itemName='Home' />
            </motion.li>
            <motion.li variants={isAnimate && item}>
                <MenuItem icon={<InfoIcon />} itemName='About' />
            </motion.li>
            <motion.li variants={isAnimate && item}>
                <MenuItem icon={<HomeRepairServiceIcon />} itemName='Service' />
            </motion.li>
            <motion.li variants={isAnimate && item}>
                <MenuItem icon={<PermContactCalendarIcon />} itemName='Contact' />
            </motion.li>
            <motion.button
                variants={isAnimate && item}
                className=' bg-primaryBlue text-white px-2 py-1 rounded-lg'
            >
                <Link to='/Signup'>Sign Up</Link>
            </motion.button>
        </motion.ul>
    );
}

const MenuItem = ({ icon, itemName }) => {

    return (
        <Link to={itemName === "Home" ? "/" : `/${itemName}`}>
            <div className='flex text-dark1 items-center gap-4 cursor-pointer hover:text-primaryBlue transition duration-150 ease-linear'>
                <div>
                    {icon}
                </div>
                <p> {itemName} </p>
            </div>
        </Link>
    );
}


