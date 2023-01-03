import { ClosetIcon } from 'assets/icon';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import Product from './Product';

export default function HomeMain() {
  const product = [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <Product key={item} />);
  return (
    <Styled.Container>
      <Styled.CountSection>
        <Image src={ClosetIcon} alt="나의 옷장 옷 개수 아이콘" />
        <Styled.Count>4</Styled.Count>
      </Styled.CountSection>
      <Styled.Closet>{product}</Styled.Closet>
    </Styled.Container>
  );
}

// 시맨틱 태그 다시 확인
const Styled = {
  Container: styled.div`
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

    justify-content: space-between;
    margin-top: 5rem;
  `,
};
