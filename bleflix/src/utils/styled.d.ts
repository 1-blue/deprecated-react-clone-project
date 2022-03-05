import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    navColor: string;
    lightMainColor: string;
    mainColor: string;
    DarkMainColor: string;
  }
}
