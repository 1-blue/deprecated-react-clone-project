import React from "react";
import ReactDOM from "react-dom";

// css
import "@src/css/reset.css";
import "@src/css/animation.css";
import "@src/css/common.css";

// components
import AppRoutes from "./src/routes/AppRoutes";

// theme
import CustomThemeProvider from "./src/utils/CustomThemeProvider";

// react-query
import { QueryClient, QueryClientProvider } from "react-query";

// recoil
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <CustomThemeProvider>
          <AppRoutes />
        </CustomThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.querySelector("#root"),
);
