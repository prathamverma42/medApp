import React from "react";
import HomeNavTop from "../HomeNavTop";
import { Route } from "react-router-dom";
import { Button } from "react-bootstrap";
function Home() {
  return (
    <div>
      <HomeNavTop />
      <h1>Home</h1>

      <div style={{ height: "50px" }}></div>
      <Route
        render={({ history }) => (
          <Button
            variant="info"
            onClick={() => {
              history.replace(`/dashboard`);
            }}
          >
            Go Somewhere
          </Button>
        )}
      />
    </div>
  );
}

export default Home;
