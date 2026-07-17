import { useEffect, useState } from 'react'

export function useFetch(url, options) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(Boolean(url))

  useEffect(() => {
    if (!url) return

    let isMounted = true
    setLoading(true)

    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        if (isMounted) setData(json)
      })
      .catch((fetchError) => {
        if (isMounted) setError(fetchError)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [url, options])

  return { data, error, loading }
}
