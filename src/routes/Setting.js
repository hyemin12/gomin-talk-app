import Nav from "../components/Nav";
import "../css/routeSetting.scss";

function Setting(props) {
  return (
    <>
      <section className="setting">
        <div className="common-top">
          <h4 className="common-title">MORE</h4>
          <ul className="common-icon">
            <li className="fas fa-sliders-h"></li>
          </ul>
        </div>
        <div className="my-profile">
          <img src="assets/profile.jpg" alt="고혜민" />
          <div className="my-profile-content">
            <h4>고혜민</h4>
            <p>abcdef@naver.com</p>
          </div>
        </div>
        <div className="setting-list-wrapper">
          <h4 className="setting-list-title">DearU</h4>
          <ul className="setting-list">
            <li className="setting-item">
              <div className="setting-item-left">
                <img src="./assets/icon.png" alt="bubble"></img>
                <span>bubble</span>
              </div>
              <i className="more fas fa-angle-right"></i>
            </li>
            <li className="setting-item">
              <div className="setting-item-left">
                <i className="fab fa-gratipay color"></i>
                <span>My bubble</span>
              </div>
              <i className="more fas fa-angle-right"></i>
            </li>
            <li className="setting-item">
              <div className="setting-item-left">
                <i className="fas fa-store"></i>
                <span>STORE</span>
              </div>
              <i className="more fas fa-angle-right"></i>
            </li>
            <li className="setting-item">
              <div className="setting-item-left">
                <i className="fas fa-bullhorn"></i>
                <span>공지사항</span>
              </div>
              <i className="more fas fa-angle-right"></i>
            </li>
            <li className="setting-item">
              <div className="setting-item-left">
                <i className="far fa-question-circle"></i>
                <span>FAQ</span>
              </div>

              <i className="more fas fa-angle-right"></i>
            </li>
          </ul>
        </div>
      </section>
      <Nav />
    </>
  );
}

export default Setting;
