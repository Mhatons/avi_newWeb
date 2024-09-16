import NavBar from "../../components/layout/nav";

export default function About() {

    // const [showContactForm, setShowContactForm] = useState<boolean | null>(false);

    return (
        <div>
            <NavBar />
            <div className="pt-24">
                <div className="sm:text-[40px] text-[30px] text-white font-serif flex items-center justify-center w-[60%] m-auto text-center pt-24 ">
                    <div className="bg-[#000000a8] py-3 px-4 rounded-xl">
                        Radiant solutions, a firm specialising in technology and consultancy
                    </div>
                </div>
            </div>
        </div>
    )
}