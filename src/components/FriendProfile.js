function FriendProfile(props) {
  const profile = props.profile;
  return (
    <li className="user-contents">
      <img
        className="user-img"
        src={"assets/profile0" + profile.id + ".jpg"}
        alt={profile.name}
      />
      <div className="user-content">
        <h4>{profile.name}</h4>
        <p>{profile.describtion}</p>
      </div>
    </li>
  );
}
export default FriendProfile;
