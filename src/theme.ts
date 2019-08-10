import { createContext } from "react"

export enum Themes {
  Light = "light",
  Dark = "dark"
}

export const getNextTheme = (theme: Themes): Themes =>
  theme === Themes.Dark ? Themes.Light : Themes.Dark

export const initialTheme = Themes.Light

export const Theme = createContext(initialTheme)
