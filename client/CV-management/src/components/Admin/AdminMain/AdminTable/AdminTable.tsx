import React from 'react'
import TableJob from './TableJob'
// import { Space, Switch } from 'antd';
// import imgCalendar from '../../../../assets/AdminImg/Calendar.png'
// import imgDelete from '../../../../assets/AdminImg/Vector.png'
import '../../../../css/AdminCss/AdminTable.css'

export default function AdminTable() {
  return (
    <div className=' w-full pt-[65px]'>
      <table className=" w-full">
        <thead>
            <tr className='bg-[#F1F2F4] h-[36px]'>
                <th>ID</th>
                <th>Tên công việc</th>
                <th>Công ty</th>
                <th>Email liên hệ</th>
                <th>Thời hạn ứng tuyển</th>
                <th>Khoảng lương</th>
                <th>Trạng thái</th>
                <th>Chi tiết thông tin</th>
            </tr>
        </thead>
        <tbody>
            <TableJob/>
            {/* <tr>
                <td>1</td>
                <td>Full-stack Developer</td>
                <td className='bg-[#F1F2F4]'>FPT Software</td>
                <td>victorkesangtao@gmail.com</td>
                <td className='flex text-center relative px-[12px] py-[10px]'>
                    <input className='w-[156px] h-[36px] rounded-[5px] border border-[#E4E5E8] text-center' type="date" />
                    <img className='absolute left-[20px] top-1/2 -translate-y-1/2 w-[16px] h-[16px]' src={imgCalendar}  />
                    <img className='absolute top-1/2 -translate-y-1/2 right-[20px] w-[14px] h-[14px]' src={imgDelete}/> 
                </td>
                <td>
                    <div className='flex gap-[10px]'>
                        <input className='w-[67px] h-[32px] rounded-[5px] border border-[#79747E] text-center' type="text" placeholder='$20,000' />
                        <span>-</span>
                        <input className='w-[67px] h-[32px] rounded-[5px] border border-[#79747E] text-center' type="text" placeholder='$20,000' />
                    </div> 
                </td>
                <td className='bg-[#F1F2F4]'>
                    <Space vertical>
                        <Switch className="green-switch switch-large" checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />
                    </Space>
                </td>
                <td>
                    <div>Truy cập</div>
                </td>
            </tr>
             <tr>
                <td>2</td>
                <td>Full-stack Developer</td>
                <td className='bg-[#F1F2F4]'>FPT Software</td>
                <td>victorkesangtao@gmail.com</td>
                <td className='flex text-center relative px-[12px] py-[10px]'>
                    <input className='w-[156px] h-[36px] rounded-[5px] border border-[#E4E5E8] text-center' type="date" />
                    <img className='absolute left-[20px] top-1/2 -translate-y-1/2 w-[16px] h-[16px]' src={imgCalendar}  />
                    <img className='absolute top-1/2 -translate-y-1/2 right-[20px] w-[14px] h-[14px]' src={imgDelete}/> 
                </td>
                <td>
                    <div className='flex gap-[10px]'>
                        <input className='w-[67px] h-[32px] rounded-[5px] border border-[#79747E] text-center' type="text" placeholder='$20,000' />
                        <span>-</span>
                        <input className='w-[67px] h-[32px] rounded-[5px] border border-[#79747E] text-center' type="text" placeholder='$20,000' />
                    </div> 
                </td>
                <td className='bg-[#F1F2F4]'>
                    <Space vertical>
                        <Switch className="green-switch switch-large" checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />
                    </Space>
                </td>
                <td>
                    <div>Truy cập</div>
                </td>
            </tr> */}
        </tbody>
      </table>
    </div>
  )
}
 