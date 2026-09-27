import React, { useState, useEffect } from 'react';
import { FileLoader } from '../common/fileLoader';
import { GitHubRawBaseUrl, skills } from '../common/constants';
import './SkillsCarousel.css'; // Hier binden wir das saubere CSS ein

const getExperience = (contentName: string) => {
  const skill = skills.find(s => s.icon === contentName);
  if (!skill) return "";

  const [day, month, year] = skill.startdate.split('.').map(Number);
  const startDate = new Date(year, month - 1, day);
  const today = new Date();
  
  let years = today.getFullYear() - startDate.getFullYear();
  const m = today.getMonth() - startDate.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
    years--;
  }

  return years > 0 ? `${years} Jahre` : `${years} Jahr`;
};

export const SkillsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalTime = 15000; // 5 Sekunden pro Element

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
      setIsAnimating(false);
    }, 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
      setIsAnimating(false);
    }, 400);
  };

  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();
    const updateInterval = 50;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / intervalTime) * 100, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        handleNext();
      }
    }, updateInterval);

    return () => clearInterval(timer);
  }, [currentIndex]);

  if (!skills || skills.length === 0) return null;

  const currentLang = skills[currentIndex];

  return (
    <div className="skills-carousel-container">
      
      {/* Fortschrittsbalken ganz oben */}
      <div className="carousel-progress-bar-wrapper">
        <div 
          className="carousel-progress-bar-fill" 
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Hauptinhaltsbereich */}
      <div className="carousel-content-area">
        <div className={`experience carousel-slide ${isAnimating ? 'slide-out' : 'slide-in'}`}>
          <span className={`${(currentIndex % 2) ? 'left-rot' : 'right-rot'} carousel-inner-span`}>
            
            <h1 id="new-font-size" className="carousel-icon-title">
              {currentLang.icon}
            </h1>
            
            <div className="carousel-text-box">
              <h2 className="carousel-experience-text">
                {getExperience(currentLang.icon)}
              </h2>
              <div className="carousel-fileloader-wrapper no-carousel-overflow-low">
                <FileLoader url={`${GitHubRawBaseUrl}webpage-data/main/home/${currentLang.id}`}/>
              </div>
            </div>

          </span>
        </div>
      </div>

      {/* Bedienknöpfe (Vor & Zurück) + Indikatoren */}
      <div className="carousel-controls">
        <button onClick={handlePrev} className="btn">
          &larr; Zurück
        </button>

        <div className="carousel-dots">
          {skills.map((_, idx) => (
            <span
              key={idx}
              className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        <button onClick={handleNext} className="btn">
          Weiter &rarr;
        </button>
      </div>

    </div>
  );
};