import React from 'react';
import styled from 'styled-components';
import { info } from '../utilities/index';

const InputWrapper = styled.input`
    padding: 10px;
    width: 100%;
    margin: 5px 0 22px 0;
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #cccccc;
    transition: 0.1s ease-in border-color;
    &:focus{
        border-color: #b3b3b3;
        outline: none;
    }
`;

export const Input = React.forwardRef((props, ref) => props.label ? (<React.Fragment>
    <label>{props.label}</label>
    <InputWrapper ref={ref} {...props} />
</React.Fragment>) : (<InputWrapper {...props}/>));

const SelectWrapper = styled.select`
    padding: 10px;
    width: 100%;
    margin: 5px 0 22px 0;
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #cccccc;
    transition: 0.1s ease-in border-color;
    &:focus{
        border-color: #b3b3b3;
        outline: none;
    }
    -webkit-appearance: none;
`;

export const Select = React.forwardRef((props, ref) => props.label ? (<React.Fragment>
    <label>{props.label}</label>
    <SelectWrapper onLoad={props.onChange} ref={ref} {...props}>
        {props.options.map((option, key) => <option key={key} value={option.value}>{option.text}</option>)}
    </SelectWrapper>
</React.Fragment>) : (<SelectWrapper {...props}>{props.options.map((option, key) => <option key={key}
                                                                                            value={option.value}>{option.text}</option>)}</SelectWrapper>));

const TextAreaWrapper = styled.textarea`
    padding: 10px;
    width: 100%;
    margin: 5px 0 22px 0;
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #cccccc;
    resize: none;
    transition: 0.1s ease-in border-color;
    &:focus{
        border-color: #b3b3b3;
        outline: none;
    }
`;

export const TextArea = React.forwardRef((props, ref) => props.label ? (<React.Fragment>
    <label>{props.label}</label>
    <TextAreaWrapper ref={ref} {...props} />
</React.Fragment>) : (<TextAreaWrapper {...props}/>));

const CheckBoxInput = styled.input`
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
`;
const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #ccc;
  &:after{
      content: "";
  position: absolute;
  display: none;
  }
`;

const CheckBoxLabel = styled.label`
      display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
  &:hover ${CheckBoxInput} ~ ${CheckMark}{
      background-color: #b3b3b3;
  }
  & ${CheckBoxInput}:checked ~ ${CheckMark}{
    background-color: ${info};
   }
   & ${CheckBoxInput}:checked ~ ${CheckMark}:after{
    display: block;
   }
   & ${CheckMark}:after{
      left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
   }
`;


export const CheckBox = React.forwardRef((props, ref) => (
    <CheckBoxLabel {...props}> {props.label}
        <CheckBoxInput type='checkbox' onChange={props.onChange} ref={ref} checked={props.checked}/>
        <CheckMark/>
    </CheckBoxLabel>
));


const RadioInput = styled.input`
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
`;
const RadioMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #ccc;
    border-radius: 50%;
  &:after{
      content: "";
  position: absolute;
  display: none;
  }
`;

const RadioLabel = styled.label`
      display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
  &:hover ${RadioInput} ~ ${RadioMark}{
      background-color: #b3b3b3;
  }
  & ${RadioInput}:checked ~ ${RadioMark}{
    background-color: ${info};
   }
   & ${RadioInput}:checked ~ ${RadioMark}:after{
    display: block;
   }
   & ${RadioMark}:after{
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;   
  background: white;
   }
`;

export const Radio = React.forwardRef((props, ref) => (
    <RadioLabel {...props}> {props.label}
        <RadioInput type='radio' ref={ref} onChange={props.onChange} checked={props.checked}/>
        <RadioMark/>
    </RadioLabel>
));
