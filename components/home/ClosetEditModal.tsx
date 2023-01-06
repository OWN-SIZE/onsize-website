import { ChangeEvent, Dispatch, FormEvent, useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

interface ModalProps {
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

function ClosetEditModal(props: ModalProps) {
  const { setIsModalOpen } = props;

  const [productNameCount, setProductNameCount] = useState(0);
  const [sizeCount, setSizeCount] = useState(0);
  const [memoCount, setMemoCount] = useState(0);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const length = e.currentTarget.value.length;

    switch (e.currentTarget.id) {
      case 'productName':
        setProductNameCount(length);
        break;

      case 'size':
        setSizeCount(length);
        break;

      case 'memo':
        setMemoCount(length);
        break;

      default:
        break;
    }
  };

  const handleOnInput = (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value.length > e.currentTarget.maxLength) {
      e.currentTarget.value = e.currentTarget.value.slice(0, e.currentTarget.maxLength);
    }
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
              maxLength={36}
              onChange={handleOnChange}
              onInput={handleOnInput}
            ></Styled.Input>
            <Styled.TextCount>{`${String(productNameCount)}/36`}</Styled.TextCount>
          </Styled.InputContainer>

          <Styled.InputContainer className="size">
            <Styled.InputTitle>사이즈</Styled.InputTitle>
            <Styled.Input type="text" id="size" maxLength={5} onChange={handleOnChange} onInput={handleOnInput} />
            <Styled.TextCount>{`${String(sizeCount)}/5`}</Styled.TextCount>
          </Styled.InputContainer>

          <Styled.InputContainer className="memo">
            <Styled.InputTitle>메모</Styled.InputTitle>
            <textarea id="memo" maxLength={50} onChange={handleOnChange} onInput={handleOnInput} />
            <Styled.TextCount>{`${String(memoCount)}/50`}</Styled.TextCount>
          </Styled.InputContainer>
        </Styled.InputForm>

        <Styled.ButtonContainer>
          <Styled.SubmitButton onClick={() => setIsModalOpen(false)}>취소</Styled.SubmitButton>
          <Styled.SubmitButton
            className={productNameCount === 0 && sizeCount === 0 && memoCount === 0 ? 'disabled' : 'abled'}
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
    position: absolute;

    top: 0;
    z-index: 2;

    width: 100vw;
    height: 100vh;

    background-color: ${theme.colors.card_hover};
  `,
  ModalContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;

    left: 48.4rem;
    top: 16.6rem;

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
