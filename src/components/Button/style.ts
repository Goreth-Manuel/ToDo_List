import styled from "styled-components";

export const Button = styled.button`
    border: none;
    margin: 10px 0;
    font-weight: bold;
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: 1.5em;
    background-color: #8515aa;
    cursor: pointer;
    transition: border-color 0.25s;
    color: rgba(255, 255, 255, 0.87);

   &:hover {
    background-color: #6d3d7d;
    }
`