import React from 'react';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import styled from 'styled-components';
import theme from 'styles/theme';

interface InputProps {
  inputKey: string;
  measure?: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  valid: { min: number; max: number };
}

function SizeInput(props: InputProps) {
  const { inputKey, measure, register, setValue, valid } = props;
  const label = measure ? `${inputKey} ${measure}` : `${inputKey}`;

  return (
    <Styled.InputContainer key={inputKey}>
      <label>{label}</label>
      <div>
        <Styled.Input
          type="number"
          step="0.1"
          {...register(inputKey, {
            required: true,
            validate: (value) =>
              value < valid.min || value > valid.max
                ? `${label}은(는) 최소 ${valid.min}부터 최대 ${valid.max}까지 입력할 수 있습니다.`
                : true,
          })}
          onBlur={(e) => e.currentTarget.value && setValue(inputKey, parseFloat(e.currentTarget.value).toFixed(1))}
        />
        cm
      </div>
    </Styled.InputContainer>
  );
}

export default SizeInput;

const Styled = {
  InputContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.6rem;
    color: ${theme.colors.gray550};
    ${theme.fonts.caption1};
    &:nth-child(1),
    &:nth-child(4) {
      margin-top: 0;
    }
    div {
      display: flex;
      align-items: flex-end;
    }
  `,
  Input: styled.input`
    width: 28.5rem;
    height: 5.4rem;
    margin-right: 1rem;
    padding-left: 1.6rem;
    background: ${theme.colors.gray000};
    border: 0;
    border-radius: 0.5rem;
    color: #000000;
    ${theme.fonts.body1};
    :focus {
      outline: none;
    }
  `,
};
