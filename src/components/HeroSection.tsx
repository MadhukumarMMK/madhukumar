import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-primary text-sm md:text-base mb-4 tracking-widest uppercase"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-gradient">Madhukumar</span>
          <br />
          <span className="text-foreground">Munjuluri</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Full Stack Web Developer & Technical Trainer crafting modern web experiences with passion and precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://www.linkedin.com/in/madhukumar-munjuluri-4753b7179"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:glow-primary transition-all duration-300 text-muted-foreground hover:text-primary"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/MadhukumarMMK"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:glow-primary transition-all duration-300 text-muted-foreground hover:text-primary"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.instagram.com/tech_boy_mmk/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:glow-primary transition-all duration-300 text-muted-foreground hover:text-primary"
          >
            <Instagram size={20} />
          </a>
          <a
            href="mailto:madhummk371@gmail.com"
            className="p-3 rounded-full glass hover:glow-primary transition-all duration-300 text-muted-foreground hover:text-primary"
          >
            <Mail size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="animate-float"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} className="mx-auto" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
