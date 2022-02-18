function Profile(props) {
  return (
    <section className="profile">
      <div className="profile-user">
        <div className="common-top">
          <h4 className="common-title">FRIENDS</h4>
          <ul className="common-icon">
            <li className="fas fa-search"></li>
            <li className="fas fa-cog"></li>
          </ul>
        </div>
        <h4 className="user-sub-title">내 프로필</h4>
        <div className="user-contents">
          <img className="user-img" src="assets/profile01.jpg" alt="" />
          <div className="user-content">
            <h4>고혜민</h4>
            <p>졸려..</p>
          </div>
        </div>
      </div>
      <div className="profile-friends">
        <h4 className="user-sub-title">내친구 {props.profile.length}</h4>
        <ul className="profile-friends-list">
          {props.profile.map((a, i) => {
            return (
              <li className="user-contents" key={i}>
                <img
                  className="user-img"
                  src={"assets/profile0" + (i + 2) + ".jpg"}
                  alt={props.profile[i].name}
                />
                <div className="user-content">
                  <h4>{props.profile[i].name}</h4>
                  <p>{props.profile[i].describtion}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Profile;
