import { useNavigate } from "react-router-dom";
import { aboutUsImage, coashing, contactImage, teams } from "../../assets/images";
import Card from "../../components/card";
import NavBar from "../../components/layout/nav";

export default function About() {
    const navigate = useNavigate()

    const cardDetails = [
        {
            image: {
                url: teams,
                alt: "image"
            },
            title: "meet our elite team",
            buttonText: "coming soon",
        },
        {
            image: {
                url: aboutUsImage,
                alt: "image"
            },
            title: "who we are",
            buttonText: "coming soon",
        },
        {
            image: {
                url: coashing,
                alt: "image"
            },
            title: "our services",
            buttonText: "what we offer",
            isClickable: true,
            onClick: () => navigate('/services'),
            description: "checkout our services and offers"
        },
        {
            image: {
                url: contactImage,
                alt: "image"
            },
            title: "our services",
            buttonText: "contact us",
            isClickable: true,
            onClick: () => navigate('/contact'),
            description: "get in touch with us"
        },
    ]


    return (
        <div>
            <NavBar />
            <div className="pt-24 pb-10">
                <div className="sm:text-[40px] text-[22px] text-white font-serif flex items-center justify-center w-full m-auto text-center ">
                    <div className=" text-white w-full font-bold uppercase">
                        <b className="text-[#ff9d2c]">about</b> us
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:w-[90%] m-auto pt-10">
                    {
                        cardDetails.map((item, index) => (
                            <Card
                                title={item.title}
                                key={index}
                                description={item.description}
                                buttonText={item.buttonText}
                                image={item.image}
                                isClickable={item.isClickable}
                                onClick={item.onClick}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}