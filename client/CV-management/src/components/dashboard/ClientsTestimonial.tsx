import Quote from '../../assets/dashboard/Quote.svg';
import Rating from '../../assets/dashboard/Rating.svg';
import user1 from '../../assets/dashboard/user1.png';
import user2 from '../../assets/dashboard/user2.png';
import user3 from '../../assets/dashboard/user3.png';

export default function ClientsTestimonial() {
  return (
        <div className='grid grid-cols-3 gap-6'>
            <div className='bg-white w-[424px] h-[294px] p-6 rounded-xl flex flex-col justify-between'>
                <div>
                    <img src={Rating} alt="" />
                    <p className='text-[#464D61] mt-4'>“Ut ullamcorper hendrerit tempor. Aliquam in <br />rutrum dui. Maecenas ac placerat metus, in <br />faucibus est.”</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3'>
                        <img src={user1} alt="" />
                        <div>
                            <p className='font-medium'>Robert Fox</p>
                            <p className='text-[#767E94] text-[14px]'>UI/UX Designer</p>
                       </div>
                    </div>
                    <img src={Quote} alt="" />
                </div>
            </div>
            <div className='bg-white w-[424px] h-[294px] p-6 rounded-xl flex flex-col justify-between'>
                <div>
                    <img src={Rating} alt="" />
                    <p className='text-[#464D61] mt-4'>“Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante”</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3'>
                        <img src={user2} alt="" />
                        <div>
                            <p className='font-medium'>Robert Fox</p>
                            <p className='text-[#767E94] text-[14px]'>UI/UX Designer</p>
                       </div>
                    </div>
                    <img src={Quote} alt="" />
                </div>
            </div>
            <div className='bg-white w-[424px] h-[294px] p-6 rounded-xl flex flex-col justify-between'>
                <div>
                    <img src={Rating} alt="" />
                    <p className='text-[#464D61] mt-4'>“Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.”</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3'>
                        <img src={user3} alt="" />
                        <div>
                            <p className='font-medium'>Robert Fox</p>
                            <p className='text-[#767E94] text-[14px]'>UI/UX Designer</p>
                       </div>
                    </div>
                    <img src={Quote} alt="" />
                </div>
            </div>
        </div>
        
  )
}
