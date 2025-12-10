import fi_map_pin from '../../assets/dashboard/fi_map-pin.svg'
import search from '../../assets/dashboard/fi_search.svg'

export default function FindJob() {
  return (
    <div className='flex items-center p-3 border border-[#E4E5E8] rounded-[5px] bg-[#FFFFFF] w-fit  mt-8 mb-6'>
        <div className='flex items-center gap-3 w-[288px]'>
            <img src={search} alt="search" className='w-6 h-6 ms-[18px]'/>
            <input type="text" placeholder='Job tittle, Keyword...' />
        </div>
        <div className='bg-[#E4E5E8] h-8 w-px'></div>
            <div className='flex items-center gap-3 w-[205px] ms-[18px] me-3'>
                <img src={fi_map_pin} alt="map pin" className='w-6 h-6'/>
                <input type="text" placeholder='Your Location'/>
        </div>
            <button className='bg-[#BC2228] w-[131px] text-white h-14 rounded-[3px]'>Find Job</button>
        </div>
  )
}
