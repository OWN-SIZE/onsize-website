import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;
  return <Root>{children}</Root>;
}

export default Layout;

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
