import styled from 'styled-components';

import { useFetchAllCloset } from '@/hooks/queries/allCloset';

import HomeFirst from './HomeFirst';
import HomeMain from './HomeMain';

function HomeLanding() {
  const data = useFetchAllCloset();

  return <Styled.Root>{!data ? <HomeFirst /> : <HomeMain data={data} />}</Styled.Root>;
}

export default HomeLanding;

const Styled = {
  Root: styled.div`
    width: 140.8rem;
    height: 100%;
    margin: 0 auto;
  `,
};
