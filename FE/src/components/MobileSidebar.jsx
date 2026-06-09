import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Feature', href: '#features' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Our Team', href: '#team' },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay${isOpen ? ' active' : ''}`}
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <aside className={`mobile-sidebar${isOpen ? ' open' : ''}`}>
        {/* Header */}
        <div className="mobile-sidebar__header">
          <Link to="/" className="navbar__logo" onClick={onClose}>
            <span className="navbar__logo-dot"></span>
            <span style={{ color: 'var(--text-dark)' }}>Sleep </span>
            <span style={{ color: 'var(--primary)' }}>Sync</span>
          </Link>
          <button className="mobile-sidebar__close" onClick={onClose} aria-label="Tutup menu">
            ✕
          </button>
        </div>

        {/* Navigation links */}
        <nav className="mobile-sidebar__nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-sidebar__nav-item"
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}

          <div style={{ height: 1, background: '#f0f0f0', margin: '12px 20px' }} />

        
        </nav>

        {/* Footer CTA */}
        <div className="mobile-sidebar__footer">
          <Link to="/login" className="btn btn-primary" onClick={onClose}
            style={{ width: '100%', justifyContent: 'center' }}>
            Daftar
          </Link>
          <Link to="/login" className="btn btn-ghost"
            style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
            onClick={onClose}>
            Masuk
          </Link>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
