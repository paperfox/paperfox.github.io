import CardModal from './CardModal';


function TarotCard({ data, dataImg, dataContent, tarotContent }) {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-7" id={'tarot-content-' + data}>
      <div className="card text-white bg-dark mb-4">
        <img src={'images/cards/' + dataImg + '.jpg'} className={'card-img-top tarot-' + data} alt="..."/>
        <div className="card-body">
          <CardModal data={data} dataImg={dataImg} dataContent={dataContent} tarotContent={tarotContent} />
        </div>
      </div>
    </div>
  );
}

export default TarotCard;