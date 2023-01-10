import React from 'react';
import { RadioClickedIcon, RadioIcon } from 'assets/icon';
import Image from 'next/image';
import styled from 'styled-components';

interface RadioProps {
  isClicked: boolean;
  label: string;
  onClick: () => void;
}

function RadioButton(props: RadioProps) {
  const { isClicked, label, onClick } = props;

  return (
    <Styled.Radio onClick={onClick}>
      <Image src={isClicked ? RadioClickedIcon : RadioIcon} alt="라디오버튼 아이콘" width={22} height={22} />
      <label>{label}</label>
    </Styled.Radio>
  );
}

export default RadioButton;

const Styled = {
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
