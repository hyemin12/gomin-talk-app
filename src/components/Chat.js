function Chat(props) {
  return (
    <section className="chat">
      <div className="chat-top">
        <div className="common-top">
          <h4 className="common-title">CHATS</h4>
          <ul className="common-icon">
            <li className="fas fa-search"></li>
            <li className="fas fa-cog"></li>
          </ul>
        </div>
      </div>
      <h4 className="user-sub-title">최근 채팅방</h4>
      <ul className="chat-list">
        {props.profile.map((a, i) => {
          return (
            <li className="chat-list-item user-contents" key={i}>
              <img
                className="user-img"
                src={"assets/profile0" + (i + 2) + ".jpg"}
                alt="프로필사진"
              />
              <div className="user-content">
                <h4>{props.profile[i].name}</h4>
                <p>{props.profile[i].msg}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Chat;
