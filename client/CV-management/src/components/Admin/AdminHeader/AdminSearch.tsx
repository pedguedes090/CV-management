import React from 'react'
import '../../../css/AdminCss/AdminSearch.css'
import imgLogo from '../../../assets/AdminImg/Logo.png'
import imgSearch from '../../../assets/AdminImg/fi_search.png'
import imgGroup from '../../../assets/AdminImg/Group.png'
import imgOutline from '../../../assets/AdminImg/Outline.png'
import imgButton from '../../../assets/AdminImg/button.png'
export default function AdminSearch() {
  return (
    <div className='bg-[#FFFFFF] h-[139px] flex items-center justify-center gap-[30px]'>
        <img src={imgLogo} className='w-[127px] h-[56px]'/>
        <div className='relative'>
            <input className='admin-input w-[668px] h-[50px] rounded-[5px] border border-[#E4E5E8] pl-[58px] 'placeholder='Công việc, công ty, người dùng ...' type="text" />
            <img src={imgSearch} className='w-[24px] h-[24px] absolute top-[13px] left-[24px]' />
        </div>
        
        <img src={imgGroup} className='w-[18.43px] h-[20.56px]'/>
        <img src={imgOutline} className='w-[30px] h-[30px]' />
        <img src={imgButton} className='w-[124,73px] h-[39px]'/>
    </div>
  )
}
