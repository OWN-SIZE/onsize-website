import { BottomSizeInput, TopSizeInput } from 'types/mySize/client';

import { usePostMyBottomSizeMutation, usePostMyTopSizeMutation } from '../queries/mySize';

export const usePostMyTopSize = () => {
  const postMyTopSizeMutate = usePostMyTopSizeMutation();

  const postMyTopSize = async (body: TopSizeInput, onSuccessPost: () => void) => {
    const { message } = await postMyTopSizeMutate.mutateAsync(body, {
      onSuccess() {
        console.log(message);
        onSuccessPost();
      },
    });
  };

  return { postMyTopSize };
};

export const usePostMyBottomSize = () => {
  const postMyBottomSizeMutate = usePostMyBottomSizeMutation();

  const postMyBottomSize = async (body: BottomSizeInput, onSuccessPost: () => void) => {
    const { message } = await postMyBottomSizeMutate.mutateAsync(body, {
      onSuccess() {
        console.log(message);
        onSuccessPost();
      },
    });
  };

  return { postMyBottomSize };
};
