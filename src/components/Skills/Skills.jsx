import "./Skills.css";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

function Skills() {

  const skills = [
    { icon: <FaJava />, name: "Java", level: "90%" },
    { icon: <SiSpringboot />, name: "Spring Boot", level: "85%" },
    { icon: <FaReact />, name: "React JS", level: "88%" },
    { icon: <SiMysql />, name: "MySQL", level: "82%" },
    { icon: <SiJavascript />, name: "JavaScript", level: "85%" },
    { icon: <FaHtml5 />, name: "HTML", level: "95%" },
    { icon: <FaCss3Alt />, name: "CSS", level: "90%" },
    { icon: <FaGitAlt />, name: "Git", level: "80%" }
  ];

  return (

    <section className="skills" id="skills">

      <h4>MY SKILLS</h4>

      <h2>Technologies I Work With</h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <div className="progress">

              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>

            </div>

            <span>{skill.level}</span>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Skills;