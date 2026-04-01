import '../common/listed-items-blog-style.css'
import { GitHubRawBaseUrl } from "../common/constants";
import { useRef } from "react";

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
function CertificateImage({src, index, alt}: {src: string, index: number, alt: string}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <img 
        key={index} 
        src={src} 
        alt={alt}
        onClick={() => dialogRef.current?.showModal()}
      />
      <dialog 
        ref={dialogRef} 
        onClick={() => dialogRef.current?.close()} >
        <img src={src} />
      </dialog>
    </>
  )
}

export function CertificateOverview() {
  
  return (
    <>
    {/* Ein 3 x X Grid */}
    <div className="certificate-grid">
    {Object.entries(certificates).map(([key, cert]) => (
        
          <div className={`certificate-card ${cert.color}`}>
            <div className="image-wrapper carousel">
              {cert.pages.map((page, index) => (
                <CertificateImage src={`${GitHubRawBaseUrl}webpage-data/main/certificates/${page}.jpg`} alt={key} index={index} />
              ))}
            </div>
          </div>
    ))}
    </div>
    </>
  );
}