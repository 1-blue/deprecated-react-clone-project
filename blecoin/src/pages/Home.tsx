import React from "react";
import { useQuery } from "react-query";

// fetchers
import { fetchCoins, fetchTickers } from "@src/fetchers";

// common-components
import HeadInfo from "@src/components/common/HeadInfo";
import Title from "@src/components/common/Title";

// components
import Coin from "@src/components/Coin";
import Spinner from "@src/components/common/Spinner";

interface ICoin {
  id: string;
  is_active: boolean;
  is_new: false;
  name: string;
  rank: number;
  symbol: string;
  type: string;
}
interface ITicker {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

const Home = () => {
  const { isLoading: isLoadingCoins, data: coins } = useQuery<ICoin[]>("all-coins", fetchCoins);
  const { isLoading: isLoadingTickers, data: tickers } = useQuery<ITicker[]>("all-tickers", () => fetchTickers());

  return (
    <>
      <HeadInfo title="Blecoin | HOME" />

      <Title>🪙Coin🪙</Title>

      {isLoadingCoins || isLoadingTickers ? (
        <Spinner />
      ) : (
        <ul>
          {coins?.slice(0, 100).map((coin, index) => (
            <Coin
              key={coin.id}
              id={coin.id}
              symbol={coin.symbol}
              name={coin.name}
              price={tickers?.[index].quotes.USD.price as number}
              market_cap_change_24h={tickers?.[index].quotes.USD.market_cap_change_24h as number}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
