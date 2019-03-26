import React from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { readableColor, darken } from 'polished';
import Icon from './Icon';
import {success, info, warning, danger, standard, elevation} from '../utilities/index';


const BUTTON_MODIFIERS = {
    success: () => `
        background-color: ${success};
        color: ${readableColor(darken(0.2,success))};
        &:hover{
            background-color: ${darken(0.1, success)};
        }
    `,
    info: () => `
        background-color: ${info};
        color: ${readableColor(darken(0.2, info))};
        &:hover{
            background-color: ${darken(0.1, info)};
        }
    `,
    warning: () => `
        background-color: ${warning};
        color: ${readableColor(darken(0.2, warning))};
        &:hover{
            background-color: ${darken(0.1, warning)};
        }
    `,
    danger: () => `
        background-color: ${danger};
        color: ${readableColor(darken(0.2,danger))};
        &:hover{
            background-color: ${darken(0.1, danger)};
        }
    `,
    basic: () => `
        background-color: transparent;
        &:hover{
          background-color: transparent;
          color: #2980b9;
        }
    `,
    inverse: () => `
        background-color: white;
        color: ${darken(0.2, standard)};
        &:hover{
            background-color: ${darken(0.1, 'white')};
        }
    `,
    xs: () => `
        font-size: 10px;
    `,
    s: () => `
        font-size: 12px;
    `,
    l: () => `
        font-size: 20px;
    `,
    xl: () => `
        font-size: 24px;
    `,
    rounded: () => `
        border-radius: 10px;
    `
};

export var Button = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px 22px;
    background-color: ${standard};  
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #333;
    ${({elevation: e}) => e && elevation[e]};
    ${({width}) => width ? 'width: ' + width + ';' : ''}
    &:hover{
        background-color: ${darken(0.1, standard)}
    }
    &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

const IconWrapper = ({icon, ...props}) => <button {...props}><Icon icon={icon} /></button>;
Button.Icon = styled(IconWrapper)`
    padding: 12px 16px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    outline: none;
        border-radius: 10px;
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const IconButtonWrapper = ({icon, children, ...props}) => <button {...props}><Icon icon={icon} /> {children}</button>;
Button.IconButton = styled(IconButtonWrapper)`
    border: none;
    cursor: pointer;
    padding: 14px 28px;
    border-radius: 10px;
    background-color: ${standard};  
    text-align: center;
    text-decoration: none;
    outline: none;
    color: ${readableColor(darken(0.2, standard))};
    ${({elevation: e}) => e && elevation[e]};
    ${({width}) => width ? 'width: ' + width + ';' : ''}
    &:hover{
        background-color: ${darken(0.1, standard)}
    }
    &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;


const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  ${elevation[2]};
  z-index: 1;
`;
const DropdownWrapper = styled.div`
     position: relative;
     display: inline-block;
     &:hover ${DropdownContent}{
        display: block;
     }
`;


Button.Dropdown = ({text, children, ...props}) => (
    <DropdownWrapper>
        <Button {...props}>{text}</Button>
        <DropdownContent>
            {children}
        </DropdownContent>
    </DropdownWrapper>
);

Button.Group = styled.div`
    display: flex;
    justify-content: stretch;
    align-items: center;
    & > *{
        margin: 5px;
    }
`;


const TooltipText = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
  &::after{
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
  }
`;
const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  &:hover ${TooltipText}{
      visibility: visible;
      opacity: 1;
  }
`;

export const Tooltip = ({tooltip, children, ...props}) => (
  <TooltipWrapper {...props}>{children}
      <TooltipText>{tooltip}</TooltipText>
  </TooltipWrapper>
);