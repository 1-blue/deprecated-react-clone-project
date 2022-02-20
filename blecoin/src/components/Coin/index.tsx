import React from "react";

// styled-components
import { Wrapper } from "./style";

interface ICoin {
  id: string;
  symbol: string;
  name: string;
  price: number;
  market_cap_change_24h: number;
}

const Coin = ({ id, symbol, name, price, market_cap_change_24h }: ICoin) => {
  return (
    <li>
      <Wrapper to={`/${id}`} state={{ symbol, name }} $upperLimit={market_cap_change_24h > 0}>
        <img
          src={`https://cryptoicon-api.vercel.app/api/icon/${symbol.toLocaleLowerCase()}`}
          alt="coin-image"
          className="coin-image"
        />
        <div className="coin-data">
          <span className="coin-name">{name}</span>
          <span className="coin-price">$ {price.toFixed(6)}</span>
          <span className="coin-change-rate">{market_cap_change_24h}%</span>
        </div>
      </Wrapper>
    </li>
  );
};

export default Coin;
