import { PropsWithChildren, ReactNode, Suspense } from 'react';
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

export function AsyncBoundary({ children, loadingFallback }: PropsWithChildren<AsyncBoundaryProps>) {
  return (
    <QueryErrorResetBoundary>
      <ErrorBoundary
        FallbackComponent={(fallback) => {
          console.log('fallback', fallback);
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
