import React from 'react'
import '../../../../../css/AdminCss/AdminTable.css'
import TableCompany from './TableCompany'
export default function AdminTableCompany() {
  return (
    <div className=' w-full pt-[65px]'>
          <table className=" w-full">
            <thead>
                <tr className='bg-[#F1F2F4] h-[36px]'>
                    <th>ID/Logo</th>
                    <th>Tên công ty</th>
                    <th>Địa điểm</th>
                    <th>Email liên hệ</th>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Trạng thái</th>
                    <th>Chi tiết</th>
                </tr>
            </thead>
            <tbody>
                <TableCompany/>
                {/* <tr>
                    <td>1</td>
                    <td>Công ty XYZ Tech</td>
                    <td className='bg-[#F1F2F4]'>123 Đường ABC, Quận 1, TP.HCM</td>
                    <td>hr@companyxyz.com</td>
                    <td >Product</td> 
                    <td>50-100</td>
                    <td className='bg-[#F1F2F4]'>2025-12-09T08:00:00Z</td>
                    <td>
                        <div>Truy cập</div>
                    </td>
                </tr> */}
            </tbody>
          </table>
        </div>
  )
}
