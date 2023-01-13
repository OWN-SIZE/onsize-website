import { Dispatch, useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

import { useDeleteAllClosetProductMutation } from '@/hooks/queries/allCloset';

import Modal from '../common/Modal';

interface ModalProps {
  productId: string;
  page: string;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  setImgHoveredTarget: Dispatch<React.SetStateAction<string>>;
  showToast: (message: string) => void;
}
function ClosetDeleteModal(props: ModalProps) {
  const { isModalOpen, setIsModalOpen, setImgHoveredTarget, productId, showToast } = props;

  const { mutate: deleteClosetProduct } = useDeleteAllClosetProductMutation();

  const [isButtonActivated, setIsButtonActivated] = useState(true);


  const onClickCategoryCreateModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClickCancel = () => {
    setIsModalOpen(false);
    setImgHoveredTarget('');
  };

  const onClickMake = () => {
    deleteClosetProduct(productId);
    setIsModalOpen(false);
    setImgHoveredTarget('');
    showToast('삭제되었습니다');
  };
  return (
    <Styled.Root>
      <Modal
        onClickModal={onClickCategoryCreateModal}
        onClickLeftButton={onClickCancel}
        onClickRightButton={onClickMake}
        title="삭제"
        leftButtonText="아니오"
        rightButtonText="예"
        width={53}
        isButtonActivated={isButtonActivated}
      >
        <Styled.Content>나의 옷장에서 삭제하시겠습니까?</Styled.Content>
      </Modal>
    </Styled.Root>
  );
}
export default ClosetDeleteModal;
const Styled = {
  Root: styled.div`
    position: absolute;
    top: 0;
    z-index: 3;
    width: 100vw;
    height: 100vh;
  `,
  Content: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 3.2rem;
    margin: 1.2rem 0 3rem;
    ${theme.fonts.caption};
    color: ${theme.colors.gray550};
  `,
};
