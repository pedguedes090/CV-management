import { MapPinIcon, BookmarkIcon } from './Icons';

interface JobCardProps {
  title: string;
  type: string;
  salary: string;
  company: string;
  location: string;
  logoUrl?: string;
}

export default function JobCard({
  title,
  type,
  salary,
  company,
  location,
  logoUrl,
}: JobCardProps) {
  return (
    <div className="bg-white border border-[#E4E5E8] rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
      {/* Job Info */}
      <div className="mb-4">
        <h3 className="text-[18px] font-medium text-[#18191C] leading-7 mb-2">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-[#e7f6ea] text-[#0ba02c] rounded text-[14px]">
            {type}
          </span>
          <span className="text-[14px] text-[#767F8C]">{salary}</span>
        </div>
      </div>
      
      {/* Company Info */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-[#F1F2F4] rounded-lg overflow-hidden flex items-center justify-center">
          {logoUrl ? (
            <img src={logoUrl} alt={company} className="w-full h-full object-cover" />
          ) : (
            <div className="w-8 h-8 bg-[#E8E8E8] rounded flex items-center justify-center text-[#767F8C] text-sm font-semibold">
              {company.charAt(0)}
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <p className="text-[16px] font-medium text-[#18191C]">{company}</p>
          <div className="flex items-center gap-1">
            <MapPinIcon className="w-[18px] h-[18px] text-[#767F8C]" />
            <span className="text-[14px] text-[#767F8C]">{location}</span>
          </div>
        </div>
        
        <button className="text-[#767F8C] hover:text-[#BC2228] transition-colors">
          <BookmarkIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
