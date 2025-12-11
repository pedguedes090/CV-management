import LogoGG from '../../assets/dashboard/LogoGG.svg';
import MapPin from '../../assets/dashboard/MapPin.svg';
import Bookmark from '../../assets/dashboard/BookmarkSimple.svg';

export default function TagFeatureJob() {
  return (
    <div className='p-6 border border-[#E4E5E8] rounded-lg w-fit'>
        <div className='flex flex-col gap-1.5 '>
            <p className='text-[#18191C] text-[18px]'>Techical Support Specialist</p>
            <div className='flex gap-2 items-center'>
                <p className='bg-[#E7F6EA] text-[#0BA02C] text-[12px] p-[4px_8px]'>PART TIME</p>
                <p className='text-[#767F8C] text-[14px]'>Salary: $20,000 - $25,000</p>
            </div>
        </div>
        <div className='flex gap-3 mt-5'>
            <div className='bg-[#EDEFF5] rounded-sm p-3 w-fit'>
                <img src={LogoGG} alt="Logo Google" />
            </div>
                <div className='w-[278px]'>
                    <p>Google Inc</p>
                    <div className='flex gap-2'>
                        <img src={MapPin} alt="Location" />
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
            <img src={Bookmark} alt="Bookmark" />
        </div>
    </div>
  )
}
