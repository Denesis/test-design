import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <>
        {/* <!-- copyrigth --> */}
        <p className="company">© inConcert</p>

        <div className="politics">
          <p className="links">Aviso Legal</p>
          <p className="links">Política de Privacidad</p>
          <p className="links">Política de Cookies</p>
        </div>
      </>
    </footer>
  );
};

export default Footer;
