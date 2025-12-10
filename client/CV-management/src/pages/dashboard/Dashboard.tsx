
import Header from '../../components/header_footer/Header'
import Footer from '../../components/header_footer/Footer'
import NavbarLogOut from './NavbarLogOut'
import OverView from './OverView'
import arrow_right from '../../assets/dashboard/fi_arrow-right.svg';
import TagFeatureJob from '../../components/dashboard/TagFeatureJob';
import TagFeatureCompany from '../../components/dashboard/TagFeaturecompany';
import ClientsTestimonial from '../../components/dashboard/ClientsTestimonial';


export default function Dashboard() {
  return (
    <div className='w-full h-screen'>
        <Header></Header>
        <NavbarLogOut></NavbarLogOut>
        <OverView></OverView>
        <div className='px-[60px] py-[100px]'>
            <div className='flex justify-between items-center mb-12'>
                <p className='font-medium text-[40px] text-[#191F33]'>Công việc nổi bật</p>
                <button className='text-[#BC2228] font-semibold flex gap-3 p-[12px_24px] w-[167px]'>Xem thêm <img src={arrow_right} alt="arrow right" /></button>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                <TagFeatureJob></TagFeatureJob>
                <TagFeatureJob></TagFeatureJob>
                <TagFeatureJob></TagFeatureJob>
                <TagFeatureJob></TagFeatureJob>
                <TagFeatureJob></TagFeatureJob>
                <TagFeatureJob></TagFeatureJob>
                <TagFeatureJob></TagFeatureJob>
                <TagFeatureJob></TagFeatureJob>
                <TagFeatureJob></TagFeatureJob>
                <TagFeatureJob></TagFeatureJob>
                <TagFeatureJob></TagFeatureJob>
                <TagFeatureJob></TagFeatureJob>
            </div>
        </div>
        <div className='px-[60px] pt-8 pb-[100px]'>
            <div className='flex justify-between items-center mb-12'>
                <p className='font-medium text-[40px] text-[#191F33]'>Công ty nổi bật</p>
                <button className='text-[#BC2228] font-semibold flex gap-3 p-[12px_24px] w-[167px]'>Xem thêm <img src={arrow_right} alt="arrow right" /></button>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                <TagFeatureCompany></TagFeatureCompany>
                <TagFeatureCompany></TagFeatureCompany>
                <TagFeatureCompany></TagFeatureCompany>
                <TagFeatureCompany></TagFeatureCompany>
                <TagFeatureCompany></TagFeatureCompany>
                <TagFeatureCompany></TagFeatureCompany>
            </div>
        </div>
        <div className='bg-[#F1F2F4] px-[60px] py-[100px]'>
            <h1 className='font-medium text-[40px] text-center mb-[50px]'>Clients Testimonial</h1>
            <ClientsTestimonial></ClientsTestimonial>
        </div>
        
        <Footer></Footer>
    </div>
  )
}
