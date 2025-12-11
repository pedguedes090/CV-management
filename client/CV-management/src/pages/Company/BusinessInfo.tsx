import CompanyInfo from "../../components/Company/CompanyInfo/CompanyInfo";
import FeaturedCandidates from "../../components/Company/CompanyInfo/FeaturedCandidateInfo";
import Footer from "../../components/Company/FooterDashboard";
import Header from "../../components/Company/HeaderDashBoard";
import NavbarLogOut from "../dashboard/NavbarLogOut";

export default function BusinessInfo() {
  return (
    <div>
        <Header/>
        <NavbarLogOut/>
        <CompanyInfo/>
        <FeaturedCandidates/>
        <Footer/>
    </div>
  )
}
