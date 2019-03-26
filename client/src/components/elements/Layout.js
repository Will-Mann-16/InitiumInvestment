import styled from "styled-components";

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: #e9ebf2;
`;
export const Container = styled.div`
    max-width: 960px;
    margin: auto;
    margin-top: 70px;
`;
export const Navbar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: space-between;
        	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
        	height: 60px;
`;
export const Flex = styled.div`
    display: flex;
    ${({alignItems}) => alignItems && `align-items: ${alignItems};`}
    ${({justifyContent}) => justifyContent && `justify-content: ${justifyContent};`}
    ${({direction}) => direction && `flex-direction: ${direction};`}
    ${({wrap}) => wrap && `flex-wrap: ${wrap};`}
    ${({alignContent}) => alignContent && `align-content: ${alignContent};`}
    ${({equalWidth}) => equalWidth && `& > *{ flex: 1 1 0; }`}
    ${({equalWidth, wrap, alignItems, justifyContent, direction}) => wrap === 'wrap' && equalWidth && `
        @media screen and (max-width: 768px){
            flex-direction: ${direction === 'column' ? 'row': 'column'};
            align-items: ${justifyContent};
            justify-content: ${alignItems};
            flex-wrap: no-wrap;
        }
    `}
    & > * {
        ${({padding}) => padding && `padding: ${padding};`}
        ${({margin}) => margin && `margin: ${margin};`}
    }
`;