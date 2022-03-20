function ArtistMsg(props) {
  const profile = props.profile;
  const i = props.i;
  return (
    <li className="get-msg-item">
      <img
        src={"../assets/profile0" + profile.id + ".jpg"}
        alt={profile.name}
      />
      <div className="msg">
        <h4>{profile.name}</h4>
        <p>{profile.msg[i].text}</p>
        <span>{profile.msg[i].time}</span>
      </div>
    </li>
  );
}
export default ArtistMsg;
