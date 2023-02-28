import { PropsWithChildren, ReactNode, Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from 'react-query';

import Error from './Error';
import Loading from './Loading';

interface AsyncBoundaryProps {
  loadingFallback?: ReactNode;
}

const isExpectedError = (res: unknown): res is Error => {
  if (typeof res !== 'object' || res == null) {
    return false;
  }
  return true;
};

export const useErrorBubbling = () => {
  const [isError, setIsError] = useState<Error | string | null>(null);

  if (isError !== null) {
    throw isError;
  }

  return {
    reportError: (error: unknown) => {
      try {
        isExpectedError(error) ? setIsError(error) : setIsError(JSON.stringify(error));
      } catch (error) {
        setIsError(String(error));
      }
    },
    isError,
  };
};

export function AsyncBoundary({ children, loadingFallback }: PropsWithChildren<AsyncBoundaryProps>) {
  return (
    <QueryErrorResetBoundary>
      <ErrorBoundary
        FallbackComponent={(fallback) => {
          if (isExpectedError(fallback.error)) {
            return <Error />;
          }
          return <h1>Unexpected Error !</h1>;
        }}
      >
        <Suspense fallback={loadingFallback || <Loading />}>{children}</Suspense>
      </ErrorBoundary>
    </QueryErrorResetBoundary>
  );
}
