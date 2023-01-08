import styled from 'styled-components';
import { AllClosetOutput } from 'types/allCloset/client';

import { useFetchAllCloset } from '@/hooks/queries/allCloset';

import HomeFirst from './HomeFirst';
import HomeMain from './HomeMain';

function HomeLanding() {
  const orderSort = (item: AllClosetOutput[]) => {
    return item.sort((a, b) => {
      return Number(b.id) - Number(a.id);
    });
  };

  let data = useFetchAllCloset();
  if (data) {
    const pinData: AllClosetOutput[] = orderSort(data.filter((data) => data.isPin === true));
    const noPinData: AllClosetOutput[] = orderSort(data.filter((data) => data.isPin === false));
    data = pinData.concat(noPinData);
  }
  console.log(data);

  return <Styled.Root>{!data ? <HomeFirst /> : <HomeMain data={data} page="closet" />}</Styled.Root>;
}

export default HomeLanding;

const Styled = {
  Root: styled.div`
    width: 140.8rem;
    height: 100%;
    margin: 0 auto;
  `,
};
