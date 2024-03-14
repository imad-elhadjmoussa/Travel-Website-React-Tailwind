import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import {motion} from 'framer-motion'
import { MenuItem } from './MenuItem';
import { Link } from 'react-router-dom';

export const Menu = ({ isAnimate }) => {

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
                className=' bg-primaryBlue text-white px-2 py-1 rounded-lg hover:shadow-lg'
            >
                <Link to='/Signup'>Sign Up</Link>
            </motion.button>
        </motion.ul>
    );
}
