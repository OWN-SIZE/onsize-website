import React from 'react';
import { useDeleteCategory, useFetchAllCategory } from 'hooks/queries/category';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from 'styles/theme';

import Modal from 'components/common/Modal';

import ModalPortal from '../common/modal/ModalPortal';

type DeleteCategoryModalProps = {
  onClickDeleteCategoryModal: () => void;
  deletedCategoryId: number;
};

export default function DeleteCategoryModal(props: DeleteCategoryModalProps) {
  const { onClickDeleteCategoryModal, deletedCategoryId } = props;
  const { mutate } = useDeleteCategory(); // hook 은 늘 상위에 두자..! 안 그러면 more rendered 에러 남.
  const router = useRouter();

  const onClickCancel = () => {
    onClickDeleteCategoryModal();
  };
  const onClickDelete = () => {
    onClickDeleteCategoryModal();
    mutate(deletedCategoryId);
    
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
