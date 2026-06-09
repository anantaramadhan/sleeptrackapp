import React from 'react';

const features = [
  {
    num: '01',
    icon: '🌙',
    title: 'Prediksi Kualitas Tidur',
    desc: 'Pantau durasi dan fase tidur Anda secara otomatis. Sistem AI kami mendeteksi pola dan memberikan skor kualitas tidur yang akurat.',
    dark: false,
  },
  {
    num: '02',
    icon: '📊',
    title: 'Analisis Data Lengkap',
    desc: 'Laporan detail pola tidur, skor kualitas, dan tren mingguan dalam visualisasi yang indah dan mudah dipahami.',
    dark: true,
  },
  {
    num: '03',
    icon: '🤖',
    title: 'Rekomendasi AI Personal',
    desc: 'AI kami mempelajari kebiasaan unik Anda dan memberikan saran personal yang disesuaikan untuk meningkatkan kualitas tidur.',
    dark: false,
  },
];

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features__inner">
        <div className="features__header">
          <span className="section-label">Fitur Unggulan</span>
          <h2 className="section-title">
            Semua yang Kamu Butuhkan<br />
            untuk <span className="italic-accent">Tidur Lebih Baik</span>
          </h2>
          <p className="section-subtitle">
            Fitur dirancang untuk membantu Anda memahami dan meningkatkan kualitas
            tidur, mulai dari prediksi pola tidur hingga rekomendasi personal.
          </p>
        </div>

        <div className="features__grid">
          {features.map((f) => (
            <div
              key={f.num}
              className={`feature-card${f.dark ? ' feature-card--dark' : ''}`}
            >
              <div className="feature-card__icon">{f.icon}</div>
              <div className="feature-card__num">{f.num}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
