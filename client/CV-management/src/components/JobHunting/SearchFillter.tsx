import search from '../../assets/dashboard/fi_search.svg'
import MapPin from '../../assets/jobHunting/MapPin.svg'
import Crosshair from '../../assets/jobHunting/Crosshair.svg'
import Slider from '../../assets/jobHunting/Sliders.svg'

export default function SearchFillter() {
  return (
    <div className='flex w-fit mx-auto rounded-lg border border-[#E4E5E8]'>
        <div className='border-e border-[#EDEFF5] p-3'>
            <div className='w-[576px] flex gap-3 p-3 '>
                <img src={search} alt="search icon" />
                <input type="search" name="jobSearch" id="jobSearch" placeholder='Search by: Job tittle, Position, Keyword...' className='text-[#9199A3] w-full'/>
            </div>
        </div>
        <div className='p-3'>
            <div className='w-[424px] flex gap-3 p-3 pe-0'>
                <img src={MapPin} alt="location icon" className='w-6 '/>
                <input type="search" value="" placeholder='City, state or zip code' className='text-[#9199A3] w-full'/>
                <img src={Crosshair} alt="crosshair icon" className='w-6 '/>
            </div>
        </div>
        <div className='p-3 flex gap-3'>
            <button className='bg-[#F1F2F4] p-[12px_24px] rounded'>
                <div className='flex gap-3'>
                    <img src={Slider} alt="slider icon" />
                    <p className='font-semibold'>Filters</p>
                </div>
            </button>
            <button className='bg-[#BC2228] p-[12px_24px] rounded'>
                <div className='flex gap-3'>
                    <p className='text-white font-semibold'>Find job</p>
                </div>
            </button>
        </div>
    </div>
  )
}
