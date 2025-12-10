import fi_map_pin from '../../assets/dashboard/fi_map-pin.svg'
import search from '../../assets/dashboard/fi_search.svg'

export default function OverView() {
  return (
    <div>
        <div>
            <div>
                <h1>Tìm kiếm công việc phù hợp với năng lực của bạn cùng chúng tôi</h1>
                <p>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.</p>
            </div>
            <div className='flex items-center'>
                <div className='flex items-center gap-3'>
                    <img src={search} alt="search" />
                    <input type="text" placeholder='Job tittle, Keyword...' />
                </div>
                <div className='bg-[#E4E5E8] h-8 w-px'></div>
                <div className='flex items-center gap-3'>
                    <img src={fi_map_pin} alt="map pin" />
                    <input type="text" placeholder='Your Location'/>
                </div>
                <button className='bg-[#BC2228] w-[134px] text-white h-12 rounded-[3px]'>Find Job</button>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}
