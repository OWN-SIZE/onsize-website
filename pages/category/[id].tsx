import { CategoryDeleteIcon, CategoryEditIcon } from 'assets/icon';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import { ClosetOutput } from 'types/allCloset/client';
import { useRouter } from 'next/router';

import HomeMain from '@/components/home/HomeMain';
import Layout from 'components/common/Layout';

function Detail() {
  //카테고리 이름 넘겨준 거! 이렇게 쓰면 됩니다 :)
  const router = useRouter();
  console.log(router.query);

  const data: ClosetOutput[] = [
    {
      id: 17,
      userId: 2,
      image: '이미지',
      productName: '트랙팬츠',
      size: '34',
      memo: null,
      isRecommend: true,
      isPin: false,
      mallName: '노운',
      topOrBottom: 1,
      productUrl: '상품 링크',
      faviconUrl: '브랜드로고url',
    },
    {
      id: 1,
      userId: 1,
      image:
        'https://norefund-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8D%E1%85%A1%E1%86%AF.png',
      productName: '아끼는옷',
      size: 'XL',
      memo: '갖고싶다22',
      isRecommend: true,
      isPin: false,
      mallName: '무신사',
      topOrBottom: 0,
      productUrl: '상품링크3',
      faviconUrl: null,
    },
    {
      id: 2,
      userId: 1,
      image:
        'https://norefund-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8D%E1%85%A1%E1%86%AF.png',
      productName: '내가 수정한 의류명',
      size: '',
      memo: '두번째 수정명',
      isRecommend: false,
      isPin: false,
      mallName: '무신사',
      topOrBottom: 1,
      productUrl: '상품링크2',
      faviconUrl: null,
    },
    {
      id: 14,
      userId: 2,
      image: '이미지',
      productName: '데님바지',
      size: '34',
      memo: '나 지금 데님 바지 수정했다',
      isRecommend: true,
      isPin: false,
      mallName: '브라운야드',
      topOrBottom: 1,
      productUrl: '상품 링크',
      faviconUrl: '브랜드로고url',
    },
    {
      id: 3,
      userId: 1,
      image: '이미지',
      productName: '옷1010',
      size: 'XXL',
      memo: '수정했다메모',
      isRecommend: false,
      isPin: false,
      mallName: '무신사',
      topOrBottom: 1,
      productUrl: '상품링크',
      faviconUrl: null,
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
