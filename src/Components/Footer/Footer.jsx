import {projectInfo,helpInfo,communityInfo,othersInfo,socialInfo} from './footer_data'
import { FooterSection } from './FooterSection'
import React from 'react'


export const Footer = () => {

    

    return (
        <div className=' px-20 flex items-center justify-center md:block  bg-dark1 text-white  py-20  mt-20'>
        <div className='  flex gap-10 flex-col md:flex-row justify-between  '>
            <FooterSection sectionName='Project' sectionInfo={projectInfo} />
            <FooterSection sectionName='Help' sectionInfo={helpInfo} />
            <FooterSection sectionName='Community' sectionInfo={communityInfo}/>
            <FooterSection sectionName='Others' sectionInfo={othersInfo} />
            <FooterSection sectionName={null} sectionInfo={socialInfo}/>
        </div>
        </div>
    )
}



