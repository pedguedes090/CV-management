import Header from '../../components/Company/HeaderDashBoard';
import Footer from '../../components/Company/FooterDashboard';
import HeroSection from '../../components/Company/HeroSection';
import StatsSection from '../../components/Company/StatsSection';
import FeaturedCandidates from '../../components/Company/FeaturedCandidates';
import FeaturedJobs from '../../components/Company/FeaturedJobs';

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <FeaturedCandidates />
        <FeaturedJobs />
      </main>
      
      <Footer />
    </div>
  );
}
