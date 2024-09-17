// import { Offcanvas, Ripple, Dropdown } from "tw-elements";
import { useLocation, useNavigate } from 'react-router-dom';
import { CloseIcon, HamBurger } from '../../assets/svg';
import { useState } from 'react';
import { logoImg } from '../../assets/images';
import { IoIosArrowForward } from 'react-icons/io';
import { BsHouseFill } from 'react-icons/bs';
import { GrServices } from 'react-icons/gr';
import { FaPhoneVolume } from 'react-icons/fa';
import { GiFamilyHouse } from 'react-icons/gi';

// initTE({ Offcanvas, Ripple, Dropdown });

export default function Hamburger() {
    const navigate = useNavigate();
    const location = useLocation();
    const [humburger, setHamburger] = useState<boolean | null>(false)

    const menu = [
        {
            menu: 'home',
            path: '/home',
            action: () => navigate('/home'),
            icon: <BsHouseFill />
        },
        {
            menu: 'about',
            path: '/about',
            action: () => navigate('/about'),
            icon: <GiFamilyHouse />
        },
        {
            menu: 'contact',
            path: '/contact',
            action: () => navigate('/contact'),
            icon: <FaPhoneVolume />
        },
        {
            menu: 'services',
            path: '/services',
            action: () => navigate('/services'),
            icon: <GrServices />
        },
    ];
    return (
        <div className="flex space-x-2">
            <div>
                <div className=' cursor-pointer sm:hidden' onClick={() => setHamburger(true)}>
                    <HamBurger />
                </div>
                <div
                    className={` ${!humburger && "invisible"} fixed overflow-y-scroll bottom-0 left-0 w-96 max-w-full top-0 z-[1045] flex-translate-x-full flex-col border-none bg-light_color bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out [&[data-te-offcanvas-show]]:transform-none`}
                    tabIndex={-1}
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                    data-te-offcanvas-init>
                    <div className=' w-[90%] m-auto relative'>
                        <div className=" w-48 h-14 mt-5">
                            <img src={logoImg} onClick={() => navigate('/home')} alt="" className="w-full h-full cursor-pointer" />
                        </div>
                        <ul className=" space-y-8 pt-10 ">
                            {menu?.map((menuItem, index) => (
                                <li
                                    onClick={menuItem.action}
                                    key={index}
                                    className={`capitalize text-primary_color flex items-center justify-between text-[20px] font-semibold pb-3 cursor-pointer border-b-2 hover:border-zinc-300 ${location.pathname === menuItem.path ? 'border-primary_color' : 'border-transparent'
                                        }`}
                                >
                                    <div className='flex items-center gap-3'>
                                        {menuItem.icon}
                                        {menuItem.menu}
                                    </div>
                                    <IoIosArrowForward />
                                </li>
                            ))}
                        </ul>
                        <div onClick={() => setHamburger(false)} className='absolute cursor-pointer top-3 right-0'>
                            <CloseIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
