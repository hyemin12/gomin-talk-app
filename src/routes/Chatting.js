import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ArtistMsg from "../components/ArtistMsg";

import Mymsg from "../components/Mymsg";

function Chatting(props) {
  let { id } = useParams();
  let history = useHistory();
  const profile = props.profile[id];
  let [replyitem, setreplyitem] = useState(profile.reply);

  // 날짜 시간 가져오기
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[today.getDay()];
  const todayDate =
    year + "년 " + month + "월 " + day + "일 " + dayOfWeek + "요일";

  // 시간 가져오기
  let hours = today.getHours();
  if (hours < 13) {
    hours = "오전 " + (hours - 12);
  } else {
    hours = "오후 " + (hours - 12);
  }
  const minutes = String(today.getMinutes()).padStart(2, "0");

  const currentTime = hours + "시" + minutes + "분";

  // text area 높이 조절
  function handleKeyDown(e) {
    e.target.style.height = "40px";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  // 채팅 보내기
  useEffect(() => {
    localStorage.setItem(`reply${id}`, JSON.stringify(profile.reply));
  }, []);
  function handleSubmit(event) {
    const textarea = document.getElementById("inputbox");
    const replyMsg = {
      text: textarea.value,
      time: currentTime,
    };
    event.preventDefault();
    let replyitemList = [...replyitem];
    replyitemList.push(replyMsg);
    profile.reply.push(replyMsg);
    setreplyitem(replyitemList);
    localStorage.setItem(`reply${id}`, JSON.stringify(replyitemList));
  }
  return (
    <section className="chatting">
      <div className="chatting-wrapper">
        <div className="header-top">
          <i
            className="fas fa-angle-left"
            onClick={() => {
              history.goBack();
            }}
          ></i>
          <h4>{props.profile[id].name}</h4>
          <i className="fas fa-sliders-h"></i>
        </div>
        <div className="date">{todayDate}</div>
        <div className="get-msg-wrapper">
          <ul className="get-msg-list">
            {profile.msg.map((a, i) => {
              return <ArtistMsg profile={profile} i={i} key={i} />;
            })}
          </ul>
        </div>
        <Mymsg profile={profile} />
        <div className="send-msg-wrapper">
          <form onSubmit={handleSubmit}>
            <textarea
              type="text"
              id="inputbox"
              onKeyDown={handleKeyDown}
              onKeyUp={handleKeyDown}
              autoFocus
              required
            >
              {replyitem.text}
            </textarea>
            <button type="submit">
              <i className="far fa-paper-plane" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Chatting;
