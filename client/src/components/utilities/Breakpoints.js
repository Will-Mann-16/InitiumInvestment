import { css } from 'styled-components';

const breakpoints = {
    tablet: 768
}

export const mediaAbove = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px){
        ${css(...args)}
    }
    `;
    return acc;
}, {});
export const mediaBelow = Object.keys(breakpoints).reduce((acc, label) => {
        acc[label] = (...args) => css`
        @media (max-width: ${breakpoints[label]}px){
            ${css(...args)}
        }
        `;
        return acc;
}, {});