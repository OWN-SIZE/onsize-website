import { BlackFolderIcon, Folder20Icon, GrayFolderIcon } from 'assets/icon';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import { useFetchIncludeCategory, usePostIncludeCategoryMutation } from '@/hooks/queries/allCloset';
import { useFetchAllCategory } from '@/hooks/queries/category';

interface AddCategoryModalProps {
  productId: string;
}
function AddCategoryModal(props: AddCategoryModalProps) {
  const { productId } = props;
  const { category } = useFetchAllCategory();
  const includeCategoryData = useFetchIncludeCategory(productId);
  const { mutate: postIncludeCategory } = usePostIncludeCategoryMutation(productId);
  const handleOnClick = (categoryId: string) => {
    postIncludeCategory({ postBody: { productId: productId, categoryId: categoryId } });
  };

  let categoryProduct = null;
  if (category) {
    categoryProduct = category.map((data) => (
      <Styled.Category
        key={data.id}
        className={includeCategoryData?.includes(Number(data.id)) ? 'disabled' : 'abled'}
        onClick={() => handleOnClick(data.id)}
      >
        <Image
          src={includeCategoryData?.includes(Number(data.id)) ? GrayFolderIcon : BlackFolderIcon}
          width={15}
          height={15}
          alt="카테고리 아이콘"
        />
        {data.categoryName.length > 9 ? `${data.categoryName.substring(0, 9)}...` : `${data.categoryName}`}
      </Styled.Category>
    ));
  }

  return (
    <Styled.AddCategoryContainer>
      <Styled.MyCategory>나의 카테고리</Styled.MyCategory>
      <Styled.CategoryList>{categoryProduct}</Styled.CategoryList>
      <Styled.addCategoryButton>
        <Image src={Folder20Icon} width={20} height={20} alt="카테고리 아이콘" />새 카테고리 만들기
      </Styled.addCategoryButton>
    </Styled.AddCategoryContainer>
  );
}

export default AddCategoryModal;

const Styled = {
  AddCategoryContainer: styled.div`
    position: absolute;

    top: 6.3rem;
    left: 1.6rem;

    width: 30rem;
    height: 42.4rem;

    border-radius: 1rem;

    z-index: 3;

    background-color: ${theme.colors.gray000};
    box-shadow: 0px 0px 10px 8px rgba(0, 0, 0, 0.05);

    &.false {
      display: none;
    }
  `,
  MyCategory: styled.header`
    margin-top: 2.9rem;
    margin-left: 2.3rem;

    ${theme.fonts.sizetag};
    color: ${theme.colors.gray550};
  `,
  CategoryList: styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    width: 25.5rem;

    margin: 2.2rem auto 0;
  `,
  Category: styled.button`
    display: flex;
    align-items: center;

    width: 25.5rem;
    height: 3.1rem;

    border-radius: 2.4rem;

    background: none;
    border: none;

    padding-left: 1.2rem;
    margin-bottom: 1.2rem;

    ${theme.fonts.body2};
    color: ${theme.colors.gray550};

    cursor: pointer;

    & > img {
      margin-right: 1.2rem;
    }

    &.disabled {
      color: ${theme.colors.gray300};
    }
    &:hover {
      background-color: ${theme.colors.gray100};
    }
  `,
  addCategoryButton: styled.button`
    position: absolute;
    top: 34.5rem;
    left: 2.3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 25.5rem;
    height: 5rem;

    border: none;
    border-radius: 2.5rem;

    ${theme.fonts.card1};
    background-color: ${theme.colors.yellow01};

    cursor: pointer;

    & > img {
      margin-right: 1.2rem;
    }
  `,
};
