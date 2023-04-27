import React from 'react';

function AboutPage() {
  return (
    <div className="container-xxl">
        <h1 className="text-center">About The App</h1>
        <div className="row justify-content-center mb-4">
          <div className="col-xl-5 col-lg-6 col-md-7 col-sm-10">
            <div className="mb-5">
              <p>Paperfox is current the home of an evolving Tarot app. This also serves as a working portfolio for me, Nathalie Garfinkle, and my design, development, and artwork.</p>
              <p>Currently I'm working as a developer in the authenticated space of <a href="https://www.massmutual.com/" target="_blank">MassMutual</a> so my site had been looking a bit sparse and neglected. I decided to start building a tarot app since it pulls together my development and design skills, while also giving me a place to showcase my art. Plus, its fun to build with lots of places I can expand it!</p>
              <p>If I'm not poking away at this, I'm likely doodling up some of the card images, playing with my dog, or out in my garden.</p>
            </div>
            <div className="mb-5">
              <h2>Sources</h2>
              <h3>Writing</h3>
              <p>As I found when I started working on descriptions for the tarot cards, this is very much more art than science. I also very much got the reinforcement that writing is not my jam. I've done my best with all the tools I have and cross referencing the sources below, but feel free to message me if something seems off to you!</p>
              <ul className="mb-4">
                <li>
                  <a href="https://www.shadowscapes.com/Tarot/cardsmain.php?suit=0" target="_blank">Shadowscapes Tarot Deck</a>
                </li>
                <li>
                  <a href="https://wyrmwoodgaming.com/corrupted-tarot/" target="_blank">Corrupted Tarot Deck</a>
                </li>
                <li>
                  <a href="https://www.tarotcardmeanings.net/" target="_blank">Tarot Card Meanings</a>
                </li>
                <li>
                  <a href="https://labyrinthos.co/blogs/tarot-card-meanings-list" target="_blank">Labyrinthos</a>
                </li>
                <li>
                  <a href="https://www.healthmanifested.com/list-of-tarot-cards-in-order/" target="_blank">Health Manifested</a>
                </li>
                <li>
                  <a href="https://chat.openai.com/" target="_blank">Chat GPT-3</a>
                </li>
              </ul>
              <h3>Images</h3>
              <p>Images on this site come from two sources, either I have personally drawn them, or they come from the Rider-Waite-Smith Tarot Deck, which is in the public domain.</p>
              <p>My images are not for reuse or reposting, though if you want one for any reason, please reach out to me and we can probably work something out - <a href="https://www.instagram.com/paperfoxmakesart/" target="_blank">@paperfoxmakesart</a> on instagram.</p>
              <p>Many of the characters in my Tarot images belong to others, please check out their work!</p>
            </div>
            <h2>Where to Find Me</h2>
            <p>You'll find me on the web in these places if you're looking to reach out.</p>
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="m-3">
                  <a href="https://www.linkedin.com/in/paperfox/" target="_blank"><img src="../images/linkedinlogo.svg" alt="linked in" /></a>
              </li>
              <li className="m-3">
                  <a href="https://www.instagram.com/paperfoxmakesart/" target="_blank"><img src="../images/instagramlogo.svg" alt="instagram" /></a>
              </li>
              <li className="m-3">
                  <a href="https://github.com/paperfox" target="_blank"><img src="../images/github-mark.svg" alt="github" /></a>
              </li>
          </ul>
          </div>
        </div>
    </div>
  );
}

export default AboutPage;