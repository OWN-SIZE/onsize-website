import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RadioClickedIcon, RadioIcon } from 'assets/icon';
import Image from 'next/image';
import { OptionType } from 'pages/register';
import styled from 'styled-components';
import theme from 'styles/theme';
import { TopSizeInput } from 'types/mySize/remote';

import { usePostMyTopSizeMutation } from '@/hooks/queries/mySize';
import NextButton from 'components/register/NextButton';

import ModalPortal from '../modal/ModalPortal';

import Alert from './Alert';

interface FormProps {
  noHeader?: boolean;
  formType: OptionType;
  isNextActive: boolean;
  setIsNextActive: (prev: boolean) => void;
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

type MeasureType = '단면' | '둘레';

type TopValidType = {
  총장: string;
  '어깨 너비': string;
  가슴: string;
};

const mutateMapper = {
  총장: 'topLength',
  '어깨 너비': 'shoulder',
  가슴: 'chest',
};

export default function SizeForm(props: FormProps) {
  const { noHeader, formType, isNextActive, setIsNextActive } = props;
  const measureList: MeasureType[] = ['단면', '둘레'];
  const [measure, setMeasure] = useState<MeasureType>('단면');
  const [isAlertActive, setIsAlertActive] = useState(false);

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldFocusError: false,
  });

  const { mutate: postMyTopSizeMutate } = usePostMyTopSizeMutation();

  const onValidTop = async (data: TopValidType) => {
    // 모든 유효성이 true이면 recoil에 저장 또는 서버에 넘기기
    setIsAlertActive(false);

    const mutateInput: TopSizeInput = {
      topLength: 0,
      shoulder: 0,
      chest: 0,
    };

    Object.entries(data).map(([key, value]) => {
      mutateInput[mutateMapper[key]] = parseFloat(value);
    });

    postMyTopSizeMutate(mutateInput);
  };

  const onValidBottom = (data: any) => {
    // 모든 유효성이 true이면 recoil에 저장 또는 서버에 넘기기
    setIsAlertActive(false);
    console.log(data);
  };

  useEffect(() => {
    // input이 하나라도 비어있지 않은 경우 다음 버튼 활성화
    watch((formObject) => {
      if (!Object.values(formObject).includes('')) {
        setIsNextActive(true);
      }
    });
  }, [watch]);

  const onClickNextButton = () => {
    setIsAlertActive(true);
  };

  return (
    <Styled.Root>
      {!noHeader && formType && <Styled.Header>{formTypeMapper[formType]} 사이즈를 입력해주세요</Styled.Header>}
      {formType === '하의' ? (
        <Styled.Form onSubmit={handleSubmit(onValidBottom)}>
          {Object.entries(bottomScopeMappper).map(([key, { min, max }]) => (
            <Styled.InputContainer key={key}>
              <label>{key}</label>
              <div>
                <Styled.Input
                  type="number"
                  step="0.1"
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
              </div>
            </Styled.InputContainer>
          ))}
          <Styled.RadioContainer>
            {measureList.map((text, index) => (
              <Styled.Radio
                key={index}
                onClick={() => {
                  setMeasure(text);
                }}
              >
                <Image
                  src={text === measure ? RadioClickedIcon : RadioIcon}
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
                {key} {measure}
              </label>
              <div>
                <Styled.Input
                  type="number"
                  step="0.1"
                  {...register(key, {
                    required: true,
                    validate: (value) =>
                      value < scope[measure].min || value > scope[measure].max
                        ? `${key} ${measure}은 최소 ${scope[measure].min}부터 최대 ${scope[measure].max}까지 입력할 수 있습니다.`
                        : true,
                  })}
                  onBlur={(e) => e.currentTarget.value && setValue(key, parseFloat(e.currentTarget.value).toFixed(1))}
                />
                cm
              </div>
            </Styled.InputContainer>
          ))}
          <NextButton isActive={isNextActive} onClick={onClickNextButton} />
        </Styled.Form>
      ) : (
        <Styled.Form onSubmit={handleSubmit(onValidTop)}>
          {Object.entries(topScopeMapper).map(([key, { min, max }]) => (
            <Styled.InputContainer key={key}>
              <label>{key}</label>
              <div>
                <Styled.Input
                  type="number"
                  step="0.1"
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
              </div>
            </Styled.InputContainer>
          ))}
          <Styled.RadioContainer>
            {measureList.map((text, index) => (
              <Styled.Radio
                key={index}
                onClick={() => {
                  setMeasure(text);
                }}
              >
                <Image
                  src={text === measure ? RadioClickedIcon : RadioIcon}
                  alt="라디오버튼 아이콘"
                  width={22}
                  height={22}
                />
                <label>{text}</label>
              </Styled.Radio>
            ))}
          </Styled.RadioContainer>
          <Styled.InputContainer>
            <label>가슴 {measure}</label>
            <div>
              <Styled.Input
                type="number"
                step="0.1"
                {...register('가슴', {
                  required: true,
                  validate: (value) =>
                    value < chestScopeMapper[measure].min || value > chestScopeMapper[measure].max
                      ? `가슴 ${measure}은 최소 ${chestScopeMapper[measure].min}부터 최대 ${chestScopeMapper[measure].max}까지 입력할 수 있습니다.`
                      : true,
                })}
                onBlur={(e) => e.currentTarget.value && setValue('가슴', parseFloat(e.currentTarget.value).toFixed(1))}
              />
              cm
            </div>
          </Styled.InputContainer>
          <NextButton isActive={isNextActive} onClick={onClickNextButton} />
        </Styled.Form>
      )}
      {isAlertActive && (
        <ModalPortal>
          <Alert
            isActive={isAlertActive}
            setIsActive={setIsAlertActive}
            message={`${Object.values({ ...errors }).shift()?.message}`}
          />
        </ModalPortal>
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
