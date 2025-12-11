import JobCard from '../CompanyInfo/JobCard';

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
];

export default function FeaturedJobs() {
  return (
    <section className=" py-16 ">
      
      {/* Jobs Grid */}
      <div className="grid grid-row-3 gap-6">
        {mockJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </section>
  );
}
