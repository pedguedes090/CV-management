

import LogoRikkei from '../../assets/company/logo-rikkei2 2.png'
import { Input } from 'antd'

export default function RegisterCompany() {
  return (
    <div className="min-h-screen bg-white flex items-start">
      <div className="w-full px-24 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <img src={LogoRikkei} alt="logo" className="h-12" />
          </div>

          <h2 className="text-2xl font-bold mb-8">Đăng kí để có thể tiếp cận nguồn <br /> nhân lực chất lượng cao</h2>

          <div className="flex gap-0">
            {/* Left column - account info */}
            <div className="w-1/2 pr-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1 h-8 bg-[#BC2228] inline-block" />
                  <h3 className="text-lg font-semibold">Thông tin tài khoản</h3>
                </div>

                <label className="block text-sm text-gray-600 mb-2">Họ tên</label>
                <Input placeholder="Nhập họ tên" className="mb-4 h-10" />

                <label className="block text-sm text-gray-600 mb-2">Email</label>
                <Input placeholder="abc@gmail.com" className="mb-4 h-10" />

                <label className="block text-sm text-gray-600 mb-2">Password</label>
                <Input.Password placeholder="************" className="mb-4 h-10" />

                <label className="block text-sm text-gray-600 mb-2">Confirm password</label>
                <Input.Password placeholder="************" className="mb-4 h-10" />
              </div>
            </div>

            {/* Right column - company info */}
            <div className="w-1/2 pl-8 border-l border-gray-200">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1 h-8 bg-[#BC2228] inline-block" />
                  <h3 className="text-lg font-semibold">Thông tin doanh nghiệp</h3>
                </div>

                <label className="block text-sm text-gray-600 mb-2">Công ty</label>
                <Input placeholder="Tên công ty" className="mb-4 h-10" />

                <label className="block text-sm text-gray-600 mb-2">Địa điểm làm việc</label>
                <Input placeholder="Chọn tỉnh/thành phố" className="mb-4 h-10" />

                <label className="block text-sm text-gray-600 mb-2">Số điện thoại liên hệ</label>
                <Input placeholder="012345678" className="mb-4 h-10" />

                <label className="block text-sm text-gray-600 mb-2">Email công ty</label>
                <Input placeholder="abc@company.com" className="mb-4 h-10" />
              </div>
            </div>
          </div>

          {/* Register button centered */}
          <div className="mt-8 flex justify-center">
            <button className="w-1/3 h-12 bg-[#BC2228] text-white rounded-md">Đăng kí</button>
          </div>

          <div className="mt-4 text-center text-sm text-gray-500">
            Đã có tài khoản? <a href="/company/login" className="text-[#BC2228]">Đăng nhập ngay</a>
          </div>
        </div>
      </div>
    </div>
  )
}
