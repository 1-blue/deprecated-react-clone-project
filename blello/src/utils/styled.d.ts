import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    navColor: string;
    boardColor: string;
    cardColor: string;
    draggingStartBoardColor: string;
    draggingEndBoardColor: string;
  }
}
