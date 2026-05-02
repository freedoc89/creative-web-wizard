import { useState, useEffect } from "react";

const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_EXCHANGE_API_URL;

export const usePrice = (locale: string) => {
  const [rates, setRates] = useState<{ [key: string]: number }>({
    HUF: 1,
    USD: 0.0028,
    EUR: 0.0026
  });

  const currency = locale === "hu" ? "HUF" : locale === "en" ? "USD" : "EUR";
  const browserLocale =
    locale === "hu" ? "hu-HU" : locale === "en" ? "en-US" : "de-DE";

  useEffect(() => {
    if (API_KEY && BASE_URL) {
      const fetchRates = async () => {
        try {
          const response = await fetch(`${BASE_URL}${API_KEY}/latest/HUF`);
          const data = await response.json();
          if (data && data.conversion_rates) {
            setRates(data.conversion_rates);
          }
        } catch (error) {
          console.error("Árfolyam hiba, fallback használata.", error);
        }
      };
      fetchRates();
    }
  }, []);

  const formatPrice = (amountInHuf: number): string => {
    const rate = rates[currency] || 1;
    let convertedValue = amountInHuf * rate;
    const isHuf = currency === "HUF";

    if (!isHuf) {
      convertedValue = Math.round(convertedValue / 5) * 5;
    }

    return new Intl.NumberFormat(browserLocale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: isHuf ? 0 : 2,
      maximumFractionDigits: isHuf ? 0 : 2
    })
      .format(convertedValue)
      .replace(/\u00A0/g, " ");
  };

  return { formatPrice };
};
