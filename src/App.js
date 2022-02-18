import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Oversize from "./components/Oversize.js";
import StatusBar from "./components/StatusBar.js";
import Profile from "./components/Profile.js";
import Nav from "./components/Nav.js";
import Chat from "./components/Chat.js";
import Community from "./components/Community.js";
import Setting from "./components/Setting.js";
import Data from "./data/data.js";
import SiteData from "./data/data_site.js";
import mySiteData from "./data/data_community.js";

import "./main.scss";

function App() {
  let [profile, profileChange] = useState(Data);
  let [site, siteChange] = useState(SiteData);
  let [mySite, MysiteChange] = useState(mySiteData);
  return (
    <div className="App">
      <Oversize />
      <StatusBar />
      <Switch>
        <>
          <Route exact path="/">
            <Profile profile={profile} />
          </Route>

          <Route path="/chat">
            <Chat profile={profile} />
          </Route>

          <Route path="/community">
            <Community site={site} mySite={mySite} />
          </Route>

          <Route path="/setting">
            <Setting profile={profile} />
          </Route>
        </>
      </Switch>
      <Nav />
    </div>
  );
}

export default App;
