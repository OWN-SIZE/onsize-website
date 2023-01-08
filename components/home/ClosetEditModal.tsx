import { ChangeEvent, Dispatch, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

import { updateAllClosetProduct } from '@/apis/allCloset';

interface ModalProps {
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  setImgHoveredTarget: Dispatch<React.SetStateAction<string>>;
  data: {
    id: string;
    productName: string;
    size?: string;
    memo?: string;
  };
}

function ClosetEditModal(props: ModalProps) {
  const { setIsModalOpen, setImgHoveredTarget, data } = props;

  const [productNameInput, setProductNameInput] = useState(data.productName);
  const [sizeInput, setSizeInput] = useState(!data.size ? '' : data.size);
  const [memoInput, setMemoInput] = useState(!data.memo ? '' : data.memo);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value;

    switch (e.currentTarget.id) {
      case 'productName':
        setProductNameInput(newValue);
        break;

      case 'size':
        setSizeInput(newValue);
        break;

      case 'memo':
        setMemoInput(newValue);
        break;

      default:
        break;
    }
  };

  const handleOnInput = (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => {
    const {
      currentTarget: { value, maxLength },
    } = e;
    if (value.length > maxLength) {
      e.currentTarget.value = value.slice(0, maxLength);
    }
  };

  const handleCloseOnClick = () => {
    setIsModalOpen(false);
    setImgHoveredTarget('');
  };

  const handleSubmitOnClick = () => {
    const updateData = updateAllClosetProduct({
      productId: data.id,
      editBody: { productName: productNameInput, size: sizeInput, memo: memoInput, isPin: false },
    });
    handleCloseOnClick();
    console.log(updateData);
  };

  return (
    <Styled.Root>
      <Styled.ModalContainer>
        <Styled.Title>수정하기</Styled.Title>

        <Styled.InputForm>
          <Styled.InputContainer className="productName">
            <Styled.InputTitle>의류명</Styled.InputTitle>
            <Styled.Input
              type="text"
              id="productName"
              value={productNameInput}
              maxLength={36}
              onChange={handleOnChange}
              onInput={handleOnInput}
            ></Styled.Input>
            <Styled.TextCount>{`${productNameInput.length}/36`}</Styled.TextCount>
          </Styled.InputContainer>

          <Styled.InputContainer className="size">
            <Styled.InputTitle>사이즈</Styled.InputTitle>
            <Styled.Input
              type="text"
              id="size"
              value={sizeInput}
              maxLength={4}
              onChange={handleOnChange}
              onInput={handleOnInput}
            />
            <Styled.TextCount>{`${sizeInput.length}/4`}</Styled.TextCount>
          </Styled.InputContainer>

          <Styled.InputContainer className="memo">
            <Styled.InputTitle>메모</Styled.InputTitle>
            <textarea id="memo" value={memoInput} maxLength={50} onChange={handleOnChange} onInput={handleOnInput} />
            <Styled.TextCount>{`${memoInput.length}/50`}</Styled.TextCount>
          </Styled.InputContainer>
        </Styled.InputForm>

        <Styled.ButtonContainer>
          <Styled.SubmitButton onClick={handleCloseOnClick}>취소</Styled.SubmitButton>
          <Styled.SubmitButton
            onClick={handleSubmitOnClick}
            className={
              productNameInput === data.productName && sizeInput === data.size && memoInput === data.memo
                ? 'disabled'
                : 'abled'
            }
          >
            수정
          </Styled.SubmitButton>
        </Styled.ButtonContainer>
      </Styled.ModalContainer>
    </Styled.Root>
  );
}

export default ClosetEditModal;

const Styled = {
  Root: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    top: 0;
    z-index: 3;

    width: 100vw;
    height: 100vh;

    background-color: ${theme.colors.card_hover};
  `,
  ModalContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 76rem;
    height: 76rem;

    background: ${theme.colors.gray000};
    border-radius: 1rem;
  `,
  Title: styled.header`
    margin-top: 4.8rem;

    ${theme.fonts.title2};
    color: ${theme.colors.gray550};

    margin-bottom: 4.5rem;
  `,
  InputForm: styled.form`
    width: 62.5rem;
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    & > textarea {
      width: 62.5rem;
      height: 14rem;

      border: none;
      border: 0.1rem solid ${theme.colors.gray250};
      border-radius: 0.5rem;
      resize: none;

      ${theme.fonts.body1};
      color: ${theme.colors.gray550};

      margin-top: 1.6rem;
      padding: 2rem 2.4rem;
    }

    &.productName {
      margin-bottom: 0.8rem;
    }
    &.size {
      margin-bottom: 0.7rem;
    }
  `,
  InputTitle: styled.h1`
    ${theme.fonts.title4Semibold};
    color: ${theme.colors.gray550};
  `,
  Input: styled.input`
    display: block;

    width: 62.5rem;
    border: 0.1rem solid ${theme.colors.gray250};
    border-radius: 0.5rem;

    ${theme.fonts.body1};
    color: ${theme.colors.gray550};

    margin-top: 1.6rem;
    padding: 2rem 2.4rem;

    &#productName {
      height: 6.5rem;
    }
    &#size {
      height: 7rem;
    }
    &#memo {
      height: 14rem;
    }
  `,
  TextCount: styled.span`
    height: 3.2rem;

    margin-left: auto;

    ${theme.fonts.caption};
    color: ${theme.colors.gray300};
  `,
  ButtonContainer: styled.div`
    display: flex;
  `,
  SubmitButton: styled.button`
    width: 15rem;
    height: 5rem;

    border: none;
    border-radius: 0.5rem;

    ${theme.fonts.title4Semibold};
    color: ${theme.colors.gray000};
    background-color: ${theme.colors.gray200};

    margin: 1.5rem 1.8rem;

    cursor: pointer;

    &.abled {
      background-color: ${theme.colors.black};
    }
  `,
};
