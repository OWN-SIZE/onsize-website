import React from 'react';
import Modal from 'components/common/Modal';
import ModalPortal from '../common/modal/ModalPortal';
import styled from 'styled-components';
import theme from 'styles/theme';

type DeleteCategoryModalProps = {
  onClickDeleteCategoryModal: () => void;
};

export default function DeleteCategoryModal(props: DeleteCategoryModalProps) {
  const { onClickDeleteCategoryModal } = props;

  const onClickCancel = () => {
    onClickDeleteCategoryModal();
  };
  const onClickDelete = () => {
    console.log('모달을 삭제했습니다.');
    onClickDeleteCategoryModal();
  };
  return (
    <ModalPortal>
      <Modal
        onClickModal={onClickDeleteCategoryModal}
        onClickLeftButton={onClickCancel}
        onClickRightButton={onClickDelete}
        title="카테고리 삭제"
        LeftButtonText="아니요"
        RightButtonText="예"
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
