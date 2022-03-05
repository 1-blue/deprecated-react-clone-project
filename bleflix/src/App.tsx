import React from "react";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

// components
import AppRoutes from "@src/routes/AppRoutes";

// theme
import CustomThemeProvider from "@src/utils/CustomThemeProvider";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    overflow-x: hidden;
  }
  a {
    color: ${({ theme }) => theme.textColor};
  }
`;

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <CustomThemeProvider>
        <GlobalStyle />
        <AppRoutes />
      </CustomThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
