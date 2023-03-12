import React from 'react';
import ReactDOM from 'react-dom/client';

function Blog(props) {
  
  const content = props.tarotContent.map((post) =>
    <div className="col-lg-3 col-sm-4 col-5" id={'tarot-content-' + this.state.data3}>
      <p>{this.state.data3}</p>
      <div className="card text-white bg-dark mb-4" key={post.id}>
        <img src={'images/cards/' + this.state.dataImg3 + '.png'} className={'card-img-top tarot-' + this.state.data3} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}

const tarotContent = [
  {id: 0, title: 'Mushroom', content: 'undefined'},
  {id: 1, title: 'Magician', content: 'This is some sample text for the Magician card'},
  {id: 2, title: 'Death', content: 'This is some sample text for the Death card'},
  {id: 3, title: 'Ace of Wands', content: 'This is some sample text for the Ace of Wands card'},
  {id: 4, title: 'Seven of Wands', content: 'This is some sample text for the Seven of Wands card'},
  {id: 5, title: 'Seven of Cups', content: 'This is some sample text for the Seven of Cups card'}
];

const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(<Blog tarotContent={tarotContent} />);