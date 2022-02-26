import React from "react";
import { Link } from "react-router-dom";

function Chat(props) {
  return (
    <section className="chat">
      <div className="chat-top">
        <div className="common-top">
          <h4 className="common-title">CHATS</h4>
          <ul className="common-icon">
            <li className="fas fa-search"></li>
            <li className="fas fa-sliders-h"></li>
          </ul>
        </div>
      </div>
      <h4 className="user-sub-title">최근 채팅방</h4>
      <ul className="chat-list">
        {props.profile.map((a, i) => {
          return (
            <Link to={`/chat/${props.profile[i].id}`} key={i}>
              <li className="chat-list-item user-contents">
                <img
                  className="user-img"
                  src={"assets/profile0" + i + ".jpg"}
                  alt={props.profile[i].name}
                />
                <div className="user-content">
                  <h4>{props.profile[i].name}</h4>
                  <p>{props.profile[i].msg[0].text}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}

export default Chat;
