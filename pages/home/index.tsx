import styled from 'styled-components';

import Header from 'components/common/Header';

export default function index() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
  border: solid 1px black;
`;
