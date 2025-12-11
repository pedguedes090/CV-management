import React from 'react'
import Header from '../../components/header_footer/Header'
import Footer from '../../components/header_footer/Footer'
import CVContent from '../../components/CVManagement/CVContent'
import NavbarLogOut from '../dashboard/NavbarLogOut'
function CVManagement() {
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

export default CVManagement