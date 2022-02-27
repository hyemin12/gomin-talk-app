import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import Mymsg from "./Mymsg";

function Chatting(props) {
  let { id } = useParams();
  let [replyitem, setreplyitem] = useState();
  const profileId = props.profile[id];

  // 날짜 시간 가져오기
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[today.getDay()];
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const todayDate =
    year + "년 " + month + "월 " + day + "일 " + dayOfWeek + "요일";
  const currentTime = hours + "시" + minutes + "분";

  // text area 높이 조절
  function handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  // 채팅 보내기
  // let replyList = [];
  function handleChange(event) {
    let replyMsg = { text: event.target.value, time: currentTime };
    console.log(replyMsg);
    setreplyitem(replyMsg);
  }
  function handleSubmit(event) {
    localStorage.setItem("reply", JSON.stringify(replyitem));
  }
  console.log(replyitem);
  console.log(profileId.reply);
  return (
    <section className="chatting">
      <div className="header-top">
        <Link to="/chat">
          <i className="fas fa-angle-left"></i>
        </Link>
        <h4>{props.profile[id].name}</h4>
        <i className="fas fa-sliders-h"></i>
      </div>
      <div className="date">{todayDate}</div>
      <div className="get-msg-wrapper">
        <ul className="get-msg-list">
          {profileId.msg.map((a, i) => {
            return (
              <li className="get-msg-item" key={i}>
                <img
                  src={"../assets/profile0" + id + ".jpg"}
                  alt={profileId.name}
                />
                <div className="msg">
                  <h4>{profileId.name}</h4>
                  <p>{profileId.msg[i].text}</p>
                  <span>{profileId.msg[i].time}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {profileId.reply.map((a, i) => {
        return <Mymsg profile={profileId} i={i} key={i} />;
      })}
      <div className="send-msg-wrapper">
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            id="inputbox"
            value={replyitem.text}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyDown}
            onChange={handleChange}
            autoFocus
            required
          >
            {replyitem}
          </textarea>
          <button type="submit">
            <i className="far fa-paper-plane" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Chatting;
