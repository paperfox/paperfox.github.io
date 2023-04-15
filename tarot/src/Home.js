function HomePage() {
  return (
    <div className="container-xxl">
      <header>
        <div className="row justify-content-center mb-4">
          <div className="col-md-4 col-sm-6 text-center">
            <img
              alt="Paperfox Logo"
              src="../images/paperfoxlogo.svg"
              className="d-inline-block align-top mt-4 logo"
            />
            <h1 className="text-center">Work in progress</h1>
          </div>
        </div>
      </header>
      <main>
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <p>Paperfox is the home of Nathalie Garfinkle's design, development, and other works.</p>
            <p>Currently I'm working as a developer in the authenticated space of <a href="https://www.massmutual.com/">MassMutual</a> so my site has been looking a bit sparse and neglected. I decided to start building a tarot app since it pulls together my development and design skills, while also giving me a place to showcase my art. Plus, its fun to build with lots of places I can expand it!</p>
            <p>The tarot app is a work in progress, so feel free to drop me throughts or feedback via instagram, linkedin, or github.</p>
            <p>If I'm not poking away at this, I'm likely doodling up some of the card images, playing with my dog, or out in my garden.</p>
            <br />
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="m-3">
                  <a href="https://www.linkedin.com/in/paperfox/"><img src="../images/linkedinlogo.svg" alt="linkedin" /></a>
              </li>
              <li className="m-3">
                  <a href="https://www.instagram.com/paperfoxmakesart/"><img src="../images/instagramlogo.svg" alt="instagram" /></a>
              </li>
          </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;