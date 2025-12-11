import {
    PlusCircleOutlined,
} from '@ant-design/icons';
import ProfileCard from './ProfileCard';
import Sidebar from './Sidebar';


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
