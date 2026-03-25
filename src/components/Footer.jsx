export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Alex Marmute · Layout inspired by{" "}
          <a href="https://github.com/tbakerx/Tim-Baker-Personal-Website" target="_blank" rel="noopener noreferrer">
            Tim Baker
          </a>{" "}
          (Ceevee / React resume template) · Built with{" "}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            React
          </a>
        </p>
      </div>
    </footer>
  );
}
