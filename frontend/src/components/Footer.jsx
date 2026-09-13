export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <span>© {year} Felipe Silva Santos</span>
        <span>feito com React + Node.js</span>
      </div>
    </footer>
  );
}
