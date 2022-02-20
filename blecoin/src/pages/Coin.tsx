import React, { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import styled from "styled-components";

// common-components
import HeadInfo from "@src/components/common/HeadInfo";
import Title from "@src/components/common/Title";
import Spinner from "@src/components/common/Spinner";

// components
import Chart from "@src/components/Chart";

// fetcher
import { fetchCoin, fetchTicker } from "@src/fetchers";
import { dateFormat } from "@src/utils";

interface IRouterState {
  state: {
    symbol: string;
    name: string;
  };
}
interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: false;
  is_active: true;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
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
}

const CoinDescription = styled.p`
  padding: 0.4em 1em;
  margin-bottom: 1.4em;
`;
const CoinOverview = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0.8em 0;
  background-color: rgba(20, 20, 20, 0.6);
  border-radius: 1em;
  margin-bottom: 1.4em;
`;
const CoinOverviewList = styled.li`
  text-align: center;

  & .overview-title {
    font-size: 0.8rem;
    margin-bottom: 0.4em;
  }
  & .overview-contents {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const Coin = () => {
  const { coinId } = useParams<{ coinId: string }>();
  const { state } = useLocation() as IRouterState;
  const titleImageStyle = useMemo(() => ({ width: "40px", height: "40px", marginRight: "0.4em" }), []);
  const { isLoading: isLoadingCoin, data: coin } = useQuery<ICoin>([coinId, "coin"], () => fetchCoin(coinId as string));
  const { isLoading: isLoadingTicker, data: ticker } = useQuery<ITicker>([coinId, "ticker"], () =>
    fetchTicker(coinId as string),
  );

  if (isLoadingCoin || isLoadingTicker || !state) return <Spinner />;

  return (
    <>
      <HeadInfo
        title={`Blecoin | ${coin?.name.toLocaleLowerCase()}`}
        description={`코인 클론 사이트 | ${coin?.description}`}
        image={`https://cryptoicon-api.vercel.app/api/icon/${state.symbol.toLocaleLowerCase()}`}
      />

      <Title>
        <img
          src={`https://cryptoicon-api.vercel.app/api/icon/${state.symbol.toLocaleLowerCase()}`}
          alt="coin-image"
          style={titleImageStyle}
        />
        <span>{state.name}</span>
      </Title>

      <Chart coinId={coinId as string} />

      <CoinOverview>
        <CoinOverviewList>
          <h6 className="overview-title">Rank</h6>
          <span className="overview-contents">{coin?.rank}</span>
        </CoinOverviewList>
        <CoinOverviewList>
          <h6 className="overview-title">Symbol</h6>
          <span className="overview-contents">{coin?.symbol}</span>
        </CoinOverviewList>
        <CoinOverviewList>
          <h6 className="overview-title">start date</h6>
          <span className="overview-contents">{dateFormat(new Date(coin?.started_at as string), "YYYY-MM-DD")} </span>
        </CoinOverviewList>
      </CoinOverview>

      <CoinDescription>{coin?.description}</CoinDescription>

      <CoinOverview>
        <CoinOverviewList>
          <h6 className="overview-title">유통량</h6>
          <span className="overview-contents">{ticker?.circulating_supply}</span>
        </CoinOverviewList>
        <CoinOverviewList>
          <h6 className="overview-title">전체공급량</h6>
          <span className="overview-contents">{ticker?.total_supply} </span>
        </CoinOverviewList>
        <CoinOverviewList>
          <h6 className="overview-title">최대공급량</h6>
          <span className="overview-contents">{ticker?.max_supply}</span>
        </CoinOverviewList>
      </CoinOverview>
    </>
  );
};

export default Coin;
