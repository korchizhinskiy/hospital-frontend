/* @refresh reload */
import { render } from "solid-js/web"

import App from "./App"
import { Router } from "solid-app-router"

import "./assets/scss/main.scss"


function Main() {
  return (
    <>
      <Router>
        <App />
      </Router>
    </>
  )
}

render(() => <Main />, document.getElementById("root") as HTMLElement)
