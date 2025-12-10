import React from 'react'

export default function AdminBreadcrumb({ label }: { label: string }) {
  return (
    <div className='h-[68px] pl-[60px] pt-[24px] bg-[#F1F2F4]'>
      <p className='text-[#767F8C]'>Trang chủ / {label}</p>
    </div>
  )
}
