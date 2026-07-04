import "./Hero.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Particles from "../Particles/Particles";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero" id="hero">
       <Particles />
      <div className="hero-left">

        <p className="hello">Hello, I'm</p>

        <h1>
          Kalyan Kumar Miriyala
        </h1>

        <TypeAnimation
  sequence={[
    "Java Full Stack Developer",
    2000,
    "Spring Boot Developer",
    2000,
    "React Developer",
    2000,
    "AI Enthusiast",
    2000,
  ]}
  wrapper="h2"
  speed={50}
  repeat={Infinity}
  className="typing"
/>

        <p className="desc">
          Passionate about creating modern web applications using Java,
          Spring Boot, React and MySQL.
        </p>

        <div className="hero-buttons">

         

          <a href="/resume.pdf" download>
           <button className="btn2">
                 Download CV
            </button>
</a>

        </div>

        <div className="socials">

          <FaGithub />

          <FaLinkedin />

          <FaInstagram />

        </div>

      </div>

      <div className="hero-right">

        <div className="image-circle">

        <img
  src={`${import.meta.env.BASE_URL}profile.png`}
  alt="Profile"
/>

        </div>

      </div>

    </section>
  );
}

export default Hero;