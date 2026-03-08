const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Madhukumar Munjuluri</p>
        <p className="font-mono text-xs">Built with ❤️ & React</p>
      </div>
    </footer>
  );
};

export default Footer;
