import React, { ReactNode, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import theme from 'styles/theme';
import { BottomSizeInput, TopSizeInput } from 'types/mySize/client';

import { OptionType } from '@/components/register/Register';
import { usePostMyBottomSize, usePostMyTopSize } from '@/hooks/business/mySize';

import ModalPortal from '../modal/ModalPortal';

import Alert from './Alert';
import RadioButton from './RadioButton';
import SizeInput from './SizeInput';

interface FormProps {
  progress?: number;
  noHeader?: boolean;
  formType: OptionType;
  isAlertActive: boolean;
  setIsAlertActive: (prev: boolean) => void;
  setIsSubmitActive?: (prev: boolean) => void;
  onSuccessSubmit: () => void;
  children: ReactNode;
  // 사이즈 입력이 선택인 경우
  isOption?: boolean;
  skip?: boolean;
  setSkip?: (prev: boolean) => void;
  onClickMeasure?: (measure: string) => void;
  data?:
    | { 총장: number; '어깨 너비': number; 가슴: number }
    | { 총장: number; 밑위: number; 허리: number; 허벅지: number; 밑단: number };
  isTopClicked?: boolean;
  emptyClothesType?: string;
  isInitialValueWidth?: boolean;
  selectedOption?: OptionType;
}

// 상의 총장, 어깨너비
const topScopeMapper = {
  총장: { min: 30, max: 180 },
  '어깨 너비': { min: 25, max: 80 },
};

// 가슴
const chestScopeMapper = {
  단면: { min: 30, max: 100 },
  둘레: { min: 60, max: 200 },
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

const mutateMapper = {
  top: {
    총장: 'topLength',
    '어깨 너비': 'shoulder',
    가슴: 'chest',
  },
  bottom: {
    총장: 'bottomLength',
    밑위: 'rise',
    허리: 'waist',
    허벅지: 'thigh',
    밑단: 'hem',
  },
};

export default function SizeForm(props: FormProps) {
  const {
    progress,
    noHeader,
    formType,
    setIsSubmitActive,
    children,
    isAlertActive,
    setIsAlertActive,
    onSuccessSubmit,
    isOption,
    skip,
    setSkip,
    onClickMeasure,
    data,
    isTopClicked,
    emptyClothesType,
    isInitialValueWidth,
    selectedOption,
  } = props;
  const [measure, setMeasure] = useState<'단면' | '둘레'>('단면');

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<FieldValues>({
    shouldFocusError: false,
    defaultValues: data,
  });

  const { postMyTopSize } = usePostMyTopSize();
  const { postMyBottomSize } = usePostMyBottomSize();

  const onValid: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    setIsAlertActive(false);
    if (formType === '상의') {
      const inputData: TopSizeInput = {
        topLength: 0,
        shoulder: 0,
        chest: 0,
        isWidthOfTop: true,
        isAlreadyUser: 'pending',
      };

      Object.entries(mutateMapper.top).map(([kor, eng]) => {
        inputData[eng] = parseFloat(data[kor]);
      });

      if (measure === '둘레') {
        inputData.isWidthOfTop = false;
      }

      if (selectedOption !== '상/하의' && progress === 2) {
        inputData.isAlreadyUser = 'done';
      }

      if (progress === 3) {
        inputData.isAlreadyUser = 'done';
      }

      postMyTopSize(inputData, () => {
        Object.keys(mutateMapper.top).map((key) => resetField(key));
        onSuccessSubmit();
      });
    } else {
      const inputData: BottomSizeInput = {
        bottomLength: 0,
        waist: 0,
        thigh: 0,
        rise: 0,
        hem: 0,
        isWidthOfBottom: true,
        isAlreadyUser: 'pending',
      };

      Object.entries(mutateMapper.bottom).map(([kor, eng]) => {
        inputData[eng] = Number(parseFloat(data[kor]).toFixed(1));
      });

      if (measure === '둘레') {
        inputData.isWidthOfBottom = false;
      }

      if (selectedOption !== '상/하의' && progress === 2) {
        inputData.isAlreadyUser = 'done';
      }
      if (progress === 3) {
        inputData.isAlreadyUser = 'done';
      }

      postMyBottomSize(inputData, () => {
        Object.keys(mutateMapper.bottom).map((key) => resetField(key));
        onSuccessSubmit();
      });
    }
  };

  useEffect(() => {
    watch((formObject) => {
      if (!Object.values(formObject).includes('')) {
        // input이 다 채워졌으면 다음 버튼 활성화
        setSkip && setSkip(false);
        setIsSubmitActive && setIsSubmitActive(true);
      } else if (Object.values(formObject).filter((value) => value !== undefined && value !== '').length) {
        // 하나라도 입력했다면 스킵 못함
        setSkip && setSkip(false);
        setIsSubmitActive && setIsSubmitActive(false);
      } else {
        setSkip && setSkip(false);
        setIsSubmitActive && setIsSubmitActive(true);
      }
    });
  }, [watch]);

  useEffect(() => {
    if (isOption) {
      setIsSubmitActive && setIsSubmitActive(true);
      setSkip && setSkip(true);
    } else {
      setSkip && setSkip(false);
    }
  }, [progress, isOption]);

  const sendMeasureValue = (measure: string) => {
    onClickMeasure && onClickMeasure(measure);
  };

  //마이사이즈 단면 / 둘레 최초 활성화
  useEffect(() => {
    if (isInitialValueWidth) {
      setMeasure('단면');
      sendMeasureValue('단면');
    } else if (isInitialValueWidth === false) {
      setMeasure('둘레');
      sendMeasureValue('둘레');
    } else {
      setMeasure('단면');
      sendMeasureValue('단면');
    }
  }, [isTopClicked, formType, isInitialValueWidth]);

  return (
    <Styled.Root>
      {!noHeader && formType && <Styled.Header>{formType} 사이즈를 입력해주세요</Styled.Header>}
      {formType === '하의' ? (
        // 하의 사이즈 입력 폼
        <Styled.Form onSubmit={handleSubmit(onValid)}>
          {Object.entries(bottomScopeMappper).map(([key, { min, max }]) => (
            <SizeInput
              key={key}
              inputKey={key}
              register={register}
              setValue={setValue}
              valid={{ min, max }}
              data={data}
              isTopClicked={isTopClicked}
              formType={formType}
              isAlertActive={isAlertActive}
              emptyClothesType={emptyClothesType}
            />
          ))}
          <Styled.RadioContainer>
            <RadioButton
              onClick={() => {
                setMeasure('단면');
                sendMeasureValue('단면');
              }}
              label="단면"
              isClicked={measure === '단면'}
            />
            <RadioButton
              onClick={() => {
                setMeasure('둘레');
                sendMeasureValue('둘레');
              }}
              label="둘레"
              isClicked={measure === '둘레'}
            />
          </Styled.RadioContainer>
          {Object.entries(bottomSwitchMapper).map(([key, scope]) => (
            <SizeInput
              key={key}
              inputKey={key}
              register={register}
              setValue={setValue}
              measure={measure}
              valid={{ min: scope[measure].min, max: scope[measure].max }}
              data={data}
              isTopClicked={isTopClicked}
              isAlertActive={isAlertActive}
              emptyClothesType={emptyClothesType}
            />
          ))}
          {children}
        </Styled.Form>
      ) : (
        // 상의 사이즈 입력 폼
        <Styled.Form onSubmit={handleSubmit(onValid)}>
          {Object.entries(topScopeMapper).map(([key, { min, max }]) => (
            <SizeInput
              key={key}
              inputKey={key}
              register={register}
              setValue={setValue}
              valid={{ min, max }}
              data={data}
              isTopClicked={isTopClicked}
              formType={formType}
              isAlertActive={isAlertActive}
              emptyClothesType={emptyClothesType}
            />
          ))}
          <Styled.RadioContainer>
            <RadioButton
              onClick={() => {
                setMeasure('단면');
                sendMeasureValue('단면');
              }}
              label="단면"
              isClicked={measure === '단면'}
            />
            <RadioButton
              onClick={() => {
                setMeasure('둘레');
                sendMeasureValue('둘레');
              }}
              label="둘레"
              isClicked={measure === '둘레'}
            />
          </Styled.RadioContainer>
          <SizeInput
            inputKey={'가슴'}
            register={register}
            setValue={setValue}
            measure={measure}
            valid={{ min: chestScopeMapper[measure].min, max: chestScopeMapper[measure].max }}
            data={data}
            isTopClicked={isTopClicked}
            isAlertActive={isAlertActive}
            emptyClothesType={emptyClothesType}
          />
          {children}
        </Styled.Form>
      )}
      {isAlertActive && (
        <ModalPortal>
          <Alert setIsActive={setIsAlertActive} message={`${Object.values({ ...errors }).shift()?.message}`} />
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
  RadioContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4.8rem;
    margin-bottom: 3.6rem;
    color: ${theme.colors.gray550};
    ${theme.fonts.caption1}
  `,
};
