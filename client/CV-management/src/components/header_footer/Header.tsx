import { Select} from 'antd';
import phoneCallIcon from '../../assets/dashboard/PhoneCall.svg'
import usaFlag from '../../assets/dashboard/usaFlag.png'

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export default function Header() {
  return (
    <>
        <div className='bg-[#F1F2F4] w-full flex justify-between items-center px-[30px]'>
            <div className='text-[#5E6670] flex gap-6'>
                <button className='h-12'>Trang chủ</button>
                <button className='h-12'>Việc làm</button>
                <button className='h-12'>CV của bạn</button>
                <button className='h-12'>Customer Supports</button>
            </div>
            <div className='flex items-center gap-6 w-fit'>
                <div className='flex items-center gap-2'>
                    <img src={phoneCallIcon} alt="img"/>
                    <p className='w-fit'>+1-202-555-0178</p>
                </div>
                <div className='flex items-center'>
                    <img src={usaFlag} alt=""/>
                    <Select
                        defaultValue="English"
                        style={{ width: 'fit-content', border: 'none',padding: '0 10px 0 12px' , backgroundColor: 'transparent', color: '#5E6670' }}
                        onChange={handleChange}
                        options={[
                            { value: 'eng', label: 'English' },
                            { value: 'jpn', label: 'Japanese' },
                            { value: 'vne', label: 'Việt Nam' },
                        ]}
                    />
                </div>
            </div>
        </div>
    </>
  )
}
