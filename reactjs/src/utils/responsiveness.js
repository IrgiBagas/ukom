import { css } from "styled-components";

const sizes ={
    mobile:629,
}

export const mobile =(props)=>{
    return css`
        @media only screen and (max-width:${sizes.mobile}px) {
            ${props}
    }
    `;
}