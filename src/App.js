import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Oversize from "./routes/Oversize.js";
import StatusBar from "./components/StatusBar.js";
import Profile from "./routes/Profile.js";
import ProfileDetail from "./routes/ProfileDetail.js";
import Chat from "./routes/Chat.js";
import Chatting from "./routes/Chatting.js";
import Community from "./routes/Community.js";
import Setting from "./routes/Setting.js";

import Data from "./data/data.js";

function App() {
  const [profile, profileChange] = useState(Data);
  return (
    <div className="App">
      <Oversize />
      <StatusBar />
      <Switch>
        <>
          <Route exact path="/">
            <Profile profile={profile} />
          </Route>
          <Route path="/profile/detail:id">
            <ProfileDetail profile={profile} />
          </Route>

          <Route exact path="/chat">
            <Chat profile={profile} />
          </Route>

          <Route path="/chat/:id">
            <Chatting profile={profile} profileChange={profileChange} />
          </Route>

          <Route path="/community">
            <Community />
          </Route>

          <Route path="/setting">
            <Setting profile={profile} />
          </Route>
          {/* <Nav profile={profile} /> */}
        </>
      </Switch>
    </div>
  );
}

export default App;
