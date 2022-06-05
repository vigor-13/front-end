import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const registerQyery = async (payload: any) => {
  return await fetch('http://localhost:8080/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export interface UseRegisterPayload {
  key: string;
  password: string;
}

export const useRegisterQuery = () => {
  const [payload, setPayload] = useState<UseRegisterPayload | null>();
  const queryResult = useQuery(
    ['payload'],
    async () => await registerQyery(payload),
    {
      suspense: false,
      useErrorBoundary: false,
      cacheTime: 0,
      retry: false,
      refetchOnWindowFocus: false,
      retryOnMount: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      enabled: false,
    }
  );

  useEffect(() => {
    if (payload) queryResult.refetch();
  }, [payload]);

  return {
    queryResult,
    setPayload,
  };
};
