function HomePage() {
  return (
    <body className="container-xl">
      <header>
        <div className="row justify-content-center mb-4">
          <div className="col-md-4 col-sm-6 text-center">
            <img
              alt="Paperfox Logo"
              src="../images/paperfoxlogo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top mt-4"
            />
            <h1 className="text-center mb-4">Work in progress</h1>
          </div>
        </div>
      </header>
      <main>
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <p>Paperfox.net is the home of Nathalie Garfinkle's design, development, and other works.</p>
            <p>Currently I'm working in the authenticated space of <a href="https://www.massmutual.com/">MassMutual</a> so my site is looking a bit sparse and neglected. Having explored a mix of development and design roles in the last 10+ years, I'm spending most my time on the development side of things as of late.</p>
            <p>In my free time, I'm working on paintings and illustrations of the many things I love (books, games, my lovely doggos, and more!). I've also started gardening, because who hasn't in some form these last couple years?</p>
            <br />
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
                  <a href="https://www.linkedin.com/in/paperfox/"><img src="../images/linkedinlogo.svg" alt="linkedin" /></a>
              </li>
              <li>
                  <a href="https://www.instagram.com/paperfoxmakesart/"><img src="../images/instagramlogo.svg" alt="instagram" /></a>
              </li>
          </ul>
          </div>
        </div>
      </main>
      <footer>
          <p className="text-center"><small>© 2021 Nathalie Garfinkle</small></p>
      </footer>
    </body>
  );
}

export default HomePage;