import '../styles/globals.css';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { wrapper } from '@redux-store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppPropsWithLayout } from '@utils/types';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [queryClient] = useState<QueryClient>(() => new QueryClient());
  const store = useStore();

  return (
    // @ts-ignore
    <PersistGate persistor={store.__persistor} loading={<div>LOADING...</div>}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {getLayout(<Component {...pageProps} />)}
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
