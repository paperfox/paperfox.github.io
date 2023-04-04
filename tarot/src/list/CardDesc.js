import React, { Fragment } from 'react';

function CardDesc({ dataContent }) {

  return (
    <div className="row justify-content-center">
      <div className="col-lg-3 col-sm-4 mb-4">
        <img src={'/images/cards/' + dataContent.id + '.jpg'} className="w-100 rounded" alt={'Image of ' + dataContent.title + ' card'}/>
      </div>
      <div className="col-lg-5 col-md-7 col-sm-8 mb-4">
      <h2>{dataContent.title}</h2>
        {/* <h3>Divinatory Meanings</h3> */}
        <p>{dataContent.uprightCard}</p>
        {/* <h3>Reversed</h3>
        <p>{dataContent.reverseCard}</p> */}
        {/* <h3>About the Image</h3>
        <p>{dataContent.bkgInfo}</p> */}
        {/* <a href={dataContent.link} target="_blank" rel="noreferrer">Rider-Waite Description</a> */}
      </div>
    </div>
  );
}

export default CardDesc;