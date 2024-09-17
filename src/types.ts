import { ReactNode } from "react";

export interface IButtonProps {
    buttonText: string | ReactNode;
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
    classNames?: string
}

export interface ITestAreaProps {
    label: string,
    name: string,
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string
    required?: boolean
    value: string | number;
}

export interface IImage {
    url: string;
    alt?: string;
}

// card
export interface ICard {
    title: string,
    description?: string,
    image: IImage,
    buttonText: string,
    isClickable?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}