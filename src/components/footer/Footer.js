import React from 'react'
import { GrFacebook } from 'react-icons/gr'
import { ImInstagram, ImTwitter, ImYoutube } from 'react-icons/im'
import { BsLinkedin } from 'react-icons/bs'
function Footer() {
    return (
        <div className='w-full h-[400px] bg-white' >
            <button className='w-[370px] h-[55px] bg-[#999] rounded-[3px] text-white font-semibold text-[19px] ml-[100px]'>READ MORE</button>

            <div className="w-[100%] h-[60%] mt-[70px] flex items-center justify-around border-t-2 border-[#999]">
                <ul className='text-[17px] leading-loose'>
                    <li>
                        <a href="/">BMW</a>
                    </li>
                    <li>
                        <a href="/">MINI</a>
                    </li>
                    <li>
                        <a href="/">Rolls-Royce Motor Cars</a>
                    </li>
                    <li>
                        <a href="/">BMW Motorrad</a>
                    </li>
                </ul>
                <ul className='text-[17px] leading-loose'>
                    <li>
                        <a href="/">BMW Group Plants</a>
                    </li>
                    <li>
                        <a href="/">BMW Weft</a>
                    </li>
                    <li>
                        <a href="/">BMW Museum</a>
                    </li>
                    <li>
                        <a href="/">BMW Group Classic</a>
                    </li>
                </ul>
                <ul className='text-[17px] leading-loose'>
                    <li>
                        <a href="/">BMW and MINI Driving Experience</a>
                    </li>
                    <li>
                        <a href="/">BMW Group PressClub</a>
                    </li>
                    <li>
                        <a href="/">BMW Group Financial Services</a>
                    </li>
                    <li>
                        <a href="/">BMW Group Careers</a>
                    </li>
                </ul>

                <div className="w-[200px] flex justify-between items-center mt-[-110px] ml-[-110px]">
                    <GrFacebook className='text-[25px] text-[#444444]' />
                    <ImTwitter className='text-[25px] text-[#444444]' />
                    <ImInstagram className='text-[25px] text-[#444444]' />
                    <ImYoutube className='text-[25px] text-[#444444]' />
                    <BsLinkedin className='text-[25px] text-[#444444]' />
                </div>

            </div>
            <div className="w-[100%] h-[40px] bg-[#EEEFEA] flex items-center">
                <ul className='w-[750px] flex items-center justify-between text-[17px] ml-[100px]'>
                    <li>
                        <a href="/">Sitemap</a>
                    </li>
                    <li>
                        <a href="/">Rechtliche Hinweise</a>
                    </li>
                    <li>
                        <a href="/">Cookies</a>
                    </li>
                    <li>
                        <a href="/">Impressum</a>
                    </li>
                    <li>
                        <a href="/">Kontakt</a>
                    </li>
                    <li>
                        <a href="/">Datenscutz</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer