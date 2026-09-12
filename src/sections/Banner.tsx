function Banner() {
  return (
    <section className="banner" id="home">
      <div className="banner-content">
        <h1>
          Build Your
          <span> Developer Stack</span>
        </h1>

        <p>
          Discover the technologies you need to build modern,
          powerful and scalable applications.
        </p>

        <div className="banner-buttons">
          <button className="explore-button">
            Explore Technologies
          </button>

          <button className="learn-button">
            Learn More
          </button>
        </div>
      </div>

      <div className="banner-image">
        <div className="code-box">
          &lt;Dev Stack /&gt;
        </div>
      </div>
    </section>
  );
}

export default Banner;