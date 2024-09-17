import { coashing, code, payment, research, sampleBg, teams, work } from "../../assets/images";
import Card from "../../components/card";
import NavBar from "../../components/layout/nav";

export default function Home() {

    const cardDetails = [
        {
            image: {
                url: sampleBg,
                alt: "image"
            },
            title: "Project management",
            buttonText: "coming soon",
            isClickable: true
        },
        {
            image: {
                url: code,
                alt: "image"
            },
            title: "tech stacks",
            buttonText: "coming soon",
            isClickable: true
        },
        {
            image: {
                url: coashing,
                alt: "image"
            },
            title: "customer relationship skills",
            buttonText: "coming soon",
            isClickable: true
        },
        {
            image: {
                url: research,
                alt: "image"
            },
            title: "life changing research",
            buttonText: "coming soon",
            isClickable: true
        },
        {
            image: {
                url: teams,
                alt: "image"
            },
            title: "team bonding & networking",
            buttonText: "coming soon",
            isClickable: true
        },
        {
            image: {
                url: work,
                alt: "image"
            },
            title: "flexible working hours",
            buttonText: "coming soon",
            isClickable: true
        },
        {
            image: {
                url: payment,
                alt: "image"
            },
            title: "pay in instalments",
            buttonText: "coming soon",
            isClickable: true
        },
    ]

    return (
        <div>
            <NavBar />
            <div className="pt-24 pb-10">
                <div className="sm:text-[40px] text-[20px] text-white font-serif flex items-center justify-center w-full m-auto text-center ">
                    <div className=" text-white w-full font-bold uppercase">
                        <b className="text-[#ff9d2c]">welcome to</b> radiant solutions
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:w-[90%] m-auto pt-10">
                    {
                        cardDetails.map((item, index) => (
                            <Card
                                title={item.title}
                                key={index}
                                description=""
                                buttonText={item.buttonText}
                                image={item.image}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}