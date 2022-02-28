import React from "react";
import { useParams, useHistory } from "react-router-dom";

function ProfileDetail(props) {
  let { id } = useParams();
  let history = useHistory();

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
          alt={props.profile[id].name}
        />
        <div className="user-content">
          <h4>{props.profile[id].name}</h4>
          <p>{props.profile[id].describtion}</p>
        </div>
      </div>
    </section>
  );
}

export default ProfileDetail;
