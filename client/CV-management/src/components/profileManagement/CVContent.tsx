import {
    PlusCircleOutlined,
    MailOutlined,
    CalendarOutlined,
    EnvironmentOutlined,
    PhoneOutlined,
    UserOutlined,
    EditOutlined,

    DownOutlined
} from '@ant-design/icons';

const Sidebar = () => {
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

            <div className="space-y-3 mb-6">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-[#C41E3A] cursor-pointer hover:underline mb-12">
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
};

const ProfileCard = () => {
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
    );
};

const CVContent = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-4 ml-7">
                <span>Trang chủ</span>
                <span className="mx-2">/</span>
                <span className="text-gray-700">CV của bạn</span>
            </div>

            {/* Tabs */}
            <div className='bg-white min-h-[40px] flex items-center text content-center mb-6'>
                <div className="flex gap-6  ml-7">
                <span className="text-[#C41E3A] border-b-2 border-[#C41E3A] pb-2 font-medium">Hồ sơ</span>
                <span className="text-gray-500 pb-2 cursor-pointer hover:text-gray-700">Quản lý CV</span>
                <span className="text-gray-500 pb-2 cursor-pointer hover:text-gray-700">Tiêu chí tìm việc</span>
            </div>
            </div>
            
            <div className="max-w-[1400px] mx-4 px-4">


                {/* Main Content */}
                <div className="flex gap-10">
                    {/* Sidebar */}
                    <div className="w-100 ">
                        <Sidebar />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                        <ProfileCard />

                        <div className="bg-white rounded-lg border border-gray-200 p-6 relative min-h-[160px] shadow-lg">
                            <div className="absolute top-4 right-4 flex items-center gap-3">
                                <button className="w-4 h-4 flex items-center justify-center text-red-700 mr-6 mt-6">
                                    <PlusCircleOutlined className="text-md" />
                                </button>

                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-6">Giới thiệu bản thân</h3>
                            <p className="text-sm text-gray-400">Giới thiệu điểm mạnh của bản thân và kinh nghiệm của bạn</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CVContent;
