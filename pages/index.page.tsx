import { useAppDispatch, useAppSelector } from '@redux-store';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { setIsLogin } from 'redux-store/slices';
import Layout from '@components/layout';

const Home: NextPage = (props: any) => {
  const dispatch = useAppDispatch();
  const storeState = useAppSelector((state) => state);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsLogin(true));
    }, 5000);
  }, []);

  return (
    <Layout>
      <div className="text-3xl font-bold underline">Home Page</div>
    </Layout>
  );
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
