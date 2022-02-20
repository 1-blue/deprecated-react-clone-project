import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";

// layout
import Layout from "@src/layouts/Layout";

// page-components
import Home from "@src/pages/Home";
import Coin from "@src/pages/Coin";
import NotFound from "@src/pages/NotFound";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    font-family: 'Noto Sans', sans-serif;
  }
`;

const AppRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        {/* 글로벌 스타일 */}
        <GlobalStyle />

        {/* react-query-devtools */}
        {process.env.NODE_ENV === "development" ? <ReactQueryDevtools initialIsOpen={true} /> : null}

        {/* 라우팅 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:coinId" element={<Coin />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
