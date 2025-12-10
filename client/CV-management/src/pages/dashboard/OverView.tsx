
import software_code from '../../assets/dashboard/Software code testing-pana 1.svg'
import FindJob from '../../components/dashboard/FindJob'
import briefcase from '../../assets/dashboard/briefcase-duotone 1.svg';
import building from '../../assets/dashboard/buildings-duotone 1.svg';
import users from '../../assets/dashboard/users-duotone 1.svg';

export default function OverView() {
  return (
    <div className='bg-[#F1F2F499] p-[60px]'>
        <div className='flex p-5 justify-between'>
            <div>
                <div className='text-[18px]'>
                    <h1 className='text-[#18191C] text-[56px] leading-14 font-medium mb-7'>Tìm kiếm công việc phù <br />hợp với năng lực của <br />bạn cùng chúng tôi</h1>
                    <p className='text-[#5E6670]'>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam <br />in scelerisque leo, eget sollicitudin velit bestibulum.</p>
                </div>
                <FindJob></FindJob>
                <div className='flex gap-1 text-[14px]'>
                    <p className='text-[#9199A3]'>Suggestion:</p>
                    <p className='text-[#474C54]'>Designer,</p>
                    <p className='text-[#BC2228]'>Programing</p>
                    <p className='text-[#474C54]'>Digital Marketing,</p>
                    <p className='text-[#474C54]'>Video,</p>
                    <p className='text-[#474C54]'>Animation.</p>
                </div>
            </div>
            <div className='mt-9'>
                <img src={software_code} alt="" />
            </div> 
        </div>    
        <div className='flex gap-6 justify-center mt-20'>
            <div className='w-[312px] bg-white rounded-lg p-5 flex gap-5 items-center'>
                <div className='p-4 bg-[#E7F0FA]'>
                    <img src={briefcase} alt="" />
                </div>
                <div>
                    <h1 className='text-[#18191C] font-medium text-2xl'>1,75,324</h1>
                    <p className='text-[#767F8C] font-normal'>Live Job</p>
                </div>
            </div>
            <div className='w-[312px] bg-white rounded-lg p-5 flex gap-5 items-center'>
                <div className='p-4 bg-[#BC2228]'>
                    <img src={building} alt="" />
                </div>
                <div>
                    <h1 className='text-[#18191C] font-medium text-2xl'>97,354</h1>
                    <p className='text-[#767F8C] font-normal'>Companies</p>
                </div>
            </div>
            <div className='w-[312px] bg-white rounded-lg p-5 flex gap-5 items-center'>
                <div className='p-4 bg-[#E7F0FA]'>
                    <img src={users} alt="" />
                </div>
                <div>
                    <h1 className='text-[#18191C] font-medium text-2xl'>38,47,154</h1>
                    <p className='text-[#767F8C] font-normal'>Candidates</p>
                </div>
            </div>
            <div className='w-[312px] bg-white rounded-lg p-5 flex gap-5 items-center'>
                <div className='p-4 bg-[#E7F0FA]'>
                    <img src={briefcase} alt="" />
                </div>
                <div>
                    <h1 className='text-[#18191C] font-medium text-2xl'>7,532</h1>
                    <p className='text-[#767F8C] font-normal'>Live Job</p>
                </div>
            </div>
        </div>
    </div>
  )
}
