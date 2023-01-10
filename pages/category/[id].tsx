import { useEffect, useState } from 'react';
import { CategoryDeleteIcon, CategoryEditIcon } from 'assets/icon';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from 'styles/theme';

import HomeMain from '@/components/home/HomeMain';
import { useFetchCategoryDetail } from '@/hooks/queries/allCloset';
import Layout from 'components/common/Layout';

function Detail() {
  const [categoryId, setCategoryId] = useState('');
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (typeof id == 'string') setCategoryId(id);
  }, [id]);

  const data = useFetchCategoryDetail(categoryId);

  return (
    <Layout noMenuBar>
      <Styled.Root>
        <Styled.categoryNameContainer>
          <Styled.categoryName>카테고리제목</Styled.categoryName>
          <div>
            <Image src={CategoryEditIcon} width={58} height={58} alt="카테고리 제목 편집 아이콘" />
            <Image src={CategoryDeleteIcon} width={58} height={58} alt="카테고리 삭제 아이콘" />
          </div>
        </Styled.categoryNameContainer>
        {data && <HomeMain data={data} categoryId={categoryId} page="categoryDetail" />}
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
