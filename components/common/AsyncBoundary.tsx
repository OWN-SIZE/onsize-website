import { PropsWithChildren, ReactNode, Suspense, useEffect, useState } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { QueryErrorResetBoundary, useQueryErrorResetBoundary } from 'react-query';

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
  const { reset } = useQueryErrorResetBoundary();

  return (
    <QueryErrorResetBoundary>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <h1>
            Unexpected Error !<button onClick={() => resetErrorBoundary()}>Try again</button>
          </h1>
        )}
      >
        <Suspense fallback={loadingFallback || <Loading />}>{children}</Suspense>
      </ErrorBoundary>
    </QueryErrorResetBoundary>
  );
}
