import { Select } from 'antd';
import { useState } from 'react';
import phoneCallIcon from '../../assets/dashboard/PhoneCall.svg';
import usaFlag from '../../assets/dashboard/usaFlag.png';


const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

type NavItem = 'home' | 'jobs' | 'cv' | 'support';

export default function Header() {
  const [activeNav, setActiveNav] = useState<NavItem>('jobs');

  const navItems: { key: NavItem; label: string }[] = [
    { key: 'home', label: 'Trang chủ' },
    { key: 'jobs', label: 'Việc làm' },
    { key: 'cv', label: 'CV của bạn' },
    { key: 'support', label: 'Customer Supports' },
  ];

  return (
    <header className="w-full">
      {/* Top Navigation Bar - Figma node 368:6829 */}
      <div className="bg-[#F1F2F4] w-full flex justify-between items-center px-[30px] py-0">
        {/* Navigation Links */}
        <div className="flex gap-6 items-start">
          {navItems.map((item) => (
            <div
              key={item.key}
              onClick={() => setActiveNav(item.key)}
              className={`bg-[#F1F2F4] flex items-center px-0 py-3.5 relative cursor-pointer
                ${activeNav === item.key ? 'shadow-[inset_0px_-2px_0px_0px_#bc2228]' : ''}
              `}
            >
              <span
                className={`text-[14px] leading-5 
                  ${activeNav === item.key 
                    ? 'text-[#BC2228] font-medium' 
                    : 'text-[#5E6670] font-normal hover:text-[#18191C]'
                  }
                `}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Right Section - Phone & Language */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={phoneCallIcon} alt="Phone" className="w-6 h-6" />
            <span className="text-[#18191C] text-[14px] font-medium leading-5">
              +1-202-555-0178
            </span>
          </div>
          <div className="flex items-center gap-1">
            <img src={usaFlag} alt="USA Flag" className="w-6 h-4 object-cover" />
            <Select
              defaultValue="eng"
              variant="borderless"
              style={{ width: 'fit-content' }}
              onChange={handleChange}
              options={[
                { value: 'eng', label: 'English' },
                { value: 'jpn', label: 'Japanese' },
                { value: 'vne', label: 'Việt Nam' },
              ]}
              className="text-[#5E6670] text-[14px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
