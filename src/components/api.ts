const cryptoApi = import.meta.env.VITE_FREECRYPTOAPI;
const goldPriceApi = import.meta.env.VITE_GOLDAPI;
const silverPriceApi = import.meta.env.VITE_SILVERAPI;
const indexPriceApi = import.meta.env.VITE_INDEXAPI;
export const btcApi = async () => {
  if (!cryptoApi) {
    return;
  }
  const response = await fetch(
    "https://api.freecryptoapi.com/v1/getData?symbol=BTC",
    {
      method: "GET",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${cryptoApi}`,
      },
    },
  );
  return response.json();
};
export const ethApi = async () => {
  if (!cryptoApi) {
    return;
  }
  const response = await fetch(
    "https://api.freecryptoapi.com/v1/getData?symbol=ETH",
    {
      method: "GET",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${cryptoApi}`,
      },
    },
  );
  return response.json();
};

export const solApi = async () => {
  if (!cryptoApi) {
    return;
  }
  const response = await fetch(
    "https://api.freecryptoapi.com/v1/getData?symbol=SOL",
    {
      method: "GET",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${cryptoApi}`,
      },
    },
  );
  return response.json();
};
export const goldApi = async () => {
  if (!goldPriceApi) {
    return;
  }
  const response = await fetch(goldPriceApi, {
    method: "GET",
  });
  return response.json();
};
export const silverApi = async () => {
  if (!silverPriceApi) {
    return;
  }
  const response = await fetch(silverPriceApi, {
    method: "GET",
  });
  return response.json();
};
export const indexApi = async () => {
  if (!indexPriceApi) {
    return;
  }
  const response = await fetch(indexPriceApi, {
    method: "GET",
  });
  return response.json();
};
