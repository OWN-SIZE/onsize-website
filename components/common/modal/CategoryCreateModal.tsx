import React, { useEffect, useState } from 'react';
import { usePostCategory } from 'hooks/queries/category';
import styled from 'styled-components';
import theme from 'styles/theme';

import Modal from 'components/common/Modal';

import { Toast } from '../Toast/Toast';
import useToast from '../Toast/useToast';

import ModalPortal from './ModalPortal';

type CategoryCreateModalProps = {
  changeInputValue: string;
  updateInputValue: (input: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  onClickCategoryCreateModal: () => void;
  showToast: (message: string) => void;
};
export default function CategoryCreateModal(props: CategoryCreateModalProps) {
  const { changeInputValue, updateInputValue, inputRef, onClickCategoryCreateModal, showToast } = props;
  const { mutate } = usePostCategory(); // hook 은 늘 상위에 두자..! 안 그러면 more rendered 에러 남.
  const [isButtonActivated, setIsButtonActivated] = useState(false);
  const [isCategoryMade, setIsCategoryMade] = useState(false);
  const onClickCancel = () => {
    onClickCategoryCreateModal();
  };
  const onClickMake = () => {
    if (changeInputValue.length > 0) {
      mutate({ categoryName: changeInputValue, isPinCategory: false, image: ['1', '2', '3'] });
      onClickCategoryCreateModal();
      setIsButtonActivated(false);
      updateInputValue('');
      showToast('카테고리가 생성되었습니다.');
      setIsCategoryMade(true);
    }
  };

  //한글 글자수 제한 (서현이 것 쇽샥)
  const handleOnInput = (e: any) => {
    const {
      currentTarget: { value, maxLength },
    } = e;
    if (value.length > maxLength) {
      e.currentTarget.value = value.slice(0, maxLength);
    }
  };

  useEffect(() => {
    if (changeInputValue.length > 0) {
      setIsButtonActivated(true);
    } else {
      setIsButtonActivated(false);
    }
  }, [changeInputValue]);

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
        isButtonActivated={isButtonActivated}
      >
        <Styled.CategoryCreateModal>
          <h1>카테고리 이름</h1>
          <Styled.CategoryNameInput
            placeholder="예) 2023 위시리스트"
            maxLength={20}
            ref={inputRef}
            onChange={(e) => updateInputValue(e.target.value)}
            onInput={handleOnInput}
            autoFocus={true}
          ></Styled.CategoryNameInput>
          <h6>{changeInputValue.length > 20 ? 20 : changeInputValue.length}/20</h6>
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
    :focus {
      outline: none;
    }
    ::-webkit-input-placeholder {
      ${theme.fonts.body1};
      color: ${theme.colors.gray250};
    }
  `,
  ToastContainer: styled.div`
    position: fixed;
    bottom: 5.2rem;
    z-index: 15;

    display: flex;
    align-items: center;

    margin-left: 53.9rem;
  `,
};
