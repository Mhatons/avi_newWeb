import { ITestAreaProps } from "../../../types"

export default function TextArea(props: ITestAreaProps) {
    const { label, onChange, name, placeholder, required, value } = props
    return (
        <div>
            <label htmlFor="message" className="block text-gray-700">{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                className="w-full p-3 border border-gray-300 bg-light_color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_color"
                placeholder={placeholder}
                rows={4}
                required={required}
            />
        </div>
    )
}