import React from "react";
import ReactDOM from "react-dom";

// css
import "@src/css/reset.css";
import "@src/css/animation.css";
import "@src/css/common.css";

// components
import AppRoutes from "@src/routes/AppRoutes";

// theme
import { ThemeProvider } from "styled-components";
import { theme } from "@src/utils/theme";

// react-query
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.querySelector("#root"),
);
