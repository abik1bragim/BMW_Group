import React from 'react'
import BMW from '../../image/BMW.svg'
import MINI from '../../image/MINI.svg'
import RR from '../../image/Rolls-Royce.svg'
import { CiSearch } from 'react-icons/ci'
import { BiMenu } from 'react-icons/bi'
function Navbar() {

    const style = {
        Nav: 'w-full h-[90px] bg-white border-b-[5px] border-[#ccc] flex items-center',
        Ul: 'flex w-[270px] h-[50%] items-center justify-between ml-[300px]',
        Li: 'text-[#494972] font-bold hover:border-b-2 hover:border-black border-b-2 border-[transparent] h-[100%] w-[85px] flex items-center justify-center',
        Li2: 'text-[#494972] font-bold hover:border-b-2 hover:border-black border-b-2 border-[transparent] h-[100%] w-[70px] flex items-center justify-center',
        Li3: 'text-[#494972] font-bold hover:border-b-2 hover:border-black border-b-2 border-[transparent] h-[100%] w-[90px] flex items-center justify-center',
        H2: 'w-[100%] hover:border-b-[2px] hover:border-black border-b-[2px] border-[transparent] text-center font-bold text-[#494972]',
    }

    return (
        <div className={style.Nav}>
            <div className="w-[100px] leading-6 text-[#6F6F6F] font-mono ml-[100px]">
                <a href="/">
                    <h1 className='text-[30px]'>BMW GROUP</h1>
                </a>
            </div>
            <a href="/bmw">
                <img src={BMW} alt="" className='w-[100px] ml-[-20px]' />
            </a>
            <a href="/mini">
                <img src={MINI} alt="" className='w-[90px] ml-[-10px]' />
            </a>
            <a href="/rolls-royce">
                <img src={RR} alt="" className='w-[100px]' />
            </a>

            <ul className={style.Ul}>
                <li className={style.Li}>
                    <a href="/">Nesw site</a>
                </li>
                <li className={style.Li2}>
                    <a href="/">Dates</a>
                </li>
                <li className={style.Li3}>
                    <a href="/">Downloads</a>
                </li>
            </ul>

            <div className="flex border-x-[2px] border-[#ccc] w-[130px] h-[55%] items-center justify-around ml-[20px]">
                <a href="/" className='w-[30%]'>
                    <h2 className={style.H2}>DE</h2>
                </a>
                <a href="/" className='w-[30%]'>
                    <h2 className='w-[100%] border-b-[2px] border-black text-center font-bold '>EN</h2>
                </a>
            </div>
            <CiSearch className='text-[25px] ml-[15px]' />

            <h1 className='ml-[10px] font-bold text-[#494972]'>Menu</h1>

            <BiMenu className='text-[25px] ml-[10px] text-[#494972]' />
        </div>
    )
}

export default Navbar