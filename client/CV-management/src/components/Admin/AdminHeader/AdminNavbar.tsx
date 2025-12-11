import React from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { useNavigate } from 'react-router-dom' 
import '../../../css/AdminCss/AdminNavbar.css'
import AdminSearch from './AdminSearch'
import AdminBreadcrumb from './AdminBreadcrumb'
import imgFrame135 from '../../../assets/AdminImg/Frame 135.png'
import AdminMain from '../AdminMain/AdminMain'
import Footer from '../../header_footer/Footer'
const tabs = [
  { key: '1', label: 'Trang chủ' },
  { key: '2', label: 'Quản lý việc làm' },
  { key: '3', label: 'Quản lý công ty' },
  { key: '4', label: 'Quản lý người dùng' },
]

const items: TabsProps['items'] = tabs.map(t => ({
  key: t.key,
  label: t.label,
  children: t.key === '1'
    ? null
    : (
      <div className='flex flex-col h-full bg-[#FFFFFF]'>
        <AdminSearch />
        <AdminBreadcrumb label={t.label} />
        <AdminMain label={t.label}/>

      </div>
    )
}))

export default function AdminNavbar() {
  const navigate = useNavigate()

  const onChange = (key: string) => {
    if (key === "1") {
      navigate("")  
      return
    }

  }

  return (
    <div className='relative w-full h-[2275px] bg-[#FFFFFF] '>
      <Tabs
        className='top-0 w-full h-full  '
        defaultActiveKey="2"          //tránh load tab 1
        items={items}
        onChange={onChange}
      />

      <img
        className='absolute top-[12px] right-[30px] w-[280px] h-[24px]'
        src={imgFrame135}
      />
      <Footer/>
    </div>
  )
}
