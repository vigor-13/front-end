import { useAppDispatch, useAppSelector } from '@redux-store';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { setIsLogin } from 'redux-store/slices';
import Layout from '@components/layout';
import { NextPageWithLayout } from '@utils/types';
import type { ReactElement } from 'react';

const Home: NextPageWithLayout = (props: any) => {
  const dispatch = useAppDispatch();
  const storeState = useAppSelector((state) => state);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsLogin(true));
    }, 5000);
  }, []);

  return <div className="text-3xl font-bold underline">Home Page</div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// export const getStaticProps: GetStaticProps = wrapper.getStaticProps((store) => {
//   return async () => {
//     return {
//       props: {
//         store: store.getState(),
//       },
//     };
//   };
// });

export default Home;
