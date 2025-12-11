import briefcaseIcon from '../../assets/dashboard/briefcase-duotone 1.svg';
import buildingsIcon from '../../assets/dashboard/buildings-duotone 1.svg';
import usersIcon from '../../assets/dashboard/users-duotone 1.svg';

interface StatItemProps {
  icon: string;
  value: string;
  label: string;
}

function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-lg p-5 shadow-sm">
      <div className="w-[72px] h-[72px] rounded-lg bg-[#E7F0FA] flex items-center justify-center">
        <img src={icon} alt={label} className="w-10 h-10" />
      </div>
      <div>
        <p className="text-[24px] font-semibold text-[#18191C] leading-8">{value}</p>
        <p className="text-[16px] text-[#767F8C] leading-6">{label}</p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      icon: briefcaseIcon,
      value: '1,75,324',
      label: 'Live Job',
    },
    {
      icon: buildingsIcon,
      value: '97,354',
      label: 'Companies',
    },
    {
      icon: usersIcon,
      value: '38,47,154',
      label: 'Candidates',
    },
    {
      icon: briefcaseIcon,
      value: '7,532',
      label: 'New Jobs',
    },
  ];

  return (
    <section className="bg-[#F1F2F4] py-8 px-[60px]">
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </section>
  );
}
