import { Route, Routes } from "solid-app-router"
import { Component } from "solid-js"
import NavigationMenu from "./components/NavigationMenu"

import DoctorsList from "./views/DoctorsList"
import HomePage from "./views/HomePage"
import PatientsList from "./views/PatientsList"
import VisitPage from "./views/VisitPage"

// import styles from './App.module.css';

const App: Component = () => {
  return (
    <>
      <div class="wrapper">
        <div class="container">
          <NavigationMenu />

          <Routes>
            <Route path="/" component={HomePage} />
            <Route path="/doctors_list" component={DoctorsList} />
            <Route path="/patients_list" component={PatientsList} />
            <Route path="/visit" component={VisitPage} />
          </Routes>

        </div>
      </div>
    </>
  )
}

export default App
