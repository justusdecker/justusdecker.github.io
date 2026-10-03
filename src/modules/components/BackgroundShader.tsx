// src/modules/components/BackgroundShader.tsx
import React from 'react';

import vertexShader from '../../shaders/wave.vert?raw';
import fragmentShader from '../../shaders/wave.frag?raw';
import { Shader } from './Shader';

export const BackgroundShader: React.FC = () => {
  return (
    <Shader vertexShader={vertexShader} fragmentShader={fragmentShader} styles={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></Shader>
  );
};