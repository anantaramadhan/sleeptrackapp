import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__main">
          {/* Brand column */}
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <span className="navbar__logo-dot" style={{ background: 'var(--primary)' }}></span>
              <span>Sleep </span>
              <span>Sync</span>
            </div>
            <p className="footer__brand-desc">
              Platform analisis tidur cerdas berbasis AI untuk membantu Anda
              hidup lebih sehat dan produktif setiap hari.
            </p>
            <div className="footer__social-links">
              {['X', 'ig', 'in', 'gh'].map((s) => (
                <a key={s} href="#" className="footer__social">{s}</a>
              ))}
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <div className="footer__col-title">Navigasi</div>
            <div className="footer__col-links">
              {['Home', 'About', 'Feature', 'Benefits', 'Our Team'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`}>{item}</a>
              ))}
            </div>
          </div>

          {/* Fitur */}
          <div>
            <div className="footer__col-title">Fitur</div>
            <div className="footer__col-links">
              <a href="#">Prediksi Kualitas Tidur</a>
              <a href="#">Analisis Data</a>
              <a href="#">Rekomendasi AI</a>
            </div>
          </div>

          {/* Kontak */}
          <div>
            <div className="footer__col-title">Kontak</div>
            <div className="footer__col-links">
              <a href="#">Email Kami</a>
              <a href="#">Dukungan</a>
              <a href="#">FAQ</a>
              <a href="#">Kebijakan Privasi</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 <span>SleepSync</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
