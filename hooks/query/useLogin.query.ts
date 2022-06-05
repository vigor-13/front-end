import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const loginQuery = async (payload: any) => {
  return await fetch('http://localhost:8080/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const useLoginQuery = () => {
  const [payload, setPayload] = useState<any>();
  const queryResult = useQuery(['payload'], async () => await loginQuery(payload), {
    suspense: false,
    useErrorBoundary: false,
    cacheTime: 0,
    retry: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
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
