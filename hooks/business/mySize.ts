import { BottomSizeInput, TopSizeInput } from 'types/mySize/client';

import { usePostMyBottomSizeMutation, usePostMyTopSizeMutation } from '../queries/mySize';

export const usePostMyTopSize = () => {
  const postMyTopSizeMutate = usePostMyTopSizeMutation();

  const postMyTopSize = async (body: TopSizeInput, onSuccessPost: () => void) => {
    const { data } = await postMyTopSizeMutate.mutateAsync(body, {
      onSuccess() {
        console.log(data);
        onSuccessPost();
      },
    });
  };

  return { postMyTopSize };
};

export const usePostMyBottomSize = () => {
  const postMyBottomSizeMutate = usePostMyBottomSizeMutation();

  const postMyBottomSize = async (body: BottomSizeInput, onSuccessPost: () => void) => {
    const { data } = await postMyBottomSizeMutate.mutateAsync(body, {
      onSuccess() {
        console.log(data);
        onSuccessPost();
      },
    });
  };

  return { postMyBottomSize };
};
