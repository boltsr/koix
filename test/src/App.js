import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
// import { Scrollbars } from "react-custom-scrollbars";
import "react-circular-progressbar/dist/styles.css";
// import "assets/css/fontawesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import MyRoute from "services/MyRoute";
import DataContextContainer from "./contexts/DataContextContainer"
// import Leaderboard from "containers/Leaderboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <DataContextContainer>
            {/* <MyRoute component={Leaderboard} /> */}
            <MyRoute path="/" render={() => <div></div>} />
          </DataContextContainer>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
