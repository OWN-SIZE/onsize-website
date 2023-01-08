import { ClosetIcon } from 'assets/icon';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import { AllClosetOutput } from 'types/allCloset/client';

import Product from './Product';

interface HomeMainProps {
  data: AllClosetOutput[];
  page: string;
}

function HomeMain(props: HomeMainProps) {
  const { data, page } = props;
  const countProduct = data.length;
  const product = data.map((item) => <Product key={item.id} data={item} page={page} />);

  return (
    <Styled.Container>
      <Styled.CountSection>
        <Image src={ClosetIcon} alt="나의 옷장 옷 개수 아이콘" />
        <Styled.Count>{countProduct}</Styled.Count>
      </Styled.CountSection>
      <Styled.Closet>{product}</Styled.Closet>
    </Styled.Container>
  );
}

export default HomeMain;

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

    margin-top: 5rem;
  `,
};
