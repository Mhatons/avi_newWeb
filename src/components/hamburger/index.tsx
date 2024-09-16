// import { Offcanvas, Ripple, Dropdown } from "tw-elements";
import { useLocation, useNavigate } from 'react-router-dom';
import { CloseIcon, HamBurger } from '../../assets/svg';
import { useState } from 'react';

// initTE({ Offcanvas, Ripple, Dropdown });

export default function Hamburger() {
    const navigate = useNavigate();
    const location = useLocation();
    const [humburger, setHamburger] = useState<boolean | null>(false)

    const menu = [
        {
            menu: 'home',
            path: '/home',
            action: () => navigate('/home')
        },
        {
            menu: 'about',
            path: '/about',
            action: () => navigate('/about'),
        },
        {
            menu: 'contact',
            path: '/contact',
            action: () => navigate('/contact'),
        },
        {
            menu: 'services',
            path: '/services',
            action: () => navigate('/services'),
        },
    ];
    return (
        <div className="flex space-x-2">
            <div>
                <div className=' cursor-pointer sm:hidden' onClick={() => setHamburger(true)}>
                    <HamBurger />
                </div>
                <div
                    className={` ${!humburger && "invisible"} fixed overflow-y-scroll bottom-0 left-0 w-96 max-w-full top-0 z-[1045] flex-translate-x-full flex-col border-none bg-light_color bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-darkModeLight dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none`}
                    tabIndex={-1}
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                    data-te-offcanvas-init>
                    <div className=' w-[90%] m-auto pt-16 relative'>
                        <ul className=" space-y-8">
                            {menu?.map((menuItem, index) => (
                                <li
                                    onClick={menuItem.action}
                                    key={index}
                                    className={`capitalize text-primary_color font-semibold pb-3 cursor-pointer border-b-2 hover:border-zinc-300 ${location.pathname === menuItem.path ? 'border-primary_color' : 'border-transparent'
                                        }`}
                                >
                                    {menuItem.menu}
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
