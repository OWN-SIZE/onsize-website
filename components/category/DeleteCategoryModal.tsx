import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

import Modal from 'components/common/Modal';

import ModalPortal from '../common/modal/ModalPortal';

type DeleteCategoryModalProps = {
  onClickDeleteCategoryModal: () => void;
};

export default function DeleteCategoryModal(props: DeleteCategoryModalProps) {
  const { onClickDeleteCategoryModal } = props;

  const onClickCancel = () => {
    onClickDeleteCategoryModal();
  };
  const onClickDelete = () => {
    onClickDeleteCategoryModal();
  };
  return (
    <ModalPortal>
      <Modal
        onClickModal={onClickDeleteCategoryModal}
        onClickLeftButton={onClickCancel}
        onClickRightButton={onClickDelete}
        title="카테고리 삭제"
        leftButtonText="아니요"
        rightButtonText="예"
        width={53}
      >
        <Styled.Alert>카테고리를 삭제하시겠습니까?</Styled.Alert>
      </Modal>
    </ModalPortal>
  );
}

const Styled = {
  Alert: styled.div`
    ${theme.fonts.caption};
    color: ${theme.colors.gray550};
    margin-top: 1.2rem;
    margin-bottom: 3rem;
    text-align: center;
    width: 53rem;
  `,
};
