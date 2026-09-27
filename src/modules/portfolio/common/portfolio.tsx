import { useEffect, useState } from "react";

import '../../common/listed-items-blog-style.css'
import MarkdownRedefined from "../../common/markdownRedefined";

function PortfolioDetail(attr: { category: string, id: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState<string>('');
    console.log(attr.id);
  useEffect(() => {
    if (!attr.id) return;
    
    // Wir bauen den Pfad dynamisch zusammen
    const url = `https://raw.githubusercontent.com/justusdecker/webpage-data/main/portfolio/${attr.category}/${attr.id}.md`;
    
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Artikel nicht gefunden");
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => setContent(`# Fehler\nDer Artikel konnte nicht geladen werden: ${err.message}`))
      .finally(() => setIsLoading(false));
  }, [attr.id]);
  if (isLoading) {
    return (
      <>
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Lade Markdown-Inhalte...</p>
        </div>
      </>
    );
  }
  return (
      <div className="portfolio-detail "><MarkdownRedefined>{content}</MarkdownRedefined></div>
  );
}


// Passe das Interface an deine echte JSON-Struktur der Portfolios an
interface PortfolioMetadata {
  id: string;
  title: string;
  icon?: string;
  url?: string; // Falls in der JSON die direkte URL steht
  category: string;
  [key: string]: any;
}

export default function PortfolioIndex() {
  const [posts, setPosts] = useState<PortfolioMetadata[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // 1. Portfolios von den 3 Kategorien zusammenfügen
  useEffect(() => {
    const categories = ['dev', 'craft', 'art'];

    Promise.all(
      categories.map((cat) =>
        fetch(`https://raw.githubusercontent.com/justusdecker/webpage-data/main/portfolio/${cat}/index.json`)
          .then((res) => {
            if (!res.ok) throw new Error(`Fehler beim Laden von ${cat}`);
            return res.json();
          })
          .catch((err) => {
            console.error(err);
            return [];
          }).then((data: any[]) => {
            // Füge jedem Element in diesem Array die Kategorie hinzu
            
            return data.map((item) => ({
              ...item,
              category: cat,
            }));
          })
      )
      
    ).then((results) => {
      const allPosts = results.flat();
      setPosts(allPosts);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Lade Portfolios...</p>;
  }

  if (!posts || posts.length === 0) {
    return <p>Keine Portfolios gefunden.</p>;
  }

  return <PortfolioCarousel portfolios={posts} />;
}

// 2. Das angepasste Carousel (Skill-Abhängigkeiten entfernt)
interface PortfolioCarouselProps {
  portfolios: PortfolioMetadata[];
}

export const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({ portfolios }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalTime = 60000; // 15 Sekunden pro Element

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolios.length);
      setIsAnimating(false);
    }, 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolios.length) % portfolios.length);
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
  }, [currentIndex, portfolios.length]);

  if (!portfolios || portfolios.length === 0) return null;

  const currentPortfolio = portfolios[currentIndex];

  return (
    <div className="portfolio-carousel-container">
      
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
          <span className={`left-rot carousel-inner-span`}>
            
            <div className="carousel-text-box">
              <div className="carousel-fileloader-wrapper no-carousel-overflow">
                {/* Passe den Pfad an, je nachdem wo deine Portfolio-Inhalte auf GitHub liegen */}
                <PortfolioDetail category={currentPortfolio.category} id={currentPortfolio.id}/>
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
          {portfolios.map((_, idx) => (
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