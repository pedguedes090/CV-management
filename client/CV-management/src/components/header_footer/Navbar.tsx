import { Select } from 'antd'
import LogoColor from '../../assets/dashboard/LogoColor.svg'
import fi_search from '../../assets/dashboard/fi_search.svg'
import bellFill from '../../assets/navbar/bell.fill.svg'
import user from '../../assets/navbar/user.svg'
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export default function NavbarLogOut() {
  return (
    <div className='flex items-center justify-center py-[34px] bg-white'>
        <img src={LogoColor} alt="logo" className='me-[30px]'/>
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
        <div className='flex gap-[30px]  ms-[30px]'>
            <img src={bellFill} alt="notification bell" />
            <img src={user} alt="user icon" />
            <p className='text-[14px] font-medium text-[#BC2228]'>Nguyễn Minh Dương</p>
        </div>
    </div>
  )
}
