import React from "react";

// theme
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@src/utils/theme";
import { useQuery } from "react-query";

interface ICustomThemeProvider {
  children: React.ReactNode;
}
interface ITheme {
  theme: string;
}

const CustomThemeProvider = ({ children }: ICustomThemeProvider) => {
  const { data } = useQuery<ITheme>("theme", () => ({ theme: "dark" }));

  return <ThemeProvider theme={data?.theme === "dark" ? darkTheme : lightTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
