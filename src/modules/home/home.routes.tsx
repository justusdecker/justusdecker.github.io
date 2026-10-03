import type { RouteObject } from 'react-router-dom';
import '../common/listed-items-blog-style.css';
import './home.css';
import '../common/msgbox.css';
import '../common/loading.css';
import { AboutMeText, StoryText } from '../common/constants';
import { BackgroundShader } from '../components/BackgroundShader';
import SocialLinks from '../common/code/SocialLinks';
import { Header } from '../common/code/header';
import '../common/about_me_profile.css';





const HomeComponent = () => {
  
  return (
    <>


      <BackgroundShader></BackgroundShader>
      <Header/>
      <div className='card'>
        <div id="profile-about-me">
        <div id="pam-img-crop">
          <img 
          id="profile" 
          src={'./avatar_temp.jpeg'}
          alt="Justus Decker Profilbild"/>
        </div>
      <div>
        {AboutMeText.split('\n').map((e, index) => (
              e.trim() !== "" && <p key={index}>{e}</p>
            ))}
        <details>
          <summary>
              Hintergrundstory
          </summary>
          <p>

            {StoryText.split('\n').map((e, index) => (
              e.trim() !== "" && <p key={index}>{e}</p>
            ))}
          </p>
        </details>
      </div>
      
      
      </div>
      </div>
      <SocialLinks></SocialLinks>
    </>
  );
};

// 2. Deine Route bleibt sauber und nutzt einfach die neue Komponente
export const homeRoutes: RouteObject = {
  path: '/home',
  element: <HomeComponent />,
};