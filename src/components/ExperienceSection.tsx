import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Developer & Technical Trainer",
    company: "Technical Hub",
    period: "2024 – Present",
    description:
      "Working as a Web Developer building and maintaining full-stack web applications, while simultaneously serving as a Technical Trainer — training students and professionals in HTML, CSS, JavaScript, React, Node.js, and databases. Both roles carried out in parallel with 2 years of combined experience.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 px-4">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Where I've <span className="text-gradient">worked</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary glow-primary" />

                <div className="glass rounded-xl p-6">
                  <p className="font-mono text-primary text-xs mb-2">{exp.period}</p>
                  <h4 className="text-foreground font-semibold text-lg">{exp.role}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
