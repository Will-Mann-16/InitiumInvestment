import styled from "styled-components";

export const Span = styled.span`
    font-weight: ${({weight}) => weight};
    ${({italic}) => italic ? 'font-style: italic;' : ''}
    ${({fontSize}) => fontSize && `font-size:${fontSize};`}
    ${({colour}) => colour && `color:${colour};`}
`;
