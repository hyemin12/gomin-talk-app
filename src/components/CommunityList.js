import { data_site } from "../data/data_site.js";

function CommunityList() {
  const community = data_site.community;
  return (
    <ul className="community-list">
      {community &&
        community.map((cafe) => {
          return (
            <li className="community-list-item" key={cafe.name}>
              <div onClick={() => {}}>
                <img className="community-img" src={cafe.img} alt={cafe.name} />
                <div className="overlay"> </div>
                <div className="community-content">
                  <span className="site-official">official</span>
                  <h4>{cafe.name}</h4>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
}
export default CommunityList;
