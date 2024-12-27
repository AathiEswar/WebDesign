import React, { useEffect, useMemo, useRef, useState } from 'react'

function useRenderEnv() {
  const isServer = (typeof window === 'undefined');
  const isClient = (typeof window !== 'undefined');

  const [ssr, setIsSsr] = useState({
    isServer: isServer,
    isClient: isClient,
    isLoading: true,
  });

  useEffect(() => {
    setIsSsr({
      isServer: false,
      isClient: true,
      isLoading: false,
    });
  }, []);

  return ssr;
}


export default useRenderEnv
