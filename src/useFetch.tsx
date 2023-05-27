import { useEffect, useState } from "react";

const useFetch = ({ url, type }) => {
  // disabled react strict mode because of which api calls were getting cancelled
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setIsLoading(true);
    setData(undefined);
    setIsError(false);
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((res) => {
        res
          .json()
          .then((res2) => {
            setData(res2);
          })
          .catch((err2) => {
            console.log("i was called");
            setIsError(true);
          });
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return [data, isLoading, isError];
};
export default useFetch;
