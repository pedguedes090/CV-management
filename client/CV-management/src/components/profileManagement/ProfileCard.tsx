import React from 'react'
import {
    MailOutlined,
    CalendarOutlined,
    EnvironmentOutlined,
    PhoneOutlined,
    UserOutlined,
    EditOutlined,
} from '@ant-design/icons';
function ProfileCard() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 relative">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <EditOutlined className="text-lg" />
            </button>

            <div className="flex items-start gap-4">
                {/* <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center text-white font-bold text-xl">
                    FPT
                    <span className="text-xs">Software</span>
                </div> */}
                <img src="https://res.cloudinary.com/dbwlo7lgt/image/upload/v1765336572/fptsoftware_drcnxt.png" alt="" />

                <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-800 mb-1">Nguyễn Minh Dương</h2>
                    <p className="text-sm text-gray-500 mb-3">Full-Stack Developer</p>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <MailOutlined />
                            <span>Abc@Gmail.Com</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <PhoneOutlined />
                            <span>0123456789</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <CalendarOutlined />
                            <span>8/9/2023</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#C41E3A]">
                            <UserOutlined />
                            <span>Giới tính</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <EnvironmentOutlined />
                            <span>Địa chỉ hiện tại</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <UserOutlined />
                            <span>Trạng Cá Nhân</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProfileCard