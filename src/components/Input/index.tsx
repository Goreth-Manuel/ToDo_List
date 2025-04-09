import {  InputHTMLAttributes } from "react";
import * as S from "./style"

type InputProps = InputHTMLAttributes<HTMLInputElement>
    

const Input = ({...rest}: InputProps) => {
    return(
        <>
        <S.Input {...rest} />
        </>
    )
}

export default Input
