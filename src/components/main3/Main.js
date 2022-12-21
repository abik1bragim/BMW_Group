import React from 'react'
import img1 from '../../image/img1.jpg'
import img2 from '../../image/img3.jpg'
function Main() {
    return (
        <div className='w-full h-[550px] bg-white'>
            <h1 className='text-[28px] font-medium text-[#6f6f6f] mt-[70px] ml-[100px]'>BE INSPIRED.</h1>

            <div className="w-[88%] h-[69%] m-auto grid grid-cols-3 mt-[30px] ml-[100px]">
                <div className="w-[95%] border-b-[5px] border-[#e96d0c] overflow-hidden">
                    <img src={img1} alt="" className='hover:scale-105 duration-[1s]' />
                </div>
                <div className="w-[95%] border-b-[5px] border-[#FAD022] overflow-hidden">
                    <img src={img2} alt="" className='hover:scale-105 duration-[1s]' />
                </div>
                <div className="w-[95%] overflow-hidden border-b-[5px] border-[#E96D0C]">
                    <img src={img1} alt="" className='hover:scale-105 duration-[1s]' />
                </div>
            </div>
        </div>
    )
}

export default Main