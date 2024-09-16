import { useNavigate, useLocation } from "react-router-dom";
import { logoImg } from "../../../assets/images";
import Input from "../../common/input";
import Hamburger from "../../hamburger";

export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

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
        <nav className="h-16 fixed z-20 w-full bg-white flex items-center justify-between sm:px-7 px-2">
            <div className=" w-48 h-14">
                <img src={logoImg} onClick={() => navigate('/home')} alt="" className="w-full h-full cursor-pointer" />
            </div>
            <ul className=" max-sm:hidden flex items-center justify-between gap-6">
                {menu?.map((menuItem, index) => (
                    <li
                        onClick={menuItem.action}
                        key={index}
                        className={`capitalize text-primary_color cursor-pointer border-b-2 hover:border-zinc-300 ${location.pathname === menuItem.path ? 'border-primary_color' : 'border-transparent'
                            }`}
                    >
                        {menuItem.menu}
                    </li>
                ))}
            </ul>
            <div className="w-[20%] max-sm:hidden">
                <Input
                    label=""
                    name="search"
                    type="text"
                    placeholder="search"
                    classNames={"m-auto"}
                    value={''}
                    onChange={() => { }}
                />
            </div>
            <div className="sm:hidden">
                <Hamburger />
            </div>
        </nav>
    );
}
