import styled from 'styled-components';

import HomeFirst from './HomeFirst';
import HomeMain from './HomeMain';

export default function HomeLanding() {
  return (
    <Styled.Root>
      {/* <HomeFirst /> */}
      <HomeMain />
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    width: 140.8rem;
    height: 100%;
    margin: 0 auto;
  `,
};
