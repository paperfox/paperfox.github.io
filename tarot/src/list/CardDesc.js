import React from 'react';
import ImageModal from './ImageModal';

function CardDesc({ dataContent }) {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-4 col-6 mb-4">
          <ImageModal dataImg={dataContent.id} dataContent={dataContent} />
        </div>
        <div className="col-lg-6 col-md-7 col-sm-8 mb-4">
          <h2>{dataContent.title}</h2>
          {/* <h3>Upright</h3> */}
          <p className="mb-5">{dataContent.uprightCard}</p>
          {/* <h3>Reversed</h3>
          <p>{dataContent.reverseCard}</p> */}
          {/* <h3>About the Image</h3>
          <p>{dataContent.bkgInfo}</p> */}
          {/* <a href={dataContent.link} target="_blank" rel="noreferrer">Rider-Waite Description</a> */}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-7 col-10">
          <hr className="mb-5" />
        </div>
      </div>
    </div>
  );
}

export default CardDesc;