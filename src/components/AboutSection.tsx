import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Passionate about building <span className="text-gradient">impactful</span> digital solutions
          </h3>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
            I'm a Full Stack Web Developer with 1+ years of professional experience, currently working at Technical Hub.
            I'm deeply interested in learning new technologies and building solutions that make a meaningful impact.
            As a Technical Trainer, I also love sharing knowledge and helping others grow in their development journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: MapPin, label: "Location", value: "Andhra Pradesh, India" },
              { icon: Briefcase, label: "Role", value: "Web Developer & Trainer" },
              { icon: GraduationCap, label: "Experience", value: "1+ Years" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-lg p-5"
              >
                <item.icon size={20} className="text-primary mb-3" />
                <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-foreground font-medium text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
