import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "NexStylo",
    role: "Frontend Developer",
    description:
      "A modern web application built with cutting-edge frontend technologies, delivering a sleek and responsive user experience.",
    url: "https://nexstylo.com",
  },
  {
    title: "Jami Solutions",
    role: "Frontend Developer",
    description:
      "A professional solutions platform featuring a polished UI, crafted with modern frameworks and best practices.",
    url: "https://solutions.jami.ltd/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 px-4">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Real-World <span className="text-gradient">Work</span>
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group glass rounded-xl p-6 flex flex-col gap-3 hover:glow-primary transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>
              <span className="text-xs font-mono text-primary/80">
                {project.role}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
