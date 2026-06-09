import React from 'react';

const benefits = [
  {
    icon: '💪',
    title: 'Kesehatan Fisik Optimal',
    desc: 'Tidur cukup membantu pemulihan otot, meningkatkan imunitas, dan menjaga metabolisme tubuh tetap optimal.',
  },
  {
    icon: '🧠',
    title: 'Kesehatan Mental Lebih Baik',
    desc: 'Istirahat berkualitas meningkatkan konsentrasi, kreativitas, dan menjaga keseimbangan emosi setiap harinya.',
  },
  {
    icon: '🚀',
    title: 'Produktivitas Meningkat',
    desc: 'Dengan tidur yang teratur dan berkualitas, performa kerja dan fokus Anda akan meningkat secara signifikan.',
  },
];

const Benefits = () => {
  return (
    <section className="benefits" id="benefits">
      <div className="benefits__inner">
        <div className="benefits__header">
          <span className="section-label">Manfaat Nyata</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            Rasakan Perbedaannya
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Manfaat yang akan Anda dapatkan ketika menjaga pola tidur dengan SleepSync
          </p>
        </div>

        <div className="benefits__layout">
          {/* Left feature card */}
          <div className="benefits__left-card">
            <div className="benefits__card-moon">🌙</div>
            <h3 className="benefits__card-title">
              Tidur Lebih Nyenyak Mulai Malam Ini
            </h3>
            <p className="benefits__card-desc">
              Ribuan pengguna telah merasakan peningkatan kualitas tidur yang
              signifikan sejak menggunakan SleepSync. Mulai perjalanan tidur
              lebih baik Anda hari ini.
            </p>
          </div>

          {/* Right benefit list */}
          <div className="benefits__list">
            {benefits.map((b) => (
              <div key={b.title} className="benefit-item">
                <div className="benefit-item__icon">{b.icon}</div>
                <div>
                  <div className="benefit-item__title">{b.title}</div>
                  <div className="benefit-item__desc">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
