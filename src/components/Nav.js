import React from "react";
import { Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/nav.scss";

function Nav() {
  return (
    <section className="nav">
      <Switch>
        <>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">
                <i className="fas fa-user active"></i>
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/chat">
                <i className="far fa-comment"></i>
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/community">
                <i className="far fa-newspaper"></i>
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/setting">
                <i className="fas fa-ellipsis-h"></i>
              </Link>
            </li>
          </ul>
        </>
      </Switch>
    </section>
  );
}
export default Nav;
