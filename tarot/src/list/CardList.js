import React, { useState } from 'react';
import CardDesc from './CardDesc';
import SectionArray from '../static/Section-content';
import SectionDesc from './SectionDesc';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';

function CardList({ tarotContent }) {
  const sectionContent = SectionArray();
  
  const [filteredCards, setFilteredCards] = useState(tarotContent)
  const [artStatus, setArtStatus] = useState()

  // Using Set to filter unique values
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

  const clearFilters = () => {
    setArtStatus(tarotContent)
  }

  return (
    <div className="container-xxl">
      <h1 className="text-center">Complete Card Listing</h1>
      <div className="row justify-content-center mb-4">
        <div className="col-auto">
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="Filter cards shown by art">
              <Button variant="secondary" onClick={handleClickComplete}>Completed Art</Button> <Button variant="secondary" onClick={handleClickDraft}>In Progress Art</Button>
            </ButtonGroup>

            <ButtonGroup aria-label="Clear Filters">
              <Button variant="secondary" onClick={handleClickReset}>X</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>
        
      <div className="row justify-content-center mb-4">
        <div className="col-lg-2 col-md-3">
          <ul className="list-unstyled h4 mx-2 side-nav">
            <li><a href="#Major-sectionTitle">Major Arcana</a></li>
            <li><a href="#Wands-sectionTitle">Minor Arcana - Wands</a></li>
            <li><a href="#Cups-sectionTitle">Minor Arcana - Cups</a></li>
            <li><a href="#Swords-sectionTitle">Minor Arcana - Swords</a></li>
            <li><a href="#Pentacles-sectionTitle">Minor Arcana - Pentacles</a></li>
          </ul>
        </div>
        <div className="col-lg-10 col-md-9">
          {sectionContent.filter(desc => desc.id.includes('Major')).map(sectionHeading => (
            <SectionDesc sectionData={sectionHeading} />
          ))}
          {filteredCards.filter(desc => desc.id <= 21).map(exampleCard => (
            <CardDesc dataContent={exampleCard} key={exampleCard.id}/>
          ))}

          {sectionContent.filter(desc => desc.id.includes('Wands')).map(sectionHeading => (
            <SectionDesc sectionData={sectionHeading} />
          ))}
          {filteredCards.filter(desc => desc.title.includes('of Wands')).map(exampleCard => (
            <CardDesc dataContent={exampleCard} key={exampleCard.id}/>
          ))}

          {sectionContent.filter(desc => desc.id.includes('Cups')).map(sectionHeading => (
            <SectionDesc sectionData={sectionHeading} />
          ))}
          {filteredCards.filter(desc => desc.title.includes('of Cups')).map(exampleCard => (
            <CardDesc dataContent={exampleCard} key={exampleCard.id}/>
          ))}

          {sectionContent.filter(desc => desc.id.includes('Swords')).map(sectionHeading => (
            <SectionDesc sectionData={sectionHeading} />
          ))}
          {filteredCards.filter(desc => desc.title.includes('of Swords')).map(exampleCard => (
            <CardDesc dataContent={exampleCard} key={exampleCard.id}/>
          ))}

          {sectionContent.filter(desc => desc.id.includes('Pentacles')).map(sectionHeading => (
            <SectionDesc sectionData={sectionHeading} />
          ))}
          {filteredCards.filter(desc => desc.title.includes('of Pentacles')).map(exampleCard => (
            <CardDesc dataContent={exampleCard} key={exampleCard.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardList;