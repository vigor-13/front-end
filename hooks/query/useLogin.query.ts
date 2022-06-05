import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const getMode = (payload: any) => {
  console.log(payload);
  return fetch('http://localhost:8080/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
};
export const useLoginQuery = () => {
  const [payload, setPayload] = useState<any>();
  const queryResult = useQuery(['payload'], () => getMode(payload), {
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
