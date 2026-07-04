import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">

        <div className="image-box">
        <img
  src={`${import.meta.env.BASE_URL}profile2.png`}
  alt="Profile"
/>
        </div>

      </div>

      <div className="about-content">

        <span className="section-title">
          ABOUT ME
        </span>

        <h2>
          Building Modern Web Applications
        </h2>

        <p>
          Hello! I'm <strong>Kalyan Kumar</strong>, a Java Full Stack Developer
          passionate about building scalable web applications using Java,
          Spring Boot, React.js, MySQL and modern web technologies.

          I enjoy learning Artificial Intelligence, creating real-world
          projects and continuously improving my skills.
        </p>

        <div className="about-cards">

          <div className="card">
            <h3>3+</h3>
            <span>Projects</span>
          </div>

          <div className="card">
            <h3>1</h3>
            <span>Internship</span>
          </div>

          <div className="card">
            <h3>2024</h3>
            <span>Graduate</span>
          </div>

        </div>

       <a href="/resume.pdf" download>
    <button>
        Download Resume
    </button>
</a>

      </div>

    </section>
  );
}

export default About;