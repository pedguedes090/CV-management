
import Header from '../../components/header_footer/Header'
import Footer from '../../components/header_footer/Footer'
import CVContent from '../../components/profileManagement/CVContent'
import NavbarLogOut from '../dashboard/NavbarLogOut'
export default function ProfileManagement() {
  return (
    <div className='w-full h-screen'>
        <Header></Header>
        <NavbarLogOut></NavbarLogOut>
        <div>
            
            <CVContent />
        </div>
        
        <Footer></Footer>
    </div>
  )
}
