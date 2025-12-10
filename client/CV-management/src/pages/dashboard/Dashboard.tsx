
import Header from '../../components/header_footer/Header'
import Footer from '../../components/header_footer/Footer'
import NavbarLogOut from '../../components/dashboard/NavbarLogOut'
import OverView from '../../components/dashboard/OverView'

export default function Dashboard() {
  return (
    <div className='w-full h-screen'>
        <Header></Header>
        <NavbarLogOut></NavbarLogOut>
        <OverView></OverView>
        <Footer></Footer>
    </div>
  )
}
