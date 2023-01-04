import React, { use, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RadioClickedIcon, RadioIcon } from 'assets/icon';
import Image from 'next/image';
import { OptionType } from 'pages/register';
import styled from 'styled-components';
import theme from 'styles/theme';

import NextButton from 'components/register/NextButton';

interface FormProps {
  noHeader?: boolean;
  formType: OptionType;
  isNext: boolean;
  setIsNext: (prev: boolean) => void;
}

const formTypeMapper = {
  '상/하의': '상의',
  상의: '상의',
  하의: '하의',
};

// 상의 총장, 어깨너비
const topScopeMapper = {
  총장: { min: 30, max: 180 },
  '어깨 너비': { min: 25, max: 80 },
};

// 가슴
const chestScopeMapper = {
  단면: { min: 30, max: 100 },
  둘레: { min: 25, max: 80 },
};

// 하의 총장, 밑위
const bottomScopeMappper = {
  총장: { min: 80, max: 130 },
  밑위: { min: 20, max: 60 },
};

const bottomSwitchMapper = {
  허리: {
    단면: { min: 20, max: 60 },
    둘레: { min: 40, max: 120 },
  },
  허벅지: {
    단면: { min: 20, max: 60 },
    둘레: { min: 40, max: 120 },
  },
  밑단: {
    단면: { min: 10, max: 80 },
    둘레: { min: 20, max: 160 },
  },
};

type switcherType = '단면' | '둘레';

export default function SizeForm({ noHeader, formType, isNext, setIsNext }: FormProps) {
  const switchList: switcherType[] = ['단면', '둘레'];
  const [switcher, setSwitcher] = useState<switcherType>('단면');

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onValid = (data: any) => {
    // 모든 유효성이 true이면 recoil에 저장 또는 서버에 넘기기
    console.log(data);
  };

  useEffect(() => {
    // input이 비어있지 않은 경우 다음 버튼 활성화
    watch((formObject) => {
      if (!Object.values(formObject).includes('')) {
        setIsNext(true);
      }
    });
  }, [watch]);

  return (
    <Styled.Root>
      {!noHeader && formType && <Styled.Header>{formTypeMapper[formType]} 사이즈를 입력해주세요</Styled.Header>}
      {/* {errors.topLength && errors.topLength?.message} */}
      {formType === '하의' ? (
        <Styled.Form onSubmit={handleSubmit(onValid)}>
          {Object.entries(bottomScopeMappper).map(([key, { min, max }]) => (
            <Styled.InputContainer key={key}>
              <label>{key}</label>
              <span>
                <Styled.Input
                  type="number"
                  {...register(key, {
                    required: true,
                    validate: (value) =>
                      value < min || value > max
                        ? `${key}은 최소 ${min}부터 최대 ${max}까지 입력할 수 있습니다.`
                        : true,
                  })}
                  onBlur={(e) => e.currentTarget.value && setValue(key, parseFloat(e.currentTarget.value).toFixed(1))}
                />
                cm
              </span>
            </Styled.InputContainer>
          ))}
          <Styled.RadioContainer>
            {switchList.map((text, index) => (
              <Styled.Radio
                key={index}
                onClick={() => {
                  setSwitcher(text);
                }}
              >
                <Image
                  src={text === switcher ? RadioClickedIcon : RadioIcon}
                  alt="라디오버튼 아이콘"
                  width={22}
                  height={22}
                />
                <label>{text}</label>
              </Styled.Radio>
            ))}
          </Styled.RadioContainer>
          {Object.entries(bottomSwitchMapper).map(([key, scope]) => (
            <Styled.InputContainer key={key}>
              <label>
                {key} {switcher}
              </label>
              <span>
                <Styled.Input
                  type="number"
                  {...register(key, {
                    required: true,
                    validate: (value) =>
                      value < scope[switcher].min || value > scope[switcher].max
                        ? `${key} ${switcher}은 최소 ${scope[switcher].min}부터 최대 ${chestScopeMapper[switcher].max}까지 입력할 수 있습니다.`
                        : true,
                  })}
                  onBlur={(e) => e.currentTarget.value && setValue(key, parseFloat(e.currentTarget.value).toFixed(1))}
                />
                cm
              </span>
            </Styled.InputContainer>
          ))}
          <NextButton isActive={isNext} />
        </Styled.Form>
      ) : (
        <Styled.Form onSubmit={handleSubmit(onValid)}>
          {Object.entries(topScopeMapper).map(([key, { min, max }]) => (
            <Styled.InputContainer key={key}>
              <label>{key}</label>
              <span>
                <Styled.Input
                  type="number"
                  {...register(key, {
                    required: true,
                    validate: (value) =>
                      value < min || value > max
                        ? `${key}은 최소 ${min}부터 최대 ${max}까지 입력할 수 있습니다.`
                        : true,
                  })}
                  onBlur={(e) => e.currentTarget.value && setValue(key, parseFloat(e.currentTarget.value).toFixed(1))}
                />
                cm
              </span>
            </Styled.InputContainer>
          ))}
          <Styled.RadioContainer>
            {switchList.map((text, index) => (
              <Styled.Radio
                key={index}
                onClick={() => {
                  setSwitcher(text);
                }}
              >
                <Image
                  src={text === switcher ? RadioClickedIcon : RadioIcon}
                  alt="라디오버튼 아이콘"
                  width={22}
                  height={22}
                />
                <label>{text}</label>
              </Styled.Radio>
            ))}
          </Styled.RadioContainer>
          <Styled.InputContainer>
            <label>가슴 {switcher}</label>
            <span>
              <Styled.Input
                type="number"
                {...register('가슴', {
                  required: true,
                  validate: (value) =>
                    value < chestScopeMapper[switcher].min || value > chestScopeMapper[switcher].max
                      ? `가슴 ${switcher}은 최소 ${chestScopeMapper[switcher].min}부터 최대 ${chestScopeMapper[switcher].max}까지 입력할 수 있습니다.`
                      : true,
                })}
                onBlur={(e) => e.currentTarget.value && setValue('가슴', parseFloat(e.currentTarget.value).toFixed(1))}
              />
              cm
            </span>
          </Styled.InputContainer>
          <NextButton isActive={isNext} />
        </Styled.Form>
      )}
    </Styled.Root>
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
    ${theme.fonts.caption1};
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
