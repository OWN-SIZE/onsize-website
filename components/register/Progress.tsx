import React from 'react';
import { OptionType } from 'pages/register';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';

const stepMapper = {
  '상/하의': {
    step1: '의류 선택',
    step2: '상의 입력',
    step3: '하의 입력',
  },
  상의: {
    step1: '의류 선택',
    step2: '상의 입력',
    step3: '하의 입력 (선택)',
  },
  하의: {
    step1: '의류 선택',
    step2: '하의 입력',
    step3: '상의 입력 (선택)',
  },
};

interface ProgressProps {
  progress: number;
  selectedOption: OptionType;
}

function Progress({ progress, selectedOption }: ProgressProps) {
  return (
    <Styled.Root>
      <Styled.StepsOl>
        {selectedOption && progress >= 2
          ? Object.values(stepMapper[selectedOption]).map((step, index) => (
              <Styled.StepLi key={index}>
                <Styled.StepMarker isActive={progress >= index + 1 && true}>{index + 1}</Styled.StepMarker>
                {step}
              </Styled.StepLi>
            ))
          : Object.values(stepMapper['상/하의']).map((step, index) => (
              <Styled.StepLi key={index}>
                <Styled.StepMarker isActive={progress >= index + 1 && true}>{index + 1}</Styled.StepMarker>
                {step}
              </Styled.StepLi>
            ))}
      </Styled.StepsOl>
      <Styled.ProgressBar value={0} />
    </Styled.Root>
  );
}
export default Progress;

const Styled = {
  Root: styled.div`
    width: 100%;
    margin-top: 16.2rem;
  `,
  StepsOl: styled.ol`
    display: flex;
  `,
  StepLi: styled.li`
    display: flex;
    align-items: center;
    margin-right: 9rem;
    color: ${theme.colors.gray550};
    ${theme.fonts.title4}
  `,
  StepMarker: styled.div<{ isActive?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ isActive }) =>
      isActive
        ? css`
            color: ${theme.colors.yellow};
            border: 0.3rem solid ${theme.colors.black};
            background-color: ${theme.colors.black};
          `
        : css`
            color: ${theme.colors.gray200};
            border: 0.3rem solid ${theme.colors.gray200};
          `}
    width: 4.4rem;
    height: 4.4rem;
    margin-right: 2rem;
    border-radius: 50%;
    text-align: center;
    ${theme.fonts.title3}
  `,
  ProgressBar: styled.progress`
    width: 81rem;
    height: 0rem;
    margin-top: 3.8rem;
    border: 0.2rem solid ${theme.colors.gray200};
  `,
};
