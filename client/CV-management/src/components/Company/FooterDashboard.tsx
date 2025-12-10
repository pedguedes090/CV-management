import logoWhite from '../../assets/dashboard/LogoWhite.svg';
import facebookIcon from '../../assets/dashboard/facebook.svg';
import youtubeIcon from '../../assets/dashboard/youtube.svg';

export default function Footer() {
  return (
    <footer className="bg-[#BC2228] w-full">
      {/* Main Footer Content */}
      <div className="px-[30px] py-12">
        <div className="flex justify-between">
          {/* Company Info */}
          <div className="max-w-[300px]">
            {/* Logo */}
            <div className="mb-6">
              <img src={logoWhite} alt="RikkeiEdu" className="h-17" />
            </div>
            <p className="text-[14px] text-white/90 leading-6 mb-4">
              Tầng 7 tháp A toà Sông Đà, đường Phạm Hùng,<br />
              quận Nam Từ Liêm, Hà Nội
            </p>
            <p className="text-[14px] text-white font-medium mb-1">0862 069 233</p>
            <p className="text-[14px] text-white mb-6">academy@rikkeisoft.com</p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={youtubeIcon} alt="Youtube" className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Khoá học */}
          <div>
            <h3 className="text-[18px] font-semibold text-white mb-6">Khoá học</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white">Làm quen với Code</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white">Bootcamp Fulltime</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white">Bootcamp Parttime</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white">Kỹ sư CNTT - PTIT</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white">Bổ trợ cho nghề</a></li>
            </ul>
          </div>

          {/* Tài nguyên học tập */}
          <div>
            <h3 className="text-[18px] font-semibold text-white mb-6">Tài nguyên học tập</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white">Ebook - Report</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white">Khóa học miễn phí</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white">Sự kiện - Webinar</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white">Cộng đồng</a></li>
            </ul>
          </div>

          {/* Vì sao chọn Rikkei Academy */}
          <div>
            <h3 className="text-[18px] font-semibold text-white mb-6">Vì sao chọn Rikkei Academy</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white">Về Rikkei Academy</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white">Hệ sinh thái Rikkei</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white">Cơ hội nghề nghiệp</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white">Tấm gương sáng</a></li>
              <li><a href="#" className="text-[14px] text-white/80 hover:text-white">Liên hệ</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#9a1c21] px-[30px] py-4">
        <p className="text-[14px] text-white/80 text-center">
          Copyright 2023 © Rikkei Education. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
