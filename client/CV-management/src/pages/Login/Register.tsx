import { useState } from 'react';
import investmentDataRafiki from '../../assets/Investmentdata-rafiki1.png';

const imgLogoRikkei22 =
    "https://www.figma.com/api/mcp/asset/e5650332-d737-4409-9670-a0e62fc12596";

export default function LoginUserForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('abc@gmail.com');
    const [password, setPassword] = useState('**************');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="min-h flex">
            {/* Left Section - Login Form */}
            <div className="w-1/2 flex flex-col px-12 py-8">
                {/* Logo */}
                <div className="mb-6 ml-7">
                    <img
                        src={imgLogoRikkei22}
                        alt="RKEiEdu Logo"
                        className="h-16"
                    />
                </div>
                
                {/* Login Form */}
                
                <div className="flex-1 flex flex-col justify-center max-w-xl w-xl-7">
                    {/* Full Name Field */}
                    <p className='font-medium text-2xl mb-6 mt-4'>Cùng Rikkei Education xây dựng hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</p>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-6">
                            Họ tên
                        </label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="Nhập họ tên của bạn"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-6">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="abc@gmail.com"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-6">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                placeholder="**************"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-6">
                            Nhập lại mật khẩu
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                placeholder="**************"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Login Button */}
                    <button className="w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white font-medium py-4 rounded-lg transition-colors duration-200 mb-4">
                        Đăng nhập
                    </button>

                    {/* Forgot Password */}
                    <div className="text-center mb-4">
                        <a href="#" className="text-gray-600 text-sm hover:text-gray-800">
                            Quên mật khẩu?
                        </a>
                    </div>

                    {/* Register Link */}
                    <div className="text-center text-sm">
                        <span className="text-gray-600">Bạn không có tài khoản? </span>
                        <a href="#" className="text-red-600 hover:text-red-700 font-medium">
                            Tạo tài khoản
                        </a>
                    </div>
                </div>
            </div>

            {/* Vertical Divider */}
            <div className="w-px bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>

            {/* Right Section - Illustration */}
            <div className="w-1/2 flex items-center p-12">
                <img
                    src={investmentDataRafiki}
                    alt="Investment Data Illustration"
                    className="max-w-lg w-full"
                />
            </div>
        </div>
    );
}
