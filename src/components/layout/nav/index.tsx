import { useNavigate } from "react-router-dom";
import { logoImg } from "../../../assets/images";
import Input from "../../common/input";

export default function NavBar() {
    const navigate = useNavigate()
    const menu = [
        {
            menu: 'home',
            action: () => navigate('/home')
        },
        {
            menu: 'about',
            action: () => navigate('/about'),
        },
        {
            menu: 'contact',
            action: () => navigate('/contact'),
        },
        {
            menu: 'services',
            action: () => navigate('/services'),
        },
    ]
    return (
        <nav className="h-16 fixed z-20 w-full bg-white flex items-center justify-between px-7">
            <div className=" w-52 h-14">
                <img src={logoImg} alt="" className="w-full h-full" />
            </div>
            <ul className=" flex items-center justify-between gap-3">
                {
                    menu?.map((menu, index) => (
                        <li onClick={menu.action} key={index} className=" cursor-pointer hover:font-semibold">
                            {menu.menu}
                        </li>
                    ))
                }
            </ul>
            <div className="w-[20%]">
                <Input
                    label=""
                    name="search"
                    type="text"
                    placeholder="search"
                    required
                    value={''}
                    onChange={() => { }}
                />
            </div>
        </nav>
    )
}