import employersLogo from '../../assets/dashboard/Employers Logo.svg';
import MapPin from '../../assets/dashboard/MapPin.svg';

export default function TagFeatureCompany() {
  return (
    <div className='p-6 border border-[#E4E5E8] rounded-lg w-fit'>
        <div className='flex gap-3'>
            <div className='bg-[#EA4C89] rounded-sm p-3 w-fit'>
                <img src={employersLogo} alt="Employers Logo" />
            </div>
                <div className='w-[278px]'>
                    <div className='flex items-center gap-2'>
                        <p className='text-[18px] font-medium'>Dribbble</p>
                        <p className='text-[#E05151] text-[14px] bg-[#FCEEEE] p-[3px_12px] rounded-full'>Featured</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={MapPin} alt="Location" />
                        <p className='text-[14px] text-[#767F8C]'>Dhaka, Bangladesh</p>
                    </div>
                </div>
        </div>
        <button className='font-semibold w-full py-3 text-[#0A65CC] bg-[#E7F0FA] mt-5 rounded-sm'>Open Position (3)</button>
    </div>
  )
}
