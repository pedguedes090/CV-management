import mapPinIcon from '../../assets/dashboard/MapPin.svg';
import arrowRightIcon from '../../assets/dashboard/fi_arrow-right.svg';

interface CandidateCardProps {
  name: string;
  position: string;
  level: string;
  technologies: string[];
  languages: string[];
  location: string;
  avatarUrl?: string;
}

export default function CandidateCard({
  name,
  position,
  level,
  technologies,
  languages,
  location,
  avatarUrl,
}: CandidateCardProps) {
  return (
    <div className="bg-white border border-[#E4E5E8] rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
      {/* Header - Avatar and Info */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-[86px] h-[78px] bg-[#F1F2F4] rounded-lg overflow-hidden flex items-center justify-center">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-12 h-12 bg-[#E8E8E8] rounded-full flex items-center justify-center text-[#767F8C] text-xl font-semibold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-medium text-[#18191C] leading-6">{name}</h3>
            <button className="hover:opacity-70 transition-opacity">
              <img src={arrowRightIcon} alt="View" className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <span className="px-3 py-1 bg-[#0ba02c] rounded text-[14px] text-[#ffffff]">
              {position}
            </span>
            <span className="px-3 py-1 bg-[#e7f0fa] text-[#0a65cc] rounded text-[14px]">
              {level}
            </span>
          </div>
        </div>
      </div>
      
      {/* Technologies */}
      <div className="mb-3">
        <span className="text-[14px] text-[#767F8C]">Technical in use: </span>
        {technologies.map((tech, index) => (
          <span key={index} className="text-[14px] text-[#27aa44] bg-[#e7f6ea] px-2 py-0.5 rounded mr-2">
            {tech}
          </span>
        ))}
      </div>
      
      {/* Languages */}
      <div className="mb-4">
        <span className="text-[14px] text-[#767F8C]">Foreign Language: </span>
        {languages.map((lang, index) => (
          <span key={index} className="text-[14px] text-[#f2762d] bg-[#fce1d1] px-2 py-0.5 rounded mr-2">
            {lang}
          </span>
        ))}
      </div>
      
      {/* Location */}
      <div className="flex items-center gap-2 pt-3 border-t border-[#E4E5E8]">
        <img src={mapPinIcon} alt="Location" className="w-[18px] h-[18px]" />
        <span className="text-[14px] text-[#767F8C]">{location}</span>
      </div>
    </div>
  );
}
