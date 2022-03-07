import React from "react";
import { useRecoilValue } from "recoil";

// theme
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@src/utils/theme";

// atom
import { themeState } from "@src/atoms";

interface ICustomThemeProvider {
  children: React.ReactNode;
}

const CustomThemeProvider = ({ children }: ICustomThemeProvider) => {
  const isDark = useRecoilValue(themeState);

  return <ThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
