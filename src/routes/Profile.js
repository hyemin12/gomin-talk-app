import React from "react";
import { Link } from "react-router-dom";
import MyProfile from "../components/MyProfile";
import FriendProfile from "../components/FriendProfile";
import Nav from "../components/Nav";

import "../css/routeProfile.scss";

function Profile(props) {
  const profile = props.profile;
  return (
    <>
      <section className="profile">
        <MyProfile />
        <div className="profile-friends">
          <h4 className="user-sub-title">내친구 {profile.length}</h4>
          <ul className="profile-friends-list">
            {props.profile.map((a, i) => {
              return (
                <Link to={`/profile/detail${profile[i].id}`} key={i}>
                  <FriendProfile profile={profile[i]} />
                </Link>
              );
            })}
          </ul>
        </div>
      </section>
      <Nav />
    </>
  );
}

export default Profile;
