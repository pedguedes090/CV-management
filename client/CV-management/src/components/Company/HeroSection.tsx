import { Input } from 'antd';
import searchIcon from '../../assets/dashboard/fi_search.svg';
import mapPinIcon from '../../assets/dashboard/fi_map-pin.svg';
import heroIllustration from '../../assets/dashboard/Software code testing-pana 1.svg';

export default function HeroSection() {
  return (
    <section className="bg-white py-16 px-[30px]">
      <div className="flex items-center justify-between">
        {/* Left Content */}
        <div className="max-w-[600px]">
          {/* Title */}
          <h1 className="text-[32px] font-medium leading-12 text-[#18191C] mb-4">
            Tìm kiếm công việc phù hợp với năng lực của bạn cùng chúng tôi
          </h1>
          
          {/* Description */}
          <p className="text-[16px] leading-7 text-[#5E6670] mb-8">
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
          </p>
          
          {/* Search Box */}
          <div className="bg-white border border-[#E4E5E8] rounded-md p-2 flex items-center gap-2 max-w-[600px]">
            {/* Job Title Input */}
            <div className="flex items-center gap-2 flex-1 border-r border-[#E4E5E8] pr-3">
              <img src={searchIcon} alt="Search" className="w-5 h-5" />
              <Input
                placeholder="Job tittle, Keyword..."
                variant="borderless"
                className="text-[14px] text-[#9199A3]"
              />
            </div>
            
            {/* Location Input */}
            <div className="flex items-center gap-2 flex-1 pr-3">
              <img src={mapPinIcon} alt="Location" className="w-5 h-5" />
              <Input
                placeholder="Your Location"
                variant="borderless"
                className="text-[14px] text-[#9199A3]"
              />
            </div>
            
            {/* Search Button */}
            <button className="h-12 px-8 bg-[#BC2228] text-white rounded-md text-[16px] font-semibold hover:bg-[#a31e23] transition-colors whitespace-nowrap">
              Find Job
            </button>
          </div>
        </div>
        
        {/* Right Illustration */}
        <div className="shrink-0">
          <img src={heroIllustration} alt="Hero Illustration" className="w-[500px] h-auto" />
        </div>
      </div>
    </section>
  );
}
