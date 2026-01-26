const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content bg-slate-800 flex justify-center py-6 ">
        <p className="text-white text-sm font-light">
          &copy; {currentYear} | Designed and coded with 💗 by Ken Hafizh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
