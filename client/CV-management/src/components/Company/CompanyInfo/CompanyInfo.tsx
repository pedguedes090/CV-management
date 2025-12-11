import JobOpen from "./JobOpen";
import logoCompany from "../../../assets/company/logoFPT.png"
import heartIcon from "../../../assets/company/heart.fill.png"
import personIcon from "../../../assets/company/person.fill.png"
import location from "../../../assets/company/location.circle.png"
import map from "../../../assets/company/Map.png"
import mapIcon from "../../../assets/company/MapTrifold.png"
import editIcon from "../../../assets/company/EditIcon.png"
import linkIcon from "../../../assets/company/LinkSimple.png"
import linkIn from "../../../assets/company/linkinIcon.png"
import facebook from "../../../assets/company/facebookIcon.png"
import twitter from "../../../assets/company/twitterIcon.png"
import mail from "../../../assets/company/mailIcon.png"

export default function CompanyInfo() {
  return (
    <div className="bg-white">
      {/* Top breadcrumb / header bar */}
      <div className="bg-gray-100 text-sm text-gray-600 py-3">
        <div className="max-w-7xl mx-auto px-6">Trang chủ / Thông tin doanh nghiệp / <span className="text-gray-800">Doanh nghiệp của tôi</span></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left column: main company info */}
          <div className="col-span-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                {/* Logo placeholder */}
                <div className="rounded flex items-center justify-center"><img src={logoCompany} alt="" /></div>
                <div>
                  <h1 className="text-2xl font-semibold">FPT Software</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <div className="flex items-center gap-1"><img src={personIcon} alt="" /><span className="text-gray-800 font-medium">220 - 550</span> nhân viên</div>
                    <div className="flex items-center gap-1"><img src={heartIcon} alt="" /> <span>100 người theo dõi</span></div>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Outsource</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">verified</span>
                  </div>

                  <div className="text-sm text-gray-500 mt-3">https://fptsoftware.com/</div>
                </div>
              </div>

              <div>
                <button className="bg-[#BC2228] text-white px-6 py-2 rounded">Chỉnh Sửa</button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold flex gap-3">Mô tả về công ty <span><img src={editIcon} alt="" /></span></h3>
              <div className="text-gray-600 mt-3 leading-relaxed">
                <p className="mb-4">Velstar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!</p>
                <p className="mb-4">Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level...</p>
                <p className="mb-4">The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director...</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-base font-semibold mb-3">Chính sách</h4>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on</li>
                <li>3+ years of experience in back-end development</li>
                <li>Experience with HTML, JavaScript, CSS, PHP</li>
              </ul>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button className="bg-white border border-red-400 text-red-600 px-4 py-2 rounded">Thêm việc làm mới</button>
            </div>
            <JobOpen/>
          </div>

          {/* Right column: cards */}
          <div className="col-span-4">
            <div className="space-y-6">
              <div className="bg-white border rounded shadow-sm p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded flex items-center justify-center"><img src={location} alt="" /></div>
                  <div>
                    <div className="text-sm font-semibold">Địa chỉ công ty</div>
                    <div className="text-sm text-gray-600 mt-2">Đường D1, Khu Công Nghệ Cao, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded shadow-sm p-4">
                <div className="text-sm font-semibold mb-3 flex items-center gap-3 "><img src={mapIcon} alt=""/>Xem trên Maps</div>
                <div className=" rounded flex items-center justify-center"><img src={map} alt="" /></div>
              </div>

              <div className="bg-white border rounded shadow-sm p-4">
                <div className="text-sm font-semibold mb-3">Chia sẻ thông tin công ty đến mọi người:</div>
                <div className="flex items-center gap-3">
                  <button className="flex-1 bg-red-50 border border-red-200 text-red-600 py-2 rounded"><img src={linkIcon} alt="" />Copy Links</button>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center"><img src={linkIn} alt="" /></div>
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center"><img src={facebook} alt="" /></div>
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center"><img src={twitter} alt="" /></div>
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center"><img src={map } alt="" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
