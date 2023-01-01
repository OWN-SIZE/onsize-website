import { useRouter } from 'next/router';
import styled from 'styled-components';

import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;
  const router = useRouter();

  return (
    <Root>
      {router.asPath === ('/home' || '/category' || '/mypage') ? <Header /> : null}
      {children}
    </Root>
  );
}

export default Layout;

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
