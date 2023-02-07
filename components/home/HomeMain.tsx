import { useState } from 'react';
import { ClosetIcon } from 'assets/icon';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import { ClosetOutput } from 'types/allCloset/client';

import { Toast } from 'components/common/Toast/Toast';
import useToast from 'components/common/Toast/useToast';

import Product from './Product';

interface HomeMainProps {
  data: ClosetOutput[];
  page: string;
  categoryId?: string;
  showToastDetail?: (message: string) => void;
}

function HomeMain(props: HomeMainProps) {
  const { data, page, categoryId, showToastDetail } = props;
  const { isOpenToast, message, showToast } = useToast();
  const [isAddCategory, setIsCategory] = useState(false);
  const countProduct = data.length;
  const product = data.map((item) => (
    <Product
      key={String(item.id)}
      data={item}
      categoryId={categoryId}
      page={page}
      showToast={showToastDetail ? showToastDetail : showToast}
      setIsCategory={setIsCategory}
    />
  ));

  return (
    <Styled.Root>
      <Styled.CountSection>
        <Image src={ClosetIcon} alt="나의 옷장 옷 개수 아이콘" />
        <Styled.Count>{countProduct}</Styled.Count>
      </Styled.CountSection>
      <Styled.Closet>{product}</Styled.Closet>
      {isOpenToast && (
        <Styled.ToastContainer isAddCategory={isAddCategory}>
          <Toast width={isAddCategory ? '42.6' : '32.9'} message={message} />
        </Styled.ToastContainer>
      )}
    </Styled.Root>
  );
}
export default HomeMain;
// 시맨틱 태그 다시 확인
const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    width: 140.6rem;
    margin: 5rem auto 0;
  `,
  CountSection: styled.div`
    display: flex;
  `,
  Count: styled.p`
    margin-left: 1.6rem;
    color: ${theme.colors.gray350};
    ${theme.fonts.title4};
  `,
  Closet: styled.section`
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;
  `,
  ToastContainer: styled.div<{ isAddCategory: boolean }>`
    position: fixed;
    bottom: 5.2rem;

    display: flex;
    align-items: center;
    z-index: 15;

    margin-left: ${({ isAddCategory }) => (isAddCategory ? '49rem' : ' 53.9rem')};
  `,
};
