import React from "react";

// styled-component
import { Wrapper } from "./style";

const Spinner = () => {
  return (
    <Wrapper>
      <img
        src="https://cryptoicon-api.vercel.app/api/icon/btc"
        alt="coin-spinner-image"
        className="coin-spinner-image"
      />
    </Wrapper>
  );
};

export default Spinner;
