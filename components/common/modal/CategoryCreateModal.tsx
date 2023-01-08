import React from 'react';
import Layout from 'components/common/Layout';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import Modal from 'components/common/Modal';
import ModalPortal from './ModalPortal';

type CategoryCreateModalProps = {
  changeInputValue: number;
  updateInputValue: (length: number) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  onClickCategoryCreateModal: () => void;
};
export default function CategoryCreateModal(props: CategoryCreateModalProps) {
  const { changeInputValue, updateInputValue, inputRef, onClickCategoryCreateModal } = props;

  const onClickCancel = () => {
    onClickCategoryCreateModal();
  };
  const onClickMake = () => {
    console.log('모달을 만들었습니다.');
    onClickCategoryCreateModal();
  };
  return (
    <ModalPortal>
    <Modal
      onClickModal={onClickCategoryCreateModal}
      onClickLeftButton={onClickCancel}
      onClickRightButton={onClickMake}
      title="카테고리 만들기"
      leftButtonText="취소"
      rightButtonText="만들기"
      width={74}
    >
      <Styled.CategoryCreateModal>
        <h1>카테고리 이름</h1>
        <Styled.CategoryNameInput
          placeholder="예) 2023 위시리스트"
          maxLength={20}
          ref={inputRef}
          onChange={(e) => updateInputValue(e.target.value.length)}
        ></Styled.CategoryNameInput>
        <h6>{changeInputValue > 20 ? 20 : changeInputValue}/20</h6>
      </Styled.CategoryCreateModal>
    </Modal>
    </ModalPortal>
  );
}

const Styled = {
  CategoryCreateModal: styled.div`
    margin-top: 4.6rem;
    margin-bottom: 4.6rem;
    width: 62.5rem;
    height: 10.8rem;
    & > h1 {
      ${theme.fonts.title4Semibold};
      color: ${theme.colors.gray550};
      margin-bottom: 1.6rem;
    }
    & > h6 {
      ${theme.fonts.caption};
      color: ${theme.colors.gray200};
      text-align: end;
      margin-bottom: 1.4rem;
    }
  `,
  CategoryNameInput: styled.input`
    width: 62.5rem;
    height: 6.5rem;
    border-radius: 0.5rem;
    border: 0.1rem solid ${theme.colors.gray350};
    padding-left: 2.4rem;
    ${theme.fonts.body1};
    color: ${theme.colors.gray550};
    ::-webkit-input-placeholder {
      ${theme.fonts.body1};
      color: ${theme.colors.gray250};
    }
  `,
};
