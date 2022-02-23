import React from "react";
import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";

// components
import AppRoutes from "@src/routes/AppRoutes";

// theme
import CustomThemeProvider from "@src/utils/CustomThemeProvider";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
  }
  a {
    color: ${({ theme }) => theme.textColor};
  }
`;

const App = () => {
  return (
    <RecoilRoot>
      <CustomThemeProvider>
        <GlobalStyle />
        <AppRoutes />
      </CustomThemeProvider>
    </RecoilRoot>
  );
};

export default App;
