import React from "react";
import Nav from "../components/Nav.js";
import SiteList from "../components/SiteList.js";
import CommunityList from "../components/CommunityList.js";

import "../css/routeCommunity.scss";

function Community() {
  return (
    <>
      <section className="community">
        <div className="chat-top">
          <div className="common-top">
            <h4 className="common-title">COMMUNITY</h4>
            <ul className="common-icon">
              <li className="fas fa-search"></li>
              <li className="fas fa-sliders-h"></li>
            </ul>
          </div>
        </div>
        <h4 className="user-sub-title">추천 사이트</h4>
        <SiteList />
        <h4 className="user-sub-title">저장한 커뮤니티</h4>
        <CommunityList />
      </section>
      <Nav />
    </>
  );
}

export default Community;
