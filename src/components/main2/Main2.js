import React from 'react'
import B_img from '../../image/BMW_Teaser.png'
function Main2() {
    return (
        <div className='w-full h-[600px] bg-white'>
            <h1 className='text-[30px] text-[#494949] ml-[100px] font-medium'>OUR CURRENT TOPICS.</h1>

            <div className="flex w-[85%] h-[85%] m-auto mt-[20px]">
                <div className="w-[60%] h-[100%]">
                    <img src={B_img} alt="" className='w-[100%] h-[100%] object-cover' />
                </div>
                <div className="w-[40%] flex flex-col justify-center">
                    <a href="/" className='flex items-center ml-[20px]'>SUSTAINABILITY | 08.1.2022 | 5 Min.</a>
                    <h1 className='text-[30px] font-medium text-[#494949] leading-none w-[400px] ml-[20px] mt-[10px]'>PROTECTING PEOPLE AND PLANET IN THE INDONESIAN RAINFOREST.</h1>
                </div>
            </div>
        </div>
    )
}

export default Main2