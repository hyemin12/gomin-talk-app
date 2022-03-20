import React from "react";
import { Link } from "react-router-dom";
import ChatList from "../components/ChatList";
import Nav from "../components/Nav";

import "../css/routeChat.scss";

function Chat(props) {
  const profile = props.profile;
  return (
    <>
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
          {profile.map((a, i) => {
            return (
              <Link to={`/chat/${profile[i].id}`} key={i}>
                <ChatList profile={profile[i]} />
              </Link>
            );
          })}
        </ul>
      </section>
      <Nav />
    </>
  );
}

export default Chat;
