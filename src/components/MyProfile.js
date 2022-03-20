function MyProfile() {
  return (
    <div className="profile-user">
      <div className="common-top">
        <h4 className="common-title">FRIENDS</h4>
        <ul className="common-icon">
          <li className="fas fa-search"></li>
          <li className="fas fa-sliders-h"></li>
        </ul>
      </div>
      <h4 className="user-sub-title">내 프로필</h4>
      <div className="user-contents">
        <img className="user-img" src="assets/profile.jpg" alt="고혜민" />
        <div className="user-content">
          <h4>고혜민</h4>
          <p>졸려..</p>
        </div>
      </div>
    </div>
  );
}
export default MyProfile;
