import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import photoAnanta  from '../assets/ant.jpeg';
import photoDoni    from '../assets/donnz.jpg';
import photoAdina   from '../assets/adinaconie.jpeg';
import photoNasywa  from '../assets/naswa.jpeg';
import photoAriella from '../assets/ariella.jpeg';
import photoSamsi   from '../assets/samsi.jpeg';

const teamMembers = [
  {
    id: 1,
    name: 'Ananta Ramadhan Putra F',
    role: 'Web Developer',
    university: 'Politeknik Negeri Jember',
    photo: photoAnanta,
    github:   'https://github.com/anantaramadhan',
    linkedin: 'https://www.linkedin.com/in/ananta-ramadhan-827141362/',
    email:    'anantaramadhan00@gmail.com',
  },
  {
    id: 2,
    name: 'Doni Hermawan',
    role: 'Web Developer',
    university: 'Politeknik Negeri Jember',
    photo: photoDoni,
    github:   'https://github.com/Donnz9',
    linkedin: 'https://www.linkedin.com/in/doni-hermawan-225b66325/',
    email:    'donihermawwan@gmail.com',
  },
  {
    id: 3,
    name: 'Adina Connie',
    role: 'Data Scientist',
    university: 'Universitas Tarumanagara',
    photo: photoAdina,
    github:   'https://github.com/adsplendid88',
    linkedin: 'www.linkedin.com/in/adina-connie-559566390',
    email:    'adina.825230062@stu.untar.ac.id',
  },
  {
    id: 4,
    name: 'Nasywa Putri Palensia W',
    role: 'Data Scientist',
    university: 'Universitas Airlangga',
    photo: photoNasywa,
    github:   'https://github.com/',
    linkedin: ' https://www.linkedin.com/in/nasywa-putri-palensia-winarta-355b1b287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    email:    'palensia.2005@gmail.com',
  },
  {
    id: 5,
    name: 'Ariella Asti Cahyani',
    role: 'AI Engineer',
    university: 'Universitas Bina Nusantara',
    photo: photoAriella,
    github:   'https://github.com/ariellaacahyani',
    linkedin: 'https://www.linkedin.com/in/ariella-asti-cahyani/',
    email:    'ariellacahyani@gmail.com',
  },
  {
    id: 6,
    name: 'Syamsi Alpiansyah',
    role: 'AI Engineer',
    university: 'Universitas Teknologi Bandung',
    photo: photoSamsi,
    github:   'https://github.com/syamsithirdteen',
    linkedin: 'https://www.linkedin.com/in/syamsi-alpiansyah-4ba3a4411?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    email:    'syamsi.study@gmail.com',
  },
];

const roleStyle = {
  'Web Developer':  { badgeBg: 'rgba(230,250,245,0.92)', badgeColor: '#0d8c6a', textColor: '#0d8c6a' },
  'Data Scientist': { badgeBg: 'rgba(238,236,255,0.92)', badgeColor: '#4c3dcc', textColor: '#4c3dcc' },
};

const TeamCard = ({ member }) => {
  const [imgError, setImgError] = useState(false);
  const style = roleStyle[member.role] || roleStyle['Web Developer'];

  return (
    <div className="team-card">
      <div className="team-card__top">
        <span>
          {member.role}
        </span>

        <div className="team-card__photo-wrap">
          {!imgError ? (
            <img
              src={member.photo}
              alt={`Foto ${member.name}`}
              className="team-card__photo"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="team-card__avatar-fallback">
              {member.name.charAt(0)}
            </div>
          )}
        </div>
      </div>

      <div className="team-card__body">
        <h3 className="team-card__name">{member.name}</h3>
        <p className="team-card__role-text" style={{ color: style.textColor }}>
          {member.role}
        </p>
        <div className="team-card__uni">
          <span>🏫</span>
          <span>{member.university}</span>
        </div>
        <div className="team-card__socials">
          <a href={member.github}   target="_blank" rel="noopener noreferrer" className="team-card__social" title="GitHub">GH</a>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-card__social" title="LinkedIn">in</a>
          <a href={member.email}    className="team-card__social" title="Email">✉</a>
        </div>
      </div>
    </div>
  );
};

const Team = () => (
  <section className="team" id="team">
    <div className="team__inner">
      <div className="team__header">
        <span className="section-label">Tim Kami</span>
        <h2 className="section-title">
          Orang-orang di Balik <span className="italic-accent">SleepSync</span>
        </h2>
        <p className="section-subtitle">
          Tim kami terdiri dari para profesional berdedikasi yang bersemangat
          menghadirkan inovasi terbaik untuk kesehatan tidur Anda.
        </p>
      </div>

      {/* Swiper — semua ukuran layar */}
      <div className="team-swiper-wrapper">
        <Swiper
          className="team-swiper"
          modules={[Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            // mobile kecil
            400:  { slidesPerView: 1.15, spaceBetween: 14 },
            // mobile
            600:  { slidesPerView: 2,    spaceBetween: 16 },
            // tablet
            768:  { slidesPerView: 2.5,  spaceBetween: 20 },
            // tablet besar
            1024: { slidesPerView: 4,    spaceBetween: 22 },
            // desktop
            1280: { slidesPerView: 4,    spaceBetween: 24 },
          }}
          a11y={{
            prevSlideMessage: 'Slide sebelumnya',
            nextSlideMessage: 'Slide berikutnya',
          }}
        >
          {teamMembers.map((m) => (
            <SwiperSlide key={m.id}>
              <TeamCard member={m} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
);

export default Team;
