
import Header from '../../components/header_footer/Header'
import Footer from '../../components/header_footer/Footer'
import CVContent from '../../components/profileManagement/CVContent'
export default function Dashboard() {
  return (
    <div className='w-full h-screen'>
        <Header></Header>
        <div>
            
            <CVContent />
        </div>
        
        <Footer></Footer>
    </div>
  )
}
