import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useUpdateCategory } from 'hooks/queries/category';
import { SetterOrUpdater } from 'recoil';
import styled from 'styled-components';
import theme from 'styles/theme';

import Modal from 'components/common/Modal';

import ModalPortal from '../common/modal/ModalPortal';

type ModifyCategoryModalProps = {
  onClickModifyCategoryModal: () => void;
  categoryId: string;
  setCategoryName?: Dispatch<SetStateAction<string | string[] | undefined>> | SetterOrUpdater<string>;
  categoryName?: string;
  showToast: (message: string) => void;
};

export default function ModifyCategoryModal(props: ModifyCategoryModalProps) {
  const { mutate } = useUpdateCategory();
  const [isButtonActivated, setIsButtonActivated] = useState(false);

  const { onClickModifyCategoryModal, categoryId, setCategoryName, showToast } = props;

  const inputRef = useRef(null);
  const [changeInputValue, setChangeInputValue] = useState(props.categoryName);
  const [defaultValue, setDefaultValue] = useState<undefined | string>(props.categoryName);

  const onClickCancel = () => {
    onClickModifyCategoryModal();
  };

  const onClickModify = () => {
    if (defaultValue && defaultValue.length > 0 && defaultValue !== props.categoryName) {
      mutate({ targetId: categoryId, editBody: { categoryName: defaultValue } });
      onClickModifyCategoryModal();
      setCategoryName && setCategoryName(defaultValue);
      showToast('수정되었습니다.');
    }
  };

  useEffect(() => {
    if (defaultValue && defaultValue.length > 0 && defaultValue !== props.categoryName) {
      setIsButtonActivated(true);
    } else {
      setIsButtonActivated(false);
    }
  }, [defaultValue]);

  //한글 글자수 제한 (서현이 것 쇽샥)
  const handleOnInput = (e: any) => {
    const {
      currentTarget: { value, maxLength },
    } = e;
    if (value.length > maxLength) {
      e.currentTarget.value = value.slice(0, maxLength);
    }
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
        isButtonActivated={isButtonActivated}
      >
        <Styled.CategoryModifyModal>
          <h1>카테고리 이름</h1>
          <Styled.CategoryNameInput
            placeholder="예) 2023 위시리스트"
            value={defaultValue}
            maxLength={20}
            ref={inputRef}
            onChange={(e) => {
              setDefaultValue(e.target.value);
            }}
            onInput={handleOnInput}
            autoFocus={true}
          ></Styled.CategoryNameInput>
          <h6>{defaultValue ? (defaultValue.length > 20 ? 20 : defaultValue.length) : 0}/20</h6>
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
