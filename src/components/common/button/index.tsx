import { IButtonProps } from "../../../types"

export default function Button(props: IButtonProps) {
    const { classNames, buttonText, onClick } = props
    return (
        <button
            onClick={onClick}
            type="submit"
            className={`w-full ${classNames} py-3 bg-primary_color text-white rounded-lg shadow hover:bg-primary_color focus:outline-none focus:ring-2 focus:ring-primary_color`}
        >
            {buttonText}
        </button>
    )
}