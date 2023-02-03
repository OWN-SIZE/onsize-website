import { useEffect, useState } from 'react';
import styled from 'styled-components';

import FirstPart from './FirstPart';
import Footer from './Footer';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';

function WelcomeLanding() {
  const [browserKind, setBrowserKind] = useState('');

  useEffect(() => {
    const browserWidth = () => {
      if (window.innerWidth <= 600 && window.innerWidth >= 375) return 'mobile';
      else if (window.innerWidth <= 3000 && window.innerWidth >= 1024) return 'desktop';
      else return '';
    };

    window.addEventListener('resize', () => setBrowserKind(browserWidth));

    console.log(browserKind);
  }, []);

  return (
    <Styled.Root>
      <FirstPart browser={browserKind} />
      <SecondPart />
      <ThirdPart />
      <Footer browser={browserKind} />
    </Styled.Root>
  );
}

export default WelcomeLanding;

const Styled = {
  Root: styled.div``,
};
