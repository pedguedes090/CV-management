import React from 'react'
import {
    PlusCircleOutlined,
    DownOutlined
} from '@ant-design/icons';
function Sidebar() {
  const items = [
        "Thêm giới thiệu bản thân",
        "Thêm giới thiệu bản thân",
        "Thêm giới thiệu bản thân",
        "Thêm giới thiệu bản thân"
    ];

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-base font-semibold text-gray-800 mb-8">
                Nâng cấp hồ sơ xin việc của bạn bằng việc bổ sung các trường sau
            </h3>

            <div className="mb-6">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-[#C41E3A] cursor-pointer hover:underline mb-8">
                        <PlusCircleOutlined className="text-lg" />
                        <span className="text-sm">{item}</span>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2 text-gray-600 cursor-pointer mb-6">
                <DownOutlined className="text-sm" />
                <span className="text-sm">Thêm thông tin khác</span>
            </div>

            <div className="p-4 flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded">
                    <img src="https://res.cloudinary.com/dbwlo7lgt/image/upload/v1765338247/cv1_xtv2ks.png" alt="" />

                </div>
                <div className="flex-1">
                    <p className="text-sm text-gray-700">
                        Nâng cấp hồ sơ xin việc của bạn bằng việc bổ sung các trường sau
                    </p>
                </div>
            </div>

            <button className="w-full bg-[#C41E3A] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#A01830] transition-colors">
                Xem Và Tải CV
            </button>
        </div>
    );
}

export default Sidebar