import Layout from 'components/common/Layout';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import profileDefault from 'assets/icon/profileDefault.png'

function MyPage() {
  return (
    <Layout noMenuBar>
      <Styled.Root>
        <Styled.PersonalInformation>
          <Image src={profileDefault} alt="사용자 지정 프로필 이미지가 없는 경우의 디폴트 프로필 이미지" width={82} height={82} placeholder="blur"/>
        </Styled.PersonalInformation>
      </Styled.Root>
    </Layout>
  );
}

export default MyPage;

const Styled = {
  Root: styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
  `,
  PersonalInformation: styled.div`
    display: flex;
    width: 69.2rem;
    height: 8.3rem;
  `,
}
