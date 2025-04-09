import { ChangeEvent } from "react";

interface InputProps {
    type: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({type, placeholder, onChange }: InputProps) => {
    return(
        <>
        <input type={type} placeholder={placeholder} onChange={onChange} />
        </>
    )
}

export default Input
