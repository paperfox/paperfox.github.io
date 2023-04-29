function HomePage() {
  return (
    <body className="container-xxl">
      <header>
        <div className="row justify-content-center mb-4">
          <div className="col-md-4 col-sm-6 text-center">
            <div className="paperfox-logo" />
            <h1 className="text-center">Welp. We have an error.</h1>
          </div>
        </div>
      </header>
      <main>
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <p>How did we get here?</p>
            <img
              alt="Sad Mushroom"
              src="../images/error.png"
            />
          </div>
        </div>
      </main>
      <footer>
          <p className="text-center"><small>© {new Date().getFullYear()} Nathalie Garfinkle</small></p>
      </footer>
    </body>
  );
}

export default HomePage;