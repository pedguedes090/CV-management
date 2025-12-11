import CandidateCard from './CandidateCard';
import arrowRightIcon from '../../assets/dashboard/fi_arrow-right.svg';

const mockCandidates = [
  {
    name: 'Nguyen Van A',
    position: 'Front-end',
    level: 'Fresher',
    technologies: ['ReactJS', 'VueJS'],
    languages: ['N2'],
    location: 'Ha Noi, Viet Nam',
  },
  {
    name: 'Nguyen Van B',
    position: 'Front-end',
    level: 'Fresher',
    technologies: ['ReactJS', 'VueJS'],
    languages: ['N2'],
    location: 'Ha Noi, Viet Nam',
  },
  {
    name: 'Nguyen Van C',
    position: 'Front-end',
    level: 'Fresher',
    technologies: ['ReactJS', 'VueJS'],
    languages: ['N2'],
    location: 'Ha Noi, Viet Nam',
  },
  {
    name: 'Tran Van D',
    position: 'Back-end',
    level: 'Junior',
    technologies: ['NodeJS', 'NestJS'],
    languages: ['N2'],
    location: 'Ho Chi Minh, Viet Nam',
  },
  {
    name: 'Le Thi E',
    position: 'Full-stack',
    level: 'Senior',
    technologies: ['ReactJS', 'NodeJS'],
    languages: ['N2'],
    location: 'Da Nang, Viet Nam',
  },
  {
    name: 'Pham Van F',
    position: 'DevOps',
    level: 'Middle',
    technologies: ['Docker', 'K8s'],
    languages: ['N2'],
    location: 'Ha Noi, Viet Nam',
  },
  {
    name: 'Hoang Van G',
    position: 'Mobile',
    level: 'Fresher',
    technologies: ['React Native', 'Flutter'],
    languages: ['N2'],
    location: 'Ha Noi, Viet Nam',
  },
  {
    name: 'Vu Thi H',
    position: 'QA/QC',
    level: 'Junior',
    technologies: ['Selenium', 'Cypress'],
    languages: ['N2'],
    location: 'Ho Chi Minh, Viet Nam',
  },
  {
    name: 'Dao Van I',
    position: 'UI/UX',
    level: 'Middle',
    technologies: ['Figma', 'Adobe XD'],
    languages: ['N2'],
    location: 'Ha Noi, Viet Nam',
  },
];

export default function FeaturedCandidates() {
  return (
    <section className="bg-white py-16 px-[60px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[32px] font-semibold text-[#18191C]">Ứng viên nổi bật</h2>
        <button className="flex items-center gap-2 text-[#BC2228] hover:opacity-70 transition-opacity">
          <span className="text-[16px] font-medium">Xem thêm</span>
          <img src={arrowRightIcon} alt="Arrow Right" className="w-6 h-6" />
        </button>
      </div>
      
      {/* Candidates Grid */}
      <div className="grid grid-cols-3 gap-6">
        {mockCandidates.map((candidate, index) => (
          <CandidateCard key={index} {...candidate} />
        ))}
      </div>
    </section>
  );
}
