import './Projects.css';

const projects = [
   { title: "Project Alpha", description: "A groundbreaking project that revolutionized our client’s business.", imgSrc: "/images/project1.png" },
   { title: "Project Beta", description: "An innovative solution that boosted productivity by 30%.", imgSrc: "/images/project2.png" },
   { title: "Project Gamma", description: "A comprehensive project that resulted in a 50% increase in customer satisfaction.", imgSrc: "/images/project3.png" },
];

const Projects = () => {
   return (
      <section className="projects-section">
         <h2 className="section-title">Our Work</h2>
         <div className="projects-container">
            {projects.map((project, index) => (
               <div key={index} className="project-card">
                  <img src={project.imgSrc} alt={project.title} className="project-photo" />
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Projects;
