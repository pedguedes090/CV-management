import Header from '../../components/header_footer/Header'
import Footer from '../../components/header_footer/Footer'
import Navbar from '../../components/header_footer/Navbar'
import Breadcrumb from 'antd/es/breadcrumb/Breadcrumb'
import SearchFillter from '../../components/JobHunting/SearchFillter'
import TagFeatureJob from '../../components/dashboard/TagFeatureJob'

export default function JobHunting() {
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
                title: 'Việc làm',
                },
            ]}
            className='px-[60px] py-[24px] bg-[#F1F2F4] text-[14]'
        />
        <div className='mt-[20px] mb-[50px]'>
            <SearchFillter></SearchFillter>
        </div>
        <div className='mb-[141px] gap-6 grid grid-cols-3 px-[60px]'>
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
            <TagFeatureJob></TagFeatureJob>
            <TagFeatureJob></TagFeatureJob>
            <TagFeatureJob></TagFeatureJob>
        </div>
        <Footer></Footer>
    </>
  )
}
