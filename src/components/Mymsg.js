import React, { useEffect } from "react";

function Mymsg(props) {
  let reply = props.profile.reply;
  useEffect(() => {
    const savedMsg = localStorage.getItem(`reply${props.profile.id}`);
    const parsedMsg = JSON.parse(savedMsg);
    reply = parsedMsg;
  });

  return (
    <div className="my-msg">
      {reply !== null ? <MsgList reply={reply} /> : null}
      {/* {reply !== null ? <MsgList reply={reply} /> : null} */}
    </div>
  );
}

function MsgList(props) {
  return (
    <ul className="my-msg-list">
      {props.reply.map((a, i) => {
        return (
          <li key={i}>
            <p>
              {props.reply[i].text}
              <span>{props.reply[i].time}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default Mymsg;
