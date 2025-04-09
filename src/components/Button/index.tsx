import { ReactNode, ButtonHTMLAttributes } from "react";
// import { Button } from "./style"
import * as S from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
} 

const Button = ({children, ...rest}: ButtonProps) => {
    return (
        <>
        <S.Button {...rest}>{children}</S.Button>
        </>
    )
}
export default Button;