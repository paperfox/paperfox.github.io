import React, { useState, Fragment } from 'react';
import CardDesc from './CardDesc';
import SectionArray from '../static/Section-content';
import SectionDesc from './SectionDesc';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';

function CardList({ tarotContent }) {
  const [filteredCards, setFilteredCards] = useState(tarotContent)
  const sectionContent = SectionArray();
  
  const handleClickComplete = () => {
    setFilteredCards(
      tarotContent.filter(t=>t.artStatus === 'Complete')
    )
  }

  const handleClickDraft = () => {
    setFilteredCards(
      tarotContent.filter(t=>t.artStatus === 'Draft')
    )
  }

  const handleClickReset = () => {
    setFilteredCards(
      tarotContent.filter(t=>t.artStatus)
    )
  }

  return (
    <div className="container-xxl">
      <h1 className="text-center">Complete Card Listing</h1>
      <div className="row justify-content-center mb-4">
        <div className="col-auto">
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="Filter cards shown by art">
              <Button variant="secondary" onClick={handleClickComplete}>Completed Art</Button>
              <Button variant="secondary" onClick={handleClickDraft}>Draft Art</Button>
            </ButtonGroup>

            <ButtonGroup aria-label="Clear Filters">
              <Button variant="secondary" onClick={handleClickReset}>X</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>
        
      <div className="row justify-content-center mb-4">
        <div className="col-lg-2 col-md-3">
          <ul className="list-unstyled h4 side-nav">
            <li><a href="#Major-sectionTitle">Major Arcana</a></li>
            <li><a href="#Wands-sectionTitle"><span>Minor Arcana -</span> Wands</a></li>
            <li><a href="#Cups-sectionTitle"><span>Minor Arcana -</span> Cups</a></li>
            <li><a href="#Swords-sectionTitle"><span>Minor Arcana -</span> Swords</a></li>
            <li><a href="#Pentacles-sectionTitle"><span>Minor Arcana -</span> Pentacles</a></li>
          </ul>
        </div>
        <div className="col-lg-10 col-md-9">
          {sectionContent.filter(desc => desc.id.includes('Major')).map(sectionHeading => (
            <SectionDesc sectionData={sectionHeading} key={sectionHeading.id} />
          ))}
          {filteredCards.filter(desc => desc.cardValue <= 21).map(exampleCard => (
            <CardDesc dataContent={exampleCard} key={exampleCard.cardValue}/>
          ))}

          {sectionContent.slice(1).map((sectionHeading, index) => (
            <Fragment key={sectionHeading.id}>
              <SectionDesc sectionData={sectionHeading} key={sectionHeading.id} />
              {filteredCards.filter(desc => desc.title.includes(sectionHeading.title)).map(exampleCard => (
                <CardDesc dataContent={exampleCard} key={exampleCard.cardValue}/>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardList;