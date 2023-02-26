import styled from 'styled-components';
import { ClosetOutput } from 'types/allCloset/client';

import { useFetchAllCloset } from '@/hooks/queries/allCloset';

import HomeFirst from './HomeFirst';
import HomeMain from './HomeMain';

function HomeLanding() {
  const orderSortById = (item: ClosetOutput[]) => {
    return item.sort((a, b) => {
      return Number(b.id) - Number(a.id);
    });
  };
  const orderSortByTime = (item: ClosetOutput[]) => {
    return item.sort((a, b) => {
      return Number(b.updateAt) - Number(a.updateAt);
    });
  };

  let data = useFetchAllCloset();

  if (data) {
    const pinData: ClosetOutput[] = orderSortByTime(data.filter((data) => data.isPin));
    const noPinData: ClosetOutput[] = orderSortById(data.filter((data) => !data.isPin));
    data = pinData.concat(noPinData);
  } else {
    data = [];
  }

  return <Styled.Root>{data.length !== 0 ? <HomeMain data={data} page="closet" /> : <HomeFirst />}</Styled.Root>;
}

export default HomeLanding;
const Styled = {
  Root: styled.div`
    width: 140.8rem;
    min-height: 66rem;
    margin: 0 auto;
  `,
};
