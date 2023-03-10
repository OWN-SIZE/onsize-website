import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import MenuBar from './MenuBar';

interface LayoutProps {
  children: React.ReactNode;
  noHeader?: boolean;
  noMenuBar?: boolean;
  noFooter?: boolean;
}

function Layout(props: LayoutProps) {
  const { children, noHeader, noMenuBar, noFooter } = props;

  return (
    <Root className={!noFooter ? 'minHeight' : ''}>
      {!noHeader && <Header />}
      {!noMenuBar && <MenuBar />}
      {children}
      {!noFooter && <Footer />}
    </Root>
  );
}

export default Layout;

const Root = styled.div`
  width: 100vw;
  &.minHeight {
    min-height: 136.7rem;
  }
  display: flex;
  flex-direction: column;
`;
