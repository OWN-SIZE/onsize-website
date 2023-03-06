import { useEffect, useState } from 'react';

function useRedirect() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onRedirect = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    onRedirect();
  }, []);

  return { isLoading };
}

export default useRedirect;
