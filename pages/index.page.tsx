import { useAppDispatch, useAppSelector } from '@redux-store';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { setIsLogin } from 'redux-store/slices';

const Home: NextPage = (props: any) => {
  const dispatch = useAppDispatch();
  const storeState = useAppSelector((state) => state);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsLogin(true));
    }, 5000);
  }, []);

  return <div>Home Page</div>;
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
