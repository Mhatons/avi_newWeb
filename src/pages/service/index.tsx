import NavBar from "../../components/layout/nav";

export default function Services() {

    return (
        <div>
            <NavBar />
            <div className="pt-24">
                <div className="text-[40px] text-white font-serif flex items-center justify-center w-[60%] m-auto pt-28 ">
                    <div className="bg-[#000000a8] py-3 px-4 rounded-xl">
                        <div>Business to Business (B2B)</div>
                        <div>Business to Customer (B2C)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}