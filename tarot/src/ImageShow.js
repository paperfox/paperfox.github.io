function ImageShow({ dataId, mediaUrl, link }) {

  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
      <a href={link}>
        <img src={mediaUrl} key={dataId} alt=""/>
      </a>
    </div>
  );
}

export default ImageShow;