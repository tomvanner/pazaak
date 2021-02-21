import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
  }
}

export const darkTheme: DefaultTheme = {
	primaryColor: "#fff",
    secondaryColor: "#cacaca",
};