import styled from 'styled-components';

import Header from './Header';
import MenuBar from './MenuBar';

interface LayoutProps {
  children: React.ReactNode;
  noHeader?: boolean;
  noMenuBar?: boolean;
}

function Layout(props: LayoutProps) {
  const { children, noHeader, noMenuBar } = props;

  return (
    <Root>
      {!noHeader && <Header />}
      {!noMenuBar && <MenuBar />}
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
