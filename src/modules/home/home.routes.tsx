import { type RouteObject } from 'react-router-dom';

import '../common/listed-items-blog-style.css';
import './home.css';
import '../common/msgbox.css';
import '../common/loading.css';
import { AboutMeText } from '../common/constants';
import { Canvas } from '../common/code/canvas';
import { BackgroundShader } from '../components/BackgroundShader';
import { Toolkit } from '../tools/tools';
import SocialLinks from '../common/code/SocialLinks';




const HomeComponent = () => {

  
  return (
    <>


      <BackgroundShader></BackgroundShader>

      <Canvas>
        <div id="profile-about-me">
        <img 
        id="profile" 
        src={'./avatar_temp.jpeg'}
        alt="Justus Decker Profilbild"
        
      />
      <p>{AboutMeText}</p>
      </div>
      </Canvas>
          
      <Canvas>
        <div>
            <p>Sie sind Recruiter?</p>
            <div className='contact-card-div'>
                <a href="#/portfolio" className="btn contact-card-div-a">Hier entlang</a>
            </div>
        </div>
      </Canvas>
      
      <Toolkit/>
      <SocialLinks></SocialLinks>
    </>
  );
};

// 2. Deine Route bleibt sauber und nutzt einfach die neue Komponente
export const homeRoutes: RouteObject = {
  path: '/home',
  element: <HomeComponent />,
};