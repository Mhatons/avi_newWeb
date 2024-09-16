import { IInputProps } from "../../../types";

export default function Input(props: IInputProps) {
    const { label, onChange, name, type, placeholder, required, value } = props
    return (
        <div>
            <label htmlFor="name" className="block text-gray-700">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_color"
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}