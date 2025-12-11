import React from 'react'
import '../../../../../css/AdminCss/AdminTable.css'
import TableUser from './TableUser'

export default function AdminTableUser() {
  return (
    <div className=' w-full pt-[65px]'>
              <table className=" w-full">
                <thead>
                    <tr className='bg-[#F1F2F4] h-[36px]'>
                        <th>ID/Avatar</th>
                        <th>Tên người dùng</th>
                        <th>Giới tính</th>
                        <th>Số điện thoại</th>
                        <th>Email liên hệ</th>
                        <th>Địa chỉ</th>
                        <th>Trạng thái</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    <TableUser/>
                </tbody>
              </table>
            </div>
  )
}
