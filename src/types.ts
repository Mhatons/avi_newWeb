export interface IButtonProps {
    buttonText: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    classNames?: string;
}

export interface IInputProps {
    label: string,
    name: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: 'text' | 'number' | 'email' | 'password' | 'checkbox' | 'radio'; 
    placeholder?: string
    required?: boolean
    value: string | number; 
}

export interface ITestAreaProps {
    label: string,
    name: string,
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string
    required?: boolean
    value: string | number; 
}