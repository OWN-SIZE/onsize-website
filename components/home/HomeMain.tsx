import { ClosetIcon } from 'assets/icon';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import Product from './Product';

interface closetData {
  id: string;
  image: string;
  productName: string;
  size: string | null;
  memo: string;
  mallName: string;
  isRecommend: boolean;
  isPin: boolean;
  link: string;
}

function HomeMain() {
  const data: closetData[] = [
    {
      id: '62daeb7e82b56574bf940e54',
      image:
        'https://norefund-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8D%E1%85%A1%E1%86%AF.png',
      productName: '아끼는옷',
      size: null,
      memo: '어쩌구저쩌구',
      mallName: '무신사',
      isRecommend: true,
      isPin: true,
      link: 'https://www.musinsa.com/app/goods/2194649?loc=goods_rank',
    },
    {
      id: '62daeb7e82b56574bf940e55',
      image:
        'https://norefund-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8D%E1%85%A1%E1%86%AF.png',
      productName: '선물할옷',
      size: 'L',
      memo: '살까말까',
      mallName: '무신사',
      isRecommend: false,
      isPin: false,
      link: 'https://www.musinsa.com/app/goods/2194649?loc=goods_rank',
    },
    {
      id: '62daeb7e82b56574bf940e56',
      image:
        'https://norefund-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8D%E1%85%A1%E1%86%AF.png',
      productName: '후드티',
      size: 'XL',
      memo: '색 이쁨',
      mallName: '무신사',
      isRecommend: true,
      isPin: true,
      link: 'https://www.musinsa.com/app/goods/2194649?loc=goods_rank',
    },
  ];
  const product = data.map((item) => <Product key={item.id} data={item} />);
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
