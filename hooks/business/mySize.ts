import { BottomSizeInput, TopSizeInput } from 'types/mySize/client';

import { usePostMyBottomSizeMutation, usePostMyTopSizeMutation } from '../queries/mySize';

export const usePostMyTopSize = () => {
  const postMyTopSizeMutate = usePostMyTopSizeMutation();

  const postMyTopSize = (body: TopSizeInput, onSuccessPost: () => void) => {
    postMyTopSizeMutate.mutate(body, {
      onSuccess() {
        onSuccessPost();
      },
    });
  };

  return { postMyTopSize };
};

export const usePostMyBottomSize = () => {
  const postMyBottomSizeMutate = usePostMyBottomSizeMutation();

  const postMyBottomSize = (body: BottomSizeInput, onSuccessPost: () => void) => {
    postMyBottomSizeMutate.mutate(body, {
      onSuccess() {
        onSuccessPost();
      },
    });
  };

  return { postMyBottomSize };
};
