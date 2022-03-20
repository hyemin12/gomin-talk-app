import { data_site } from "../data/data_site.js";

function SiteList() {
  const sites = data_site.site;
  return (
    <ul className="community-site-list">
      {sites &&
        sites.map((site) => {
          return (
            <li className="community-site-list-item" key={site.name}>
              <a href={site.href} target="_blank" rel="noreferrer">
                <div className="img-wrapper">
                  <img className="site-img" src={site.img} alt={site.name} />
                  <div className="overlay"></div>
                </div>
                <div className="community-content">
                  <span className="site-official">official</span>
                  <h4>{site.name}</h4>
                </div>
              </a>
            </li>
          );
        })}
    </ul>
  );
}
export default SiteList;
