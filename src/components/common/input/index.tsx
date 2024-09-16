import { RequiredIcon } from "../../../assets/svg";
import { IInputProps } from "../../../types";

export default function Input(props: IInputProps) {
    const { label, onChange, name, type, placeholder, required, value, classNames } = props
    return (
        <div>
            <label htmlFor="name" className={`${!classNames ? "mt-4" : ""} text-gray-700 flex items-center gap-1`}>
                {label}
                {required && <RequiredIcon />}
                </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full p-3 border border-gray-300 rounded-lg bg-[#F4F4F5] focus:outline-none focus:ring-2 focus:ring-primary_color`}
                placeholder={placeholder}
            />
        </div>
    )
}