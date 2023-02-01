import { useEffect, useState } from 'react';
import styled from 'styled-components';

import FirstPart from './FirstPart';
import Footer from './Footer';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';

function WelcomeLanding() {
  const [browserKind, setBrowserKind] = useState<string>('mobile');

  //   useEffect(() => {
  //     const resizeListener = () => {
  //       if (window.innerWidth <= 600 && window.innerWidth >= 375) setBrowserKind('mobile');
  //       else if (window.innerWidth <= 1728 && window.innerWidth >= 1024) setBrowserKind('desktop');
  //       else setBrowserKind('');
  //     };
  //     window.addEventListener('resize', resizeListener);
  //   });

  return (
    <Styled.Root>
      <FirstPart browser={'mobile'} />
      <SecondPart browser={'mobile'} />
      <ThirdPart browser={'mobile'} />
      <Footer browser={'mobile'} />
    </Styled.Root>
  );
}

export default WelcomeLanding;

const Styled = {
  Root: styled.div``,
};
