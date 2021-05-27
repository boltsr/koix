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
import BasicStyle from "theme/basicStyle";
import GlobalStyle from "theme/globalStyle";
import GlobalModalStyle from "theme/globalModalStyle";
import MyRoute from "service/MyRoute";
import Leaderboard from "containers/Leaderboard";
import DataContextContainer from "contexts/DataContextContainer";
import AnnounceContextContainer from "contexts/AnnounceContextContainer";
import ScrollContextContainer from "contexts/ScrollContextContainer";

function App() {
  return (
    <div className="App">
      {/* <Scrollbars autoHide style={{ flex: 1 }}> */}
        <BasicStyle />
        <GlobalStyle />
        <GlobalModalStyle />
        <Router>
          <Switch>
            <DataContextContainer>
              <ScrollContextContainer>
                <AnnounceContextContainer>
                  <MyRoute
                    exact
                    component={Leaderboard}
                  />
                </AnnounceContextContainer>
              </ScrollContextContainer>
            </DataContextContainer>
          </Switch>
        </Router>
      {/* </Scrollbars> */}
    </div>
  );
}

export default App;
