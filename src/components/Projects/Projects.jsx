import "./Projects.css";

const projects = [
  {
    title: "Cars-Go",
    tech: "React • Spring Boot • MySQL",
    description:
      "A full-stack car rental application with authentication, bookings, admin dashboard and image upload.",
   image: `${import.meta.env.BASE_URL}carsgo.png`,
  },
  {
    title: "AI Chatbot",
    tech: "React • AI API",
    description:
      "A ChatGPT-inspired chatbot interface with a clean and modern UI.",
    image: `${import.meta.env.BASE_URL}chatbot.jpg`,
  },
  {
    title: "employee management system",
    tech: "React • Spring Boot • MySQL",
    description:
      "A comprehensive employee management system with user roles and permissions.",
    image: `${import.meta.env.BASE_URL}employee.jpg`,
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <p className="section-subtitle">PORTFOLIO</p>

      <h2>Featured Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <span>{project.tech}</span>

              <p>{project.description}</p>

              <div className="project-buttons">
                <button>More Info</button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;