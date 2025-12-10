import { Select } from 'antd'
import LogoColor from '../../assets/dashboard/LogoColor.svg'
import fi_search from '../../assets/dashboard/fi_search.svg'

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export default function NavbarLogOut() {
  return (
    <div className='flex items-center justify-center py-[34px] sticky top-0 bg-white'>
        <img src={LogoColor} alt="logo" />
        <div className='border-[#E4E5E8] border rounded-[5px] flex items-center w-[668px] h-[50px]'>
            <Select
                        defaultValue="Hà Nội"
                        style={{ width: 'fit-content', border: 'none', padding: '0 20px 0 24px' , backgroundColor: 'transparent'}}
                        onChange={handleChange}
                        options={[
                            { value: 'hn', label: 'Hà Nội' },
                            { value: 'dn', label: 'Đà Nẵng' },
                            { value: 'hcm', label: 'Thành phố Hồ Chí Minh' },
                        ]}
            />
            <div className='bg-[#E4E5E8] h-8 w-px'></div>
            <img src={fi_search} alt="search icon" className='ps-5'/>
            <input type="text" placeholder='Job title, keyword, company' className='w-full outline-none ps-3'/>
        </div>
        <div className='flex gap-3 font-semibold ms-[30px]'>
            <button className='bg-[#BC2228] w-[134px] text-white h-12 rounded-[3px]'>Đăng Nhập</button>
            <button className='bg-white border border-[#BC2228] w-[134px] text-[#BC2228] h-12 rounded-[3px]'>Đăng Kí</button>
            <button className='bg-[#231651] w-[134px] text-white h-12 rounded-[3px]'>Đăng Tuyển</button>
        </div>
    </div>
  )
}
