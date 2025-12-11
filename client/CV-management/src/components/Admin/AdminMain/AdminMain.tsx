import React from 'react'
import AdminTableJob from './AdminTable/Job/AdminTableJob'
import AdminTableCompany from './AdminTable/Company/AdminTableCompany'
import AdminTableUser from './AdminTable/Candidate/AdminTableUser'

export default function AdminMain({ label }: { label: string }) {
  return (
    <div className='bg-[#FFFFFF] w-full  flex-1'>
        {label === 'Quản lý việc làm' && <AdminTableJob />}
        {label === 'Quản lý công ty' && <AdminTableCompany />}
        {label === 'Quản lý người dùng' && <AdminTableUser />}
    </div>
  )
}
