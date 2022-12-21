import React from 'react'
import M5_img from '../../image/M5_img.png'
function Main5() {
    return (
        <div className='w-full h-[600px]'>
            <div className="flex w-[85%] h-[85%] m-auto">
                <div className="w-[40%] flex flex-col justify-center items-end">
                    <a href="/" className='flex items-center mr-[30px]'>SUSTAINABILITY | 08.1.2022 | 5 Min.</a>
                    <h1 className='text-[30px] font-medium text-[#494949] leading-none w-[400px] mr-[30px] mt-[10px] text-end'>THIS IS HOW LEAN THE BMW iFACTORY IS.</h1>

                    <p className='text-[18px] text-[#494949] text-end mr-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eaque cum architecto corporis similique maiores dolores pariatur in, magnam dignissimos?</p>
                </div>
                <div className="w-[60%] h-[100%]">
                    <img src={M5_img} alt="" className='w-[100%] h-[100%] object-cover' />
                </div>

            </div>
        </div>
    )
}

export default Main5