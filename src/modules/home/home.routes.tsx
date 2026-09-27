import { type RouteObject } from 'react-router-dom';

import Header from '../common/header';
import '../common/listed-items-blog-style.css';
import './home.css';
import '../common/msgbox.css';
import '../common/loading.css';
import { AboutMeText } from '../common/constants';
import { MsgBox } from '../common/msgbox';
import PortfolioIndex from '../portfolio/common/portfolio';
import { Canvas } from '../common/code/canvas';
import { CertificateOverview } from '../certificates/certificates';
import { BackgroundShader } from '../components/BackgroundShader';
import { Toolkit } from '../tools/tools';

import { SkillsCarousel } from './skills';
import SocialLinks from '../common/code/SocialLinks';




const HomeComponent = () => {

  
  return (
    <>
      <Header />

      <BackgroundShader></BackgroundShader>
      
      <MsgBox type='build'>
        <p>Aktuell wird hier noch umgebaut, daher sind einige Seiten möglicherweise unvollständig oder nicht erreichbar! </p>
      </MsgBox>
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
        <SkillsCarousel/>
      </Canvas>

      
        
      <Canvas>
        <PortfolioIndex></PortfolioIndex>
      </Canvas>
      
      <Canvas>
        
        <CertificateOverview />
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