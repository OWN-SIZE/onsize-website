import React, { useRef, useState } from 'react';
import Modal from 'components/common/Modal';
import ModalPortal from '../common/modal/ModalPortal';
import styled from 'styled-components';
import theme from 'styles/theme';
import { useUpdateCategory } from 'hooks/queries/category';

type ModifyCategoryModalProps = {
  onClickModifyCategoryModal: () => void;
  categoryId: string;
};

export default function ModifyCategoryModal(props: ModifyCategoryModalProps) {
  const { mutate } = useUpdateCategory();

  const { onClickModifyCategoryModal, categoryId } = props;

  const onClickCancel = () => {
    onClickModifyCategoryModal();
  };
  const onClickModify = () => {
    mutate({ categoryId: categoryId, categoryName: changeInputValue }); 
    onClickModifyCategoryModal();
  };

  const inputRef = useRef(null);
  const [changeInputValue, setChangeInputValue] = useState('d');
  const updateInputValue = (input: string) => {
    setChangeInputValue(input);
  };

  return (
    <ModalPortal>
      <Modal
        onClickModal={onClickModifyCategoryModal}
        onClickLeftButton={onClickCancel}
        onClickRightButton={onClickModify}
        title="카테고리 수정"
        leftButtonText="취소"
        rightButtonText="수정"
        width={74.3}
      >
        <Styled.CategoryModifyModal>
          <h1>카테고리 이름</h1>
          <Styled.CategoryNameInput
            placeholder="예) 2023 위시리스트"
            maxLength={20}
            ref={inputRef}
            onChange={(e) => updateInputValue(e.target.value)}
          ></Styled.CategoryNameInput>
          <h6>{changeInputValue.length > 20 ? 20 : changeInputValue.length}/20</h6>
        </Styled.CategoryModifyModal>
      </Modal>
    </ModalPortal>
  );
}

const Styled = {
  CategoryModifyModal: styled.div`
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
