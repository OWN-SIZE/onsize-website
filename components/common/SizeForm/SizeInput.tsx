import React, { useEffect, useState } from 'react';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import styled from 'styled-components';
import theme from 'styles/theme';

type DataType =
  | {
      [key: string]: number;
      총장: number;
      '어깨 너비': number;
      가슴: number;
    }
  | {
      [key: string]: number;
      총장: number;
      밑위: number;
      허리: number;
      허벅지: number;
      밑단: number;
    };

interface InputProps {
  inputKey: string;
  measure?: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  valid: { min: number; max: number };
  data?: DataType;
  isTopClicked?: boolean;
  formType?: string | null;
  isAlertActive?: boolean;
}

function SizeInput(props: InputProps) {
  const { inputKey, measure, register, setValue, valid, data, isTopClicked, formType, isAlertActive } = props;
  const label = measure ? `${inputKey} ${measure}` : `${inputKey}`;

  const [inputValue, setInputValue] = useState('');
  const [hasInputValueChanged, setHasInputValueChanged] = useState(false);
  useEffect(() => {
    if (!data) return;

    if (data[inputKey] === null || data[inputKey] === 0) {
      //저장된 값이 없을 때
      setInputValue('');
    } else if (!hasInputValueChanged) {
      //유저가 저장된 값을 변경한 적이 없을 때
      setInputValue(parseFloat(`${data[inputKey]}`).toFixed(1));
      setValue(inputKey, parseFloat(`${data[inputKey]}`).toFixed(1));
    } else {
      //유저가 저장된 값을 변경했을 때
      setInputValue(parseFloat(inputValue).toFixed(1));
      setValue(inputKey, parseFloat(inputValue).toFixed(1));
    }
  }, [data, inputKey, isAlertActive]);

  useEffect(() => {
    setHasInputValueChanged(false);
  }, [isTopClicked, measure]);

  useEffect(() => {
    if (!data) {
      setInputValue('');
    }
  }, [measure, formType]);

  return (
    <Styled.InputContainer key={inputKey}>
      <label>{label}</label>
      <div>
        <Styled.Input
          type="number"
          step="0.1"
          value={inputValue}
          {...register(inputKey, {
            required: true,
            validate: (value) =>
              value < valid.min || value > valid.max
                ? `${label}은(는) 최소 ${valid.min}부터 최대 ${valid.max}까지 입력할 수 있습니다.`
                : true,
          })}
          onBlur={(e) => e.currentTarget.value && setValue(inputKey, parseFloat(e.currentTarget.value).toFixed(1))}
          onChange={(e) => {
            setInputValue(e.target.value);
            setHasInputValueChanged(true);
          }}
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
