import LogoRikkei from '../../assets/company/logo-rikkei2 2.png'
import LogoLogin from '../../assets/company/At the office-amico 1.png'
import { Input } from 'antd';

export default function LoginCompany() {
  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="flex w-full">
        {/* Logo */}
        <div className="w-1/2 px-24 py-16">
          <div className="mb-18">
            <img src={LogoRikkei} alt="" />
          </div>

          <h2 className="text-2xl font-semibold mb-6">Cùng Rikkeisoft tiếp cận nguồn <br /> nhân lực chất lượng cao</h2>

          <form className="max-w-md">
            <label htmlFor="email" className="block text-sm text-gray-600 mb-2">Email</label>
            <Input id="email" className="w-full h-12 rounded-md border border-gray-200 px-3" placeholder="abc@gmail.com" />

            <label htmlFor="password" className="block text-sm text-gray-600 mt-4 mb-2">Password</label>
            <Input.Password id="password" placeholder="••••••••••" className="w-full h-12 rounded-md border border-gray-200 px-3" />

            <button type="submit" className="w-full h-12 bg-[#BC2228] text-white rounded-md mt-6">Đăng nhập</button>

            <div className="text-center text-sm text-gray-500 mt-4">
              <a href="" className="text-gray-500 hover:text-gray-700">Quên mật khẩu?</a>
            </div>

            <div className="text-center text-sm text-gray-500 mt-4">
              <span>Bạn không có tài khoản? </span>
              <a href="" className="text-[#BC2228] hover:underline">Tạo 1 tài khoản</a>
            </div>
          </form>
        </div>

        {/* Right: illustration */}
        <div className="w-1/2 flex items-center justify-center border-l border-gray-300">
          <img src={LogoLogin} alt="illustration" className="max-w-[520px]" />
        </div>
      </div>
    </div>
  )
}
