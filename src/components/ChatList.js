function ChatList(props) {
  const profile = props.profile;
  return (
    <li className="chat-list-item user-contents">
      <img
        className="user-img"
        src={"assets/profile0" + profile.id + ".jpg"}
        alt={profile.name}
      />
      <div className="user-content">
        <h4>{profile.name}</h4>
        <p>{profile.msg[0].text}</p>
      </div>
    </li>
  );
}
export default ChatList;
