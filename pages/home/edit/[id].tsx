import styled from 'styled-components';

import CardEdit from '@/components/home/CardEdit';

import Home from '..';

function Edit() {
  return (
    <Styled.Root>
      <Home />
      <CardEdit />
    </Styled.Root>
  );
}

export default Edit;

const Styled = {
  Root: styled.div`
    position: relative;

    overflow: hidden;
  `,
};
