import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [result, setResult] = useState({ url: null, data: null, error: null });

  useEffect(() => {
    if (!url) return undefined;

    const controller = new AbortController();
    let active = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error("Error fetching data");
        const data = await response.json();
        if (active) setResult({ url, data, error: null });
      } catch (error) {
        if (active && error.name !== "AbortError") {
          setResult({
            url,
            data: null,
            error: error instanceof Error ? error.message : String(error),
          });
        }
      }
    };

    fetchData();
    return () => {
      active = false;
      controller.abort();
    };
  }, [url]);

  const hasResult = result.url === url;
  return {
    data: hasResult ? result.data : null,
    error: hasResult ? result.error : null,
    isLoading: Boolean(url) && !hasResult,
  };
};

export default useFetch;
