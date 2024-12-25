import React, { useEffect, useRef, useState } from 'react'

function useRenderEnv() {
  const [ssr, setIsSsr] = useState({
    isServer: (typeof window === undefined),
    isClient: (typeof window !== undefined),
    isLoading : true,
  });

  useEffect(() => {
      setIsSsr({
        isServer: false,
        isClient: true,
        isLoading : false,
      });
  }, [])

  return ssr
}
export default useRenderEnv
