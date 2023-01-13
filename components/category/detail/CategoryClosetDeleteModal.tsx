import { Dispatch, useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

import Modal from '@/components/common/Modal';
import { useDeleteCategoryClosetProductMutation } from '@/hooks/queries/allCloset';

interface ModalProps {
  productId: string;
  categoryId: string;
  page: string;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  setImgHoveredTarget: Dispatch<React.SetStateAction<string>>;
  showToast?: (message: string) => void;
}
function CategoryClosetDeleteModal(props: ModalProps) {
  const { isModalOpen, setIsModalOpen, setImgHoveredTarget, productId, categoryId, showToast } = props;

  const [isButtonActivated, setIsButtonActivated] = useState(true);

  const onClickCategoryCreateModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const onClickCancel = () => {
    setIsModalOpen(false);
    setImgHoveredTarget('');
  };

  const { mutate: deleteClosetProduct } = useDeleteCategoryClosetProductMutation(categoryId);
  const onClickMake = () => {
    deleteClosetProduct({ categoryId: categoryId, productId: productId });
    setIsModalOpen(false);
    setImgHoveredTarget('');
    if (showToast) showToast('삭제되었습니다');
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
        <Styled.Content>카테고리에서 삭제하시겠습니까?</Styled.Content>
      </Modal>
    </Styled.Root>
  );
}
export default CategoryClosetDeleteModal;
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
