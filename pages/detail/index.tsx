import { CategoryDeleteIcon, CategoryEditIcon } from 'assets/icon';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import HomeMain from '@/components/home/HomeMain';
import Layout from 'components/common/Layout';

function Detail() {
  const data = [
    {
      id: '62daeb7e82b56574bf940e54',
      image:
        'https://norefund-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8D%E1%85%A1%E1%86%AF.png',
      productName: '아끼는옷',
      size: 'XL',
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
      isPin: true,
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
  return (
    <Layout noMenuBar>
      <Styled.Root>
        <Styled.categoryNameContainer>
          <Styled.categoryName>카테고리제목카테고리제목</Styled.categoryName>
          <div>
            <Image src={CategoryEditIcon} width={58} height={58} alt="카테고리 제목 편집 아이콘" />
            <Image src={CategoryDeleteIcon} width={58} height={58} alt="카테고리 삭제 아이콘" />
          </div>
        </Styled.categoryNameContainer>
        <HomeMain data={data} page="categoryDetail" />
      </Styled.Root>
    </Layout>
  );
}

export default Detail;

const Styled = {
  Root: styled.div`
    width: 140.8rem;
    margin: 9.4rem auto 0;
  `,
  categoryNameContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5.8rem;
    border-bottom: 0.3rem solid ${theme.colors.gray200};

    padding-bottom: 1.3rem;
    /* margin-top: ; */
  `,
  categoryName: styled.h1`
    ${theme.fonts.title2};
  `,
};
