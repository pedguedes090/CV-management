import React from 'react'

function CVContent() {
    return (
        <div className="min-h-screen bg-gray-100 py-8 pt-0">
            {/* Breadcrumb */}
            {/* <div className="text-sm text-gray-500 mb-4 ml-7">
                <span>Trang chủ</span>
                <span className="mx-2">/</span>
                <span className="text-gray-700">CV của bạn</span>
            </div> */}
            {/* Tabs */}
            <div className='bg-white min-h-[40px] flex items-center text content-center mb-6'>
                <div className="flex gap-6  ml-7">
                    <span className="text-[#C41E3A] border-b-2 border-[#C41E3A] pb-2 font-medium">Hồ sơ</span>
                    <span className="text-gray-500 pb-2 cursor-pointer hover:text-gray-700">Quản lý CV</span>
                    <span className="text-gray-500 pb-2 cursor-pointer hover:text-gray-700">Tiêu chí tìm việc</span>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col gap-6 py-8">
                    {/* CV Upload Section */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-bold capitalize">Nguyễn Minh Dương</h2>
                            <p className="text-sm text-gray-500 font-semibold">
                                Tải CV của bạn bên dưới để có thể sử dụng xuyên suốt quá trình tìm việc
                            </p>
                            <div className="border border-gray-300 rounded-lg p-5 mt-2">
                                <div className="flex items-center gap-3">
                                    <img src="https://res.cloudinary.com/dbwlo7lgt/image/upload/v1765420968/cv_1_znxf0q.png" alt="" />
                                    <div className="flex-1 flex flex-col gap-2">
                                        <p className="font-medium text-xl">CV của bạn</p>
                                        <div className="flex items-center gap-2 text-[#bc2228]">
                                            <img src="https://res.cloudinary.com/dbwlo7lgt/image/upload/v1765421011/arrow.up.to.line.compact_kxqwmg.png" alt="" />
                                            <div>
                                                <span className="text-xl">Tải lên </span>
                                                <span className="text-base text-gray-500">
                                                    (Sử dụng tệp .doc, .docx hoặc .pdf, không chứa mật khẩu bảo vệ và dưới 3MB)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="rounded bg-gray-200 px-6 py-3 text-base text-gray-700 capitalize">
                                        Mặc định
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cover Letter Section */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-2xl font-bold capitalize">Thư xin Việc</h2>
                        </div>
                        <p className="text-base text-gray-500">
                            Giới thiệu bản thân và lý do vì sao bạn sẽ là lựa chọn tuyển dụng tuyệt vời
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CVContent