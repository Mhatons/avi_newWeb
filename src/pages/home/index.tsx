import NavBar from "../../components/layout/nav";

export default function Home() {

    return (
        <div>
            <NavBar />
            <div className="pt-24">
                <div className="text-[60px] text-white font-serif flex items-center justify-center w-[60%] m-auto text-center pt-24 ">
                    <div className="bg-[#000000a8] py-2">
                        welcome to radiant solutions
                    </div>
                </div>
            </div>
        </div>
    )
}