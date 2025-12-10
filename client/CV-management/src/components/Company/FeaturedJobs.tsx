import JobCard from './JobCard';
import arrowRightIcon from '../../assets/dashboard/fi_arrow-right.svg';

const mockJobs = [
  {
    title: 'Technical Support Specialist',
    type: 'Full Time',
    salary: 'Salary: $20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Senior UX Designer',
    type: 'Part Time',
    salary: 'Salary: $20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Marketing Officer',
    type: 'Internship',
    salary: 'Salary: $20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Junior Graphic Designer',
    type: 'Internship',
    salary: 'Salary: $20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Interaction Designer',
    type: 'Full Time',
    salary: 'Salary: $20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Project Manager',
    type: 'Part Time',
    salary: 'Salary: $20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Software Engineer',
    type: 'Part Time',
    salary: 'Salary: $20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Visual Designer',
    type: 'Part Time',
    salary: 'Salary: $20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Project Manager',
    type: 'Part Time',
    salary: 'Salary: $20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Front End Developer',
    type: 'Full Time',
    salary: 'Salary: $20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Senior UX Designer',
    type: 'Part Time',
    salary: 'Salary: $20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Marketing Manager',
    type: 'Internship',
    salary: 'Salary: $20,000 - $25,000',
    company: 'Google Inc.',
    location: 'Dhaka, Bangladesh',
  },
];

export default function FeaturedJobs() {
  return (
    <section className="bg-[#F8F8F8] py-16 px-[60px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[32px] font-semibold text-[#18191C]">Công việc nổi bật</h2>
        <button className="flex items-center gap-2 text-[#BC2228] hover:opacity-70 transition-opacity">
          <span className="text-[16px] font-medium">Xem thêm</span>
          <img src={arrowRightIcon} alt="Arrow Right" className="w-6 h-6" />
        </button>
      </div>
      
      {/* Jobs Grid */}
      <div className="grid grid-cols-3 gap-6">
        {mockJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </section>
  );
}
