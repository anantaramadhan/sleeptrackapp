import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

const navItems = [
  { path: '/dashboard', icon: '🏠', label: 'Dashboard' },
  { path: '/analisis', icon: '📊', label: 'Analisis Tidur' },
  { path: '/pengaturan', icon: '⚙️', label: 'Pengaturan' },
];

const DashboardLayout = () => {
  const location = useLocation();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      {/* Mobile overlay */}
      {mobileSidebarOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
            zIndex: 49,
          }}
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`dashboard-sidebar${mobileSidebarOpen ? ' open' : ''}`}>
        <div className="dashboard-sidebar__brand">
          <span style={{ width: 10, height: 10, background: 'var(--primary)', borderRadius: '50%', display: 'inline-block' }}></span>
          <span>Sleep </span><span style={{ color: 'var(--primary)' }}>Sync</span>
        </div>

        <nav className="dashboard-sidebar__nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`dashboard-sidebar__nav-item${location.pathname === item.path ? ' active' : ''}`}
              onClick={() => setMobileSidebarOpen(false)}
            >
              <span className="dashboard-sidebar__nav-icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ padding: '16px 12px', borderTop: '1px solid #f0f0f0' }}>
          <Link
            to="/"
            className="dashboard-sidebar__nav-item"
            style={{ color: '#e74c3c' }}
          >
            <span className="dashboard-sidebar__nav-icon">🚪</span>
            Keluar
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="dashboard-main">
        {/* Mobile top bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
        }}>
          <button
            onClick={() => setMobileSidebarOpen(true)}
            style={{
              display: 'none',
              background: 'white',
              border: '1px solid #e5e5e5',
              borderRadius: 8,
              padding: '8px 12px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
            className="dashboard-menu-btn"
          >
            ☰ Menu
          </button>
        </div>

        <Outlet />
      </div>

      {/* Inject mobile menu button via CSS */}
      <style>{`
        @media (max-width: 768px) {
          .dashboard-menu-btn { display: flex !important; }
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
