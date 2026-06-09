import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        {/* Left content */}
        <div className="hero__content">
          <span className="hero__badge">AI Sleep Analysis</span>

          <h1 className="hero__title">
            Tidur Lebih <span className="italic">Cerdas,</span>
            <br />
            Hidup Lebih
            <br />
            Sehat.
          </h1>

          <p className="hero__desc">
            SleepSync menganalisis pola tidur Anda secara real-time dengan
            teknologi AI, memberikan insight personal dan rekomendasi untuk
            kualitas hidup yang lebih baik setiap hari.
          </p>

          <div className="hero__actions">
            <Link to="/login" className="btn btn-primary">
              Mulai Analisis
            </Link>
          </div>
        </div>

        {/* Right visual — gambar dari assets */}
        <div className="hero__visual">
          <img
            src={heroImg}
            alt="SleepSync Dashboard Preview"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
