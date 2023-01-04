import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RadioClickedIcon, RadioIcon } from 'assets/icon';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

export default function TopSizeForm() {
  const { register, watch, handleSubmit, formState, setError } = useForm();
  const onValid = (data: any) => {
    // 모든 유효성이 true이면 호출
    console.log(data);
  };
  const { errors } = formState;
  return (
    <Styled.Form onSubmit={handleSubmit(onValid)}>
      <Styled.InputContainer>
        {/* {errors.topLength && errors.message} */}
        총장
        <span>
          <Styled.Input
            type="number"
            {...register('topLength', {
              required: '총장은 80부터 130',
              min: 80,
              max: 130,
            })}
            // onChange={(e) => {
            //   setLength(e.target.value);
            // }}
            //onBlur={() => setLength(parseFloat(length).toFixed(1))}
          />
          <label>cm</label>
        </span>
      </Styled.InputContainer>
      <Styled.InputContainer>
        어깨너비
        <span>
          <Styled.Input type="number" />
          <label>cm</label>
        </span>
      </Styled.InputContainer>
      <Styled.RadioContainer>
        <Styled.Radio>
          <Image src={RadioClickedIcon} alt="라디오버튼 아이콘" width={22} height={22} />
          <label>단면</label>
        </Styled.Radio>
        <Styled.Radio>
          <Image src={RadioIcon} alt="라디오버튼 아이콘" width={22} height={22} />
          <label>둘레</label>
        </Styled.Radio>
      </Styled.RadioContainer>
      <Styled.InputContainer>
        가슴 단면
        <span>
          <Styled.Input type="text" />
          <label>cm</label>
        </span>
      </Styled.InputContainer>
    </Styled.Form>
  );
}
const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 46.2rem;
  `,
  Header: styled.h1`
    margin-top: 5.3rem;
    margin-bottom: 3.8rem;
    color: ${theme.colors.gray550};
    ${theme.fonts.title4};
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
  `,
  InputContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.6rem;
    color: ${theme.colors.gray550};
    ${theme.fonts.caption1}
    > span {
      display: flex;
    }
    &:nth-child(1),
    &:nth-child(4) {
      margin-top: 0;
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
  RadioContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4.8rem;
    margin-bottom: 3.6rem;
    color: ${theme.colors.gray550};
    ${theme.fonts.caption1}
  `,
  Radio: styled.span`
    display: flex;
    align-items: center;
    margin-right: 3rem;
    cursor: pointer;
    > label {
      margin-left: 0.8rem;
    }
  `,
};
