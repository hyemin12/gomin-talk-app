import React from "react";
import { useParams, Link } from "react-router-dom";

function Chatting(props) {
  let { id } = useParams();

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[today.getDay()];
  let todayTime =
    year + "년 " + month + "월 " + day + "일 " + dayOfWeek + "요일";

  console.log(props.profile[id]);
  console.log(props.profile[id].msg);
  console.log(props.profile[id].msg.length);
  return (
    <section className="chatting">
      <div className="header-top">
        <Link to="/chat">
          <i className="fas fa-angle-left"></i>
        </Link>
        <h4>{props.profile[id].name}</h4>
        <i className="fas fa-sliders-h"></i>
      </div>
      <div className="date">{todayTime}</div>
      <div className="get-msg-wrapper">
        <ul className="get-msg-list">
          {props.profile[id].msg.map((a, i) => {
            return (
              <li className="get-msg-item" key={i}>
                <img
                  src={"../assets/profile0" + id + ".jpg"}
                  alt={props.profile[id].name}
                />
                <div className="msg">
                  <h4>{props.profile[id].name}</h4>
                  <p>{props.profile[id].msg[i].text}</p>
                  <span>{props.profile[id].msg[i].time}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="send-msg-wrapper">
        <textarea type="text" />
        <i className="far fa-paper-plane" type="submit" />
      </div>
    </section>
  );
}

export default Chatting;
