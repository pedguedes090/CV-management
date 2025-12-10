import REduLogo from '../../assets/dashboard/LogoWhite.svg'
import facebook from '../../assets/dashboard/facebook.svg'
import youtube from '../../assets/dashboard/youtube.svg'

export default function Footer() {
  return (
    <div className='w-full bg-[#BC2228] flex justify-center items-center py-[37px_16px]'>
        <div className=' flex flex-col gap-10 justify-center items-center'>
            <div className='flex'>
                <div className='w-[566px]'>
                    <img src={REduLogo} alt="logo" />
                    <div>
                        <div className='text-white mt-10 flex flex-col gap-1 text-sm'>
                            <p>Tầng 7 tháp A toà Sông Đà, đường Phạm Hùng,<br></br>quận Nam Từ Liêm, Hà Nội</p>
                            <p>0862 069 233</p>
                            <p>academy@rikkeisoft.com</p>
                        </div>
                        <div className='flex gap-4 mt-5'>
                            <img src={facebook} alt="Facebook" />
                            <img src={youtube} alt="YouTube" />
                        </div>
                    </div>
                </div>
                <div className='flex gap-14 p-6 text-white'>
                    <div>
                        <h1>Khoá học</h1>
                        <div className='text-[#EBB0B2] flex flex-col mt-6 text-sm gap-2'>
                            <p>Làm quen với Code</p>
                            <p>Bootcamp Fulltime</p>
                            <p>Bootcamp Parttime</p>
                            <p>Kỹ sư CNTT - PTIT</p>
                            <p>Bổ trợ cho nghề</p>
                        </div>
                    </div>
                    <div>
                        <h1>Tài nguyên học tập</h1>
                        <div className='text-[#EBB0B2] flex flex-col mt-6 text-sm gap-2'>
                            <p>Blog</p>
                            <p>Ebook - Report</p>
                            <p>Khóa học miễn phí</p>
                            <p>Sự kiện - Webinar</p>
                            <p>Cộng đồng</p>
                        </div>
                    </div>
                    <div>
                        <h1>Vì sao chọn Rikkei Academy</h1>
                        <div className='text-[#EBB0B2] flex flex-col mt-6 text-sm gap-2'>
                            <p>Về Rikkei Academy</p>
                            <p>Hệ sinh thái Rikkei</p>
                            <p>Cơ hội nghề nghiệp</p>
                            <p>Tấm gương sáng</p>
                            <p>Liên hệ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white align-center text-[12px]">Copyright 2023 © Rikkei Education. All Rights Reserved.</div>
        </div>
    </div>
  )
}
