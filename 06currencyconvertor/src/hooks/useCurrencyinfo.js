import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => setData(res.rates))
      .catch((error) => {
        console.error("Error fetching currency data:", error);
        // Fallback to a default set of currencies if API fails
        setData({
          usd: 1,
          eur: 0.85,
          gbp: 0.73,
          inr: 74.5,
          jpy: 110.5,
          aud: 1.35
        });
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;