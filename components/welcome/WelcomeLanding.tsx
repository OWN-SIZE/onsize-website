import { useRef } from 'react';
import styled from 'styled-components';

import { useFetchEmail } from '@/hooks/queries/welcome';

import FirstPart from './FirstPart';
import Footer from './Footer';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';

function WelcomeLanding() {
  const data = useFetchEmail(); // 추후 수집 이메일 확인 시 사용
  const InputRef = useRef<HTMLDivElement>(null);

  return (
    <Styled.Root>
      <FirstPart />
      <SecondPart />
      <ThirdPart />
      <Footer />
    </Styled.Root>
  );
}

export default WelcomeLanding;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
