import styled from "styled-components"
import { Themes } from "./theme"

const backgroundColor = {
  [Themes.Light]: "#ffffff",
  [Themes.Dark]: "#000a12"
}

const foregroundColor = {
  [Themes.Dark]: "#ffffff",
  [Themes.Light]: "#000a12"
}

export const Main = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700");

  background: ${({ theme }) => backgroundColor[theme]};
  color: ${({ theme }) => foregroundColor[theme]};
  font-family: "Roboto", "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
  padding: 2rem 3rem;
  line-height: 1.4;
  letter-spacing: 0.01em;

  text-align: center;
`
