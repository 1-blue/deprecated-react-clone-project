import React from "react";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";

// components
import AppRoutes from "@src/routes/AppRoutes";

// theme
import CustomThemeProvider from "@src/utils/CustomThemeProvider";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  a {
    color: ${({ theme }) => theme.textColor};
  }
`;

const client = new QueryClient();

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools />
        <CustomThemeProvider>
          <GlobalStyle />
          <AppRoutes />
        </CustomThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
