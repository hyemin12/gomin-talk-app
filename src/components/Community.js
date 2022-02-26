import React from "react";

function Community(props) {
  return (
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
      <ul className="community-site-list">
        {props.site.map((a, i) => {
          return (
            <li className="community-site-list-item" key={i}>
              <a href={props.site[i].href} target="_blank" rel="noreferrer">
                <img
                  className="site-img"
                  src={props.site[i].img}
                  alt={props.site[i].name}
                />
                <div className="community-content">
                  <span className="site-official">official</span>
                  <h4>{props.site[i].name}</h4>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
      <h4 className="user-sub-title">저장한 커뮤니티</h4>
      <ul className="community-list">
        {props.mySite.map((a, i) => {
          return (
            <li className="community-list-item" key={i}>
              <div onClick={() => {}}>
                <img
                  className="community-img"
                  src={props.mySite[i].img}
                  alt={props.mySite[i].name}
                />
                <div className="community-content">
                  <span className="site-official">official</span>
                  <h4>{props.mySite[i].name}</h4>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Community;
