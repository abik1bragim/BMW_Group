import React from 'react'
import M7_img1 from '../../image/M7_img1.jpg'
import M7_img2 from '../../image/M7_img2.jpg'
import M7_img3 from '../../image/M7_img3.jpg'
function Main7() {
    return (
        <div className='w-full h-[600px]'>
            <div className="w-[85%] h-[90%] grid grid-cols-3 m-auto">
                <div className="w-[95%] flex flex-col">
                    <img src={M7_img1} alt="" className='w-[100%] h-[50%]' />
                    <a href="/" className='text-[16px] mt-[15px] ml-[10px] text-[#494949]'>COMPANY | 21.11.2022 | 5 Min</a>

                    <h1 className='text-[27px] font-medium mt-[15px] leading-none text-[#494949] ml-[10px]'>INNOVATIVE SUPPLIERS DISTINGUISHED.</h1>

                    <p className='tex-[18px] mt-[10px] ml-[10px] text-[#494949]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa illo veniam dolore provident necessitatibus assumenda minima repellendus dignissimos temporibus minus.</p>
                </div>
                <div className="w-[95%] flex flex-col">
                    <img src={M7_img2} alt="" className='w-[100%] h-[50%]' />
                    <a href="/" className='text-[16px] mt-[15px] ml-[10px] text-[#494949]'>COMPANY | 18.11.2022 | 4 Min</a>
                    <h1 className='text-[27px] font-medium mt-[15px] leading-none text-[#494949] ml-[10px]'>THIS IS HOW  DIGITAL THE BMW iFACTORY IS.</h1>
                    <p className='tex-[18px] mt-[10px] ml-[10px] text-[#494949]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quis consequuntur ipsa voluptas aliquid? Quas unde facere dolorum distinctio temporibus.</p>
                </div>
                <div className="w-[95%] flex flex-col">
                    <img src={M7_img3} alt="" className='w-[100%] h-[50%]' />
                    <a href="/" className='text-[16px] mt-[15px] ml-[10px] text-[#494949]'>COMPANY | 14.11.2022 | 4 Min</a>

                    <h1 className='text-[27px] font-medium mt-[15px] leading-none text-[#494949] ml-[10px]'>THIS IS HOW  GREEN THE BMW iFACTORY IS.</h1>
                    <p className='tex-[18px] mt-[10px] ml-[10px] text-[#494949]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eius laborum distinctio perspiciatis blanditiis reiciendis possimus placeat. Optio, aspernatur voluptates.</p>
                </div>
            </div>
        </div>
    )
}

export default Main7