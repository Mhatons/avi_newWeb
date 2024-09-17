import { business, customer } from "../../assets/images";
import Card from "../../components/card";
import NavBar from "../../components/layout/nav";

export default function Services() {
    const cardDetails = [
        {
            image: {
                url: business,
                alt: "image"
            },
            title: "business focus service",
            buttonText: "coming soon",
            isClickable: true,
        },
        {
            image: {
                url: customer,
                alt: "image"
            },
            title: "customer focus service",
            buttonText: "coming soon",
            isClickable: true,
        },]


    return (
        <div>
            <NavBar />
            <div className="pt-24 pb-10">
                <div className="sm:text-[40px] text-[22px] text-white font-serif flex items-center justify-center w-full m-auto text-center ">
                    <div className=" text-white w-full font-bold uppercase">
                        <b className="text-[#ff9d2c]">Our</b> Services
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-10 sm:w-[90%] m-auto pt-10">
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