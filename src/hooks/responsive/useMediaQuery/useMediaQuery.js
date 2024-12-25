import React, { useEffect, useState } from 'react'

function useMediaQuery({queryProp}) {
  const [query , setQuery] = useState(queryProp);

  useEffect(()=>{
    if(queryProp){
      setQuery(queryProp)
    }
  }, [])

  return query
}

export default useMediaQuery
