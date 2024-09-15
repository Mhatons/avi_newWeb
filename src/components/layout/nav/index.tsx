import { logoImg } from "../../../assets/images";
import Input from "../../common/input";

interface NavBarProps {
    setContactForm: (value: boolean) => void;
}

export default function NavBar({ setContactForm }: NavBarProps) {
    const menu = [
        'home',
        'about',
        'contact',
        'services',
    ]
    return (
        <nav className="h-16 fixed z-20 w-full bg-white flex items-center justify-between px-7">
            <div className=" w-52 h-14">
                <img src={logoImg} alt="" className="w-full h-full" />
            </div>
            <ul className=" flex items-center justify-between gap-3">
                {
                    menu?.map((menu, index) => (
                        <li onClick={() => setContactForm(true)} key={index} className=" cursor-pointer hover:italic">
                            {menu}
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