import { Link, useParams } from "react-router-dom";
import '../common/listed-items-blog-style.css'
import { GitHubRawBaseUrl } from "../common/constants";

const certificates = {
  masterschool: {
    color: "gold",
    pages: [
      "ms",
    ]
  },
  efSet: {
    color: "silver",
    pages: [
      "ef-set",
    ]
  },
  bfsMetall: {
    color: "silver",
    pages: [
      "lerninhalte-metall",
    ]
  },
  berufsorientierung: {
    color: "black",
    pages: [
      "berufsorientierung",
    ]
  }
};


function CertificateOverview() {
  Object.keys(certificates);
  return (
    <>
    {/* Ein 3 x X Grid */}
    <div className="certificate-grid">
    {Object.entries(certificates).map(([key, cert]) => (
        <Link to={`/certificates/${key}`} key={key} className="certificate-link">
          <div className={`certificate-card ${cert.color}`}>
            <div className="image-wrapper carousel">
              {cert.pages.map((page, index) => (
                <img 
                  key={index} 
                  src={`${GitHubRawBaseUrl}webpage-data/main/certificates/${page}.jpg`} 
                />
              ))}
            </div>
          </div>
        </Link>
    ))}
    </div>
    </>
  );
}

function CertificateDetail() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
    {/* Ein 3 x X Grid */}
    Details for : {id}
    </>
  );
}

export {CertificateDetail, CertificateOverview};