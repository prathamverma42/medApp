import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/pages/Dashboard";
import "./components/FontawesomeIcons";
import Home from "./components/pages/Home";
import BuyMedicine from "./components/pages/BuyMedicine";
import CommonDisease from "./components/pages/CommonDisease";
import DiseaseInfo from "./components/pages/DiseaseInfo";
import UnusedMedicine from "./components/pages/UnusedMedicine";
import CompleteProfile from "./components/pages/CompleteProfile";
import MedicineManager from "./components/pages/MedicineManager";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />

          <Route exact path="/buy-medicine" render={() => <BuyMedicine />} />

          <Route exact path="/dashboard" render={() => <Dashboard />} />

          <Route
            exact
            path="/common-disease"
            render={() => <CommonDisease />}
          />
          <Route
            exact
            path="/medicine-manager"
            render={() => <MedicineManager />}
          />
          <Route
            exact
            path="/unused-medicine"
            render={() => <UnusedMedicine />}
          />
          <Route exact path="/disease-info" render={() => <DiseaseInfo />} />
          <Route
            exact
            path="/complete-profile"
            render={() => <CompleteProfile />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
