import React from "react";
// theme
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@src/utils/theme";

interface ICustomThemeProvider {
  children: React.ReactNode;
}

const CustomThemeProvider = ({ children }: ICustomThemeProvider) => {
  return <ThemeProvider theme={true ? darkTheme : lightTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
