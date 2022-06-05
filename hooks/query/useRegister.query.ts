import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const registerQyery = (payload: any) => {
  return fetch('http://localhost:8080/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};

export const useRegisterQuery = () => {
  const [payload, setPayload] = useState<any>();
  const queryResult = useQuery(['payload'], () => registerQyery(payload), {
    suspense: false,
    useErrorBoundary: true,
    cacheTime: 0,
    retry: 0,
    refetchOnWindowFocus: false,
    enabled: false,
  });

  useEffect(() => {
    if (payload) queryResult.refetch();
  }, [payload]);

  return {
    queryResult,
    setPayload,
  };
};
