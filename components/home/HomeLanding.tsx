import styled from 'styled-components';

import HomeFirst from './HomeFirst';
import HomeMain from './HomeMain';

function HomeLanding() {
  return (
    <Styled.Root>
      {/* <HomeFirst /> */}
      <HomeMain />
    </Styled.Root>
  );
}

export default HomeLanding;

const Styled = {
  Root: styled.div`
    width: 140.8rem;
    height: 100%;
    margin: 0 auto;
  `,
};
