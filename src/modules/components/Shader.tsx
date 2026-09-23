// src/modules/components/BackgroundShader.tsx
import { useRef, type HTMLAttributes } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface ShaderPlaneProps {
  vertexShader: string;
  fragmentShader: string;
}

interface ShaderProps {
  vertexShader: string;
  fragmentShader: string;
  styles: HTMLAttributes<HTMLDivElement>;
}

function ShaderPlane({vertexShader, fragmentShader} : ShaderPlaneProps) {
    console.log('Build ShaderPlane');

    const materialRef = useRef<THREE.ShaderMaterial>(null!);
    const { size } = useThree();
    
    const uniforms = useRef({
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(size.width, size.height) },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    });

    useFrame((state, delta) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value += delta;
            
            const mouseX = (state.pointer.x + 1) / 2; // currently not working properly
            const mouseY = (state.pointer.y + 1) / 2; // currently not working properly
            materialRef.current.uniforms.uMouse.value.set(mouseX, mouseY);
        }
    });
    return (
        <mesh>
        <planeGeometry args={[2, 2]} />
        <shaderMaterial
            ref={materialRef}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={uniforms.current}
            side={THREE.DoubleSide}
            depthTest={false}
            depthWrite={false}
        />
        </mesh>
    );
}

export function Shader({vertexShader, fragmentShader, styles} : ShaderProps) {
    return (
        <div style={styles}>
        <Canvas camera={{ position: [0, 0, 1] }}>
            <ShaderPlane vertexShader={vertexShader} fragmentShader={fragmentShader} />
        </Canvas>
        </div>
    );
}