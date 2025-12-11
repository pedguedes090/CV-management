import { useState } from "react";
import { Select, Input } from "antd";
import HeaderDashBoard from "../../components/Company/HeaderDashBoard";
import FooterDashboard from "../../components/Company/FooterDashboard";
import LogoColor from "../../assets/dashboard/LogoColor.svg";
import LogoRikkei from "../../assets/company/logo-rikkei2 2.png";
import searchIcon from "../../assets/dashboard/fi_search.svg";
import mapPinIcon2 from "../../assets/dashboard/MapPin.svg";
import linkedInIcon from "../../assets/company/Linkdle.svg";
import facebookIcon from "../../assets/company/fb-btn.svg";
import twitterIcon from "../../assets/company/twt-btn.svg";
import emailIcon from "../../assets/company/email-btn.svg";
import copyLinksIcon from "../../assets/company/Copy-links.svg";
import cv1 from "../../assets/company/cv1.svg";

export default function CandidateDetail() {
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data - replace with actual data from API/state
  const candidate = {
    name: "Nguyễn Văn A",
    position: "Front-end",
    level: "Fresher",
    company: "FPT Software",
    companyLogo: LogoRikkei,
    aboutMe: `Velstar is a Shopify Plus agency, and we partner with brands to help build growth on their own terms and whether you're preparing for launch or looking for a better partnership with your agency, we'll talk you through how our team of Shopify experts can help you. We're here as your strategic partner with an integrated team of designers, developers, strategists, and creators that can partner with your team to help you reach your goals through the power of digital commerce on the Shopify platform. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we're here to help you create exceptional digital experiences. Our team are experts in their fields and will bring you a wealth of knowledge and experience that will help bring your brand to life through the power of digital. We have a proven track record of delivering outstanding eCommerce solutions that drive growth and increase sales. We work with brands to help create exceptional digital experiences that drive results. Our team are experts in their fields and will bring you a wealth of knowledge and experience that will help bring your brand to life through the power of digital. Want to work with us? You're in good company!`,
    workExperience: [
      "Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on",
      "3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications",
      "Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel",
      "Working regularly with APIs and Web Services (REST, GrapthQL, SOAP, etc)",
      "Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management.",
      "Familiarity with version control and project management systems (e.g., Github, Jira)",
      "Ambitious and hungry to grow your career in a fast-growing agency",
    ],
    developmentOrientation: [
      "Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on",
      "3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications",
      "Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel",
      "Working regularly with APIs and Web Services (REST, GrapthQL, SOAP, etc)",
      "Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management.",
      "Familiarity with version control and project management systems (e.g., Github, Jira)",
      "Ambitious and hungry to grow your career in a fast-growing agency",
    ],
    address:
      "Đường D1, Khu Công Nghệ Cao, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh",
    technicalSkills: ["REACTJS", "NODEJS"],
    languageSkills: [
      { name: "JAPANESE N2", color: "bg-[#fce1d1] text-[#f2762d]" },
      { name: "TOEIC 700", color: "bg-[#e7f0fa] text-[#0a65cc]" },
    ],
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      email: "mailto:example@email.com",
    },
  };

  const handleLocationChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <HeaderDashBoard />

      {/* Search Bar Section */}
      <div className="">
        <div className="px-[30px] py-4 flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex ">
            <img src={LogoColor} alt="RIKEI Edu" />
          </div>
          {/* Search Bar */}
          <div className="flex-1 max-w-[668px] border border-[#E4E5E8] rounded-[5px] flex items-center h-[50px]">
            <Select
              defaultValue="Hà Nội"
              style={{
                width: "fit-content",
                border: "none",
                padding: "0 20px 0 24px",
                backgroundColor: "transparent",
              }}
              onChange={handleLocationChange}
              options={[
                { value: "hn", label: "Hà Nội" },
                { value: "dn", label: "Đà Nẵng" },
                { value: "hcm", label: "Thành phố Hồ Chí Minh" },
              ]}
            />
            <div className="bg-[#E4E5E8] h-8 w-px"></div>
            <img src={searchIcon} alt="search icon" className="ps-5" />
            <Input
              type="text"
              placeholder="Job tittle, keyword, company"
              variant="borderless"
              className="w-full outline-none ps-3 text-[14px]"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 shrink-0">
            <button className="w-6 h-6 hover:opacity-70 transition-opacity">
              <svg
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button className="w-6 h-6 hover:opacity-70 transition-opacity">
              <svg
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <span className="text-[14px] text-[#18191C] font-medium">
              FPT Software
            </span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="px-[30px] py-4 bg-[#FFFFFF]">
        <nav className="text-[14px] text-[#5E6670]">
          <span className="hover:text-[#BC2228] cursor-pointer">Trang chủ</span>
          <span className="mx-2">/</span>
          <span className="hover:text-[#BC2228] cursor-pointer">
            Ứng viên nổi bật
          </span>
          <span className="mx-2">/</span>
          <span className="text-[#18191C] font-medium">{candidate.name}</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-[30px] py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Candidate Header */}
              <div className="p-6">
                <div className="flex items-start gap-6">
                  <div className="w-[120px] h-[120px] bg-[#F1F2F4] rounded-lg overflow-hidden flex items-center justify-center shrink-0">
                    <div className="w-20 h-20 bg-[#E8E8E8] rounded-full flex items-center justify-center text-[#767F8C] text-4xl font-semibold">
                      {candidate.name.charAt(0)}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h1 className="text-[24px] font-semibold text-[#18191C] mb-3">
                      {candidate.name}
                    </h1>

                    <div className="flex items-center gap-2 flex-wrap px-[30px]">
                      <span className="px-3 py-1 bg-[#0ba02c] rounded text-[14px] text-white font-medium">
                        {candidate.position}
                      </span>
                      <span className="px-3 py-1 bg-[#e7f0fa] text-[#0a65cc] rounded text-[14px] font-medium">
                        {candidate.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Me Section */}
              <div className="p-6">
                <h2 className="text-[20px] font-semibold text-[#18191C] mb-4">
                  Mô tả về bản thân
                </h2>
                <p className="text-[14px] text-[#5E6670] leading-6 whitespace-pre-line">
                  {candidate.aboutMe}
                </p>
              </div>

              {/* Work Experience Section */}
              <div className="p-6">
                <h2 className="text-[20px] font-semibold text-[#18191C] mb-4">
                  Kinh nghiệm làm việc
                </h2>
                <ul className="space-y-3">
                  {candidate.workExperience.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[grey] mt-1.5">•</span>
                      <span className="text-[14px] text-[#5E6670] leading-6 flex-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Development Orientation Section */}
              <div className="p-6">
                <h2 className="text-[20px] font-semibold text-[#18191C] mb-4">
                  Định hướng phát triển
                </h2>
                <ul className="space-y-3">
                  {candidate.developmentOrientation.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[grey] mt-1.5">•</span>
                      <span className="text-[14px] text-[#5E6670] leading-6 flex-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Schedule Interview Button */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
                      isFavorite
                        ? "bg-[#BC2228] text-white"
                        : "bg-[#F1F2F4] text-[#767F8C] hover:bg-[#E4E5E8]"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill={isFavorite ? "currentColor" : "none"}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <button className="flex-1 bg-[#BC2228] text-white py-3 px-6 rounded-md font-semibold text-[16px] hover:bg-[#a31e23] transition-colors">
                    Đặt Lịch Phỏng Vấn
                  </button>
                </div>
              </div>

              {/* Personal Address */}
              <div className="bg-white border border-[#E4E5E8] rounded-lg p-6">
                <h3 className="text-[18px] font-semibold text-[#18191C] mb-4">
                  Địa chỉ cá nhân
                </h3>
                <div className="flex items-start gap-3">
                  <img
                    src={mapPinIcon2}
                    alt="Location"
                    className="w-5 h-5 mt-0.5 shrink-0"
                  />
                  <p className="text-[14px] text-[#5E6670] leading-6">
                    {candidate.address}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white border border-[#E4E5E8] rounded-lg p-6">
                <h3 className="text-[18px] font-semibold text-[#18191C] mb-4">
                  Kĩ năng
                </h3>

                {/* Technical Skills */}
                <div className="mb-4 flex gap-3">
                  <span className="text-[14px] text-[#767F8C] block mb-2">
                    Technical:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {candidate.technicalSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#e7f6ea] text-[#27aa44] rounded text-[14px] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Language Skills */}
                <div className="flex gap-3">
                  <span className="text-[14px] text-[#767F8C] block mb-2">
                    Language:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {candidate.languageSkills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded text-[14px] font-medium ${skill.color}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-white border border-[#E4E5E8] rounded-lg p-6">
                <h3 className="text-[18px] font-semibold text-[#18191C] mb-4">
                  Thông tin cá nhân
                </h3>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
                    <img
                      src={copyLinksIcon}
                      alt="Copy Links"
                      className="w-21 h-6"
                    />
                  </button>
                  <a
                    href={candidate.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={linkedInIcon}
                      alt="LinkedIn"
                      className="w-6 h-6"
                    />
                  </a>
                  <a
                    href={candidate.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={facebookIcon}
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </a>
                  <a
                    href={candidate.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
                  </a>
                  <a
                    href={candidate.socialLinks.email}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img src={emailIcon} alt="Email" className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Access CV */}
              <div className="bg-white border border-[#E4E5E8] rounded-lg p-6">
                <div className="flex gap-2 mb-4">
                  <img src={cv1} alt="" />
                  <h3 className="text-[18px] font-semibold text-[#18191C] mb-4">
                    Truy cập CV của {candidate.name.split(" ").pop()} để xem
                    thêm
                  </h3>
                </div>
                <button className="w-60 bg-[#BC2228] text-white py-3 px-6 rounded-md font-semibold text-[16px] hover:bg-[#a31e23] transition-colors">
                  Truy Cập CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterDashboard />
    </div>
  );
}
