import React from 'react';

const About = () => {
  const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
  const heights = [55, 65, 45, 75, 100, 50, 40];

  return (
    <section className="about" id="about">
      <div className="about__inner">
        {/* Visual left */}
        <div className="about__visual">
          {/* #1 badge */}
          <div className="about__badge">
            <div className="about__badge-trophy">🏆</div>
            <div className="about__badge-rank">#1</div>
            <div className="about__badge-label">Sleep App 2026</div>
          </div>

          <div className="about__chart-header">Kualitas Tidur Mingguan</div>

          {/* Bar chart */}
          <div style={{ marginBottom: 8 }}>
            <div className="about__chart-bars">
              {days.map((day, i) => (
                <div key={day} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                  <div
                    className={`about__bar${i === 4 ? ' active' : ''}`}
                    style={{ height: `${heights[i]}%`, width: '100%' }}
                  />
                </div>
              ))}
            </div>
            <div className="about__bar-labels">
              {days.map((d) => (
                <span key={d} className="about__bar-label" style={{ flex: 1, textAlign: 'center' }}>{d}</span>
              ))}
            </div>
          </div>

          {/* Stat cards */}
          <div className="about__stats">
            <div className="about__stat-card">
              <div className="about__stat-val">82</div>
              <div className="about__stat-name">Skor Rata</div>
            </div>
            <div className="about__stat-card">
              <div className="about__stat-val">7.5h</div>
              <div className="about__stat-name">Durasi</div>
            </div>
            <div className="about__stat-card">
              <div className="about__stat-val">4×</div>
              <div className="about__stat-name">REM</div>
            </div>
          </div>
        </div>

        {/* Content right */}
        <div className="about__content">
          <span className="section-label">Tentang Kami</span>
          <h2 className="section-title">
            Tidur yang Baik adalah{' '}
            <span className="italic-accent">Investasi</span>{' '}
            Terbaik Anda
          </h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.75, fontSize: '0.97rem' }}>
            Menjaga pola tidur sangat penting karena berpengaruh langsung pada
            kesehatan dan kualitas hidup. Tidur yang cukup dan teratur membantu
            tubuh memulihkan energi, memperbaiki sel, serta menjaga fungsi otak
            agar tetap optimal. SleepSync hadir untuk membantu Anda memahami dan
            meningkatkan kualitas tidur setiap malam.
          </p>

          <div className="about__checklist">
            {[
              'Analisis tidur berbasis AI yang akurat dan personal',
              'Laporan harian & mingguan yang mudah dipahami',
              'Rekomendasi gaya hidup untuk tidur lebih berkualitas',
            ].map((item) => (
              <div key={item} className="about__check-item">
                <div className="about__check-icon">✓</div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
