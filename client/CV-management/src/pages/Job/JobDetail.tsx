import Header from '../../components/header_footer/Header'
import Footer from '../../components/header_footer/Footer'
import Navbar from '../../components/header_footer/Navbar'
import Breadcrumb from 'antd/es/breadcrumb/Breadcrumb'
import JobInfo from './JobInfo'

export default function JobDetail() {
  return (
    <>
        <Header></Header>
        <Navbar></Navbar>
        <Breadcrumb
            items={[
                {
                title: 'Trang chủ',
                },
                {
                title: <a href="">Việc làm</a>,
                },
                {
                title: <a href="">Graphics & Design</a>,
                },
                {
                title: 'Job A Details',
                },
            ]}
            className='px-[60px] py-[24px] bg-[#F1F2F4] text-[14]'
        />
        <div>
            <JobInfo></JobInfo>
        </div>
        <Footer></Footer>
    </>
  )
}
