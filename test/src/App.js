import React from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
// import { Scrollbars } from "react-custom-scrollbars";
import "react-circular-progressbar/dist/styles.css";
// import "assets/css/fontawesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import MyRoute from "service/MyRoute";
import Leaderboard from "containers/Leaderboard";
import DataContextContainer from "contexts/DataContextContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <DataContextContainer>
            <MyRoute
              exact
              component={Leaderboard}
            />
          </DataContextContainer>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
