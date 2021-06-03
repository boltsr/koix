import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
// import { Scrollbars } from "react-custom-scrollbars";
import "react-circular-progressbar/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
// import Leaderboard from "containers/Leaderboard";
import GlobalStyle from "theme/globalStyle";
import CustomRoute from "services/CustomRoute";
import DataContextContainer from "contexts/DataContextContainer"
// import Leaderboard from "containers/Leaderboard";
function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle/>
        <Switch>
          <DataContextContainer>
            {/* <CustomRoute component={Leaderboard} /> */}
            <CustomRoute path="/" component={() => <div></div>} />
            <Route path="/test" render={() => <div></div>} />
          </DataContextContainer>
        </Switch>
      </Router>
    </div>
  );
}
export default App;