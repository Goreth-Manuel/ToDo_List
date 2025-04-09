import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    form {
        display: flex;
        flex-direction: column;
        margin: 0 auto;

        width: 100%;
        max-width: 500px;
    }
    ul {
        padding: 0;
    }

    ul li {
        padding: 5px 0;
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        font-size: 20px;
    }
    
`

export const Icons = styled.div`
    display: flex;
    justify-content: space-between;

    > :first-child {
        margin-right: 16px;
    }
    `
export const Icon = styled.div`
`