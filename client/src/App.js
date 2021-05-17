import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/FontawesomeIcons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import BuyMedicine from "./components/pages/BuyMedicine";
import CommonDisease from "./components/pages/CommonDisease";
import DiseaseInfo from "./components/pages/DiseaseInfo";
import UnusedMedicine from "./components/pages/UnusedMedicine";
import CompleteProfile from "./components/pages/CompleteProfile";
import MedicineManager from "./components/pages/MedicineManager";
import SignupCompleteProfile from "./components/pages/SignupCompleteProfile";

import med from "./assets/med1.jpg";
function App() {
  // const [pageicon, setPageicon] = useState();
  const [userid, setUserid] = useState("");

  useEffect(() => {
    console.log("App", userid);
  }, [userid]);
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home userid={userid} setUserid={setUserid} />}
          />

          <Route exact path="/buy-medicine" render={() => <BuyMedicine />} />

          <Route
            exact
            path="/dashboard"
            render={(props) => <Dashboard userid={userid} />}
          />

          <Route
            exact
            path="/common-disease"
            render={() => <CommonDisease />}
          />
          <Route
            exact
            path="/medicine-manager"
            render={(props) => <MedicineManager userid={userid} />}
          />
          <Route
            exact
            path="/unused-medicine"
            render={(props) => <UnusedMedicine userid={userid} />}
          />
          <Route exact path="/disease-info" render={(props) => <DiseaseInfo userid={userid}  />} />
          <Route
            exact
            path="/complete-profile"
            render={() => <CompleteProfile />}
          />
          <Route
            exact
            path="/signup-complete-profile"
            render={(props) => (
              <SignupCompleteProfile userid={userid} setUserid={setUserid} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
