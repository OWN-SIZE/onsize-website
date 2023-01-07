import { Dispatch } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

import Modal from '../common/Modal';

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  setImgHoveredTarget: Dispatch<React.SetStateAction<string>>;
}
function ClosetDeleteModal(props: ModalProps) {
  const { isModalOpen, setIsModalOpen, setImgHoveredTarget } = props;
  const onClickCategoryCreateModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const onClickCancel = () => {
    setIsModalOpen(false);
    setImgHoveredTarget('');
  };
  const onClickMake = () => {
    console.log('모달을 만들었습니다.');
    setIsModalOpen(false);
    setImgHoveredTarget('');
  };

  return (
    <Styled.Root>
      <Modal
        onClickModal={onClickCategoryCreateModal}
        onClickLeftButton={onClickCancel}
        onClickRightButton={onClickMake}
        title="삭제"
        LeftButtonText="아니오"
        RightButtonText="예"
        width={53}
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
    z-index: 2;

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
