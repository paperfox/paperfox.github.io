import CardModal from './CardModal';

function TarotCard({ reverseCard, dataImg, dataContent }) {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-7" id={'tarot-content-' + dataImg + reverseCard}>
      <div className="card text-white bg-dark mb-4">
        <img src={'/images/cards/' + dataImg + '.jpg'} className={'card-img-top tarot-' + dataImg + reverseCard} alt="..."/>
        <div className="card-body">
          <CardModal reverseCard={reverseCard} dataImg={dataImg} dataContent={dataContent} />
        </div>
      </div>
    </div>
  );
}

export default TarotCard;