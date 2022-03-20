import React from "react";
import { useParams, useHistory } from "react-router-dom";

function ProfileDetail(props) {
  const profile = props.profile;
  let { id } = useParams();
  const history = useHistory();
  return (
    <section className="profile-detail">
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        x
      </button>
      <div
        className="bg-img"
        style={{ background: `URL(../assets/profile_bg0${id}.jpg)` }}
      ></div>
      <div className="bg-opacity"></div>
      <div className="user-wrap">
        <img
          className="user-img"
          src={`../assets/profile0${id}.jpg`}
          alt={profile[id].name}
        />
        <div className="user-content">
          <h4>{profile[id].name}</h4>
          <p>{profile[id].describtion}</p>
        </div>
      </div>
    </section>
  );
}

export default ProfileDetail;
