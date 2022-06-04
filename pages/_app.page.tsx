import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { wrapper } from '@redux-store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState<QueryClient>(() => new QueryClient());
  const store = useStore();

  return (
    // @ts-ignore
    <PersistGate persistor={store.__persistor} loading={<div>LOADING...</div>}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
