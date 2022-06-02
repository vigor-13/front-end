import { useAppDispatch, useAppSelector, wrapper } from '@redux-store';
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import { setIsLogin } from 'redux-store/slices';

const Home: NextPage = (props: any) => {
  const dispatch = useAppDispatch();

  console.log(props);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsLogin(true));
    }, 5000);
  }, []);

  return <div>Home Page</div>;
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => {
    return async ({ req, res, ...rest }) => {
      console.log(store.getState());

      return {
        props: {
          store: store.getState(),
        },
      };
    };
  }
);

export default Home;
