import * as React from "react"
import { config } from "node-config-ts"

import { Main } from "./app.styled"
import { Theme, initialTheme, getNextTheme } from "./theme"

const { useState } = React
const { auth0 } = config

function App() {
  const [theme, setTheme] = useState(initialTheme)

  const handleButtonClick = () => setTheme(() => getNextTheme(theme))

  return (
    <Theme.Provider value={theme}>
      <Main theme={theme}>
        <button onClick={handleButtonClick}>Switch Theme</button>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <p>Current theme: {theme}</p>
        {JSON.stringify(auth0)}
      </Main>
    </Theme.Provider>
  )
}

export default App
