import { ICard } from "../../types";

export default function Card(props: ICard) {
    const { buttonText, image, title, description, isClickable, onClick } = props;

    return (
        <div className=" w-full text-white font-serif flex items-center justify-center m-auto text-center ">
            <div className={`bg-[#000000a8] p-3 pb-6 h-[55vh] w-full rounded-xl`}>
                <div className="relative h-[85%] group">
                    <img src={image.url} alt={image.alt || ""} className="w-full h-full object-cover  rounded-xl" />
                    <div className="bg-[#00000086] top-0 right-0 bottom-0 left-0 sm:hidden group-hover:flex flex items-center justify-center absolute sm:py-2 max-sm:p-8 rounded-xl">
                        <button onClick={onClick} className={`border font-mono rounded-md px-6 py-2 ${!isClickable ? "cursor-not-allowed" : "cursor-pointer"} hover:bg-[#dddddd8a]`}>
                            {buttonText}
                        </button>
                    </div>
                </div>
                <div className="pt-2 text-left font-mono text-sm capitalize">
                    <div>{title}</div>
                    <div className="text-[10px] leading-3 text-zinc-400 pt-1 ">
                        {description ? description : "stay tuned! new features rolling out soon"}
                    </div>
                </div>
            </div>
        </div>
    )
}