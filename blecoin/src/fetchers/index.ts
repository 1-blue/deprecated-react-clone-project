const baseURL = "https://api.coinpaprika.com/v1";

export const fetchCoins = () => fetch(`${baseURL}/coins`).then(res => res.json());
export const fetchCoin = (coinId: string) => fetch(`${baseURL}/coins/${coinId}`).then(res => res.json());
export const fetchTickers = () => fetch(`${baseURL}/tickers`).then(res => res.json());
export const fetchTicker = (coinId: string) => fetch(`${baseURL}/tickers/${coinId}`).then(res => res.json());
export const fetchOHLCV = (coinId: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 30;
  return fetch(`${baseURL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`).then(res => res.json());
};
