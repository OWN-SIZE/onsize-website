import styled from 'styled-components';

import FirstSection from './FirstSection';

function WelcomeLanding() {
  return (
    <Styled.Root>
      <FirstSection />
    </Styled.Root>
  );
}

export default WelcomeLanding;

const Styled = {
  Root: styled.div``,
};
