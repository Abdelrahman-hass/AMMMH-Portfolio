import React, { Suspense, useEffect, useMemo, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const CLIP_Y = -1.35;

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/models/qyem+2.glb");
  const meshRef = useRef();
  const clippingPlane = useMemo(
    () => new THREE.Plane(new THREE.Vector3(0, 1, 0), -CLIP_Y),
    [],
  );

  useEffect(() => {
    computer.scene.traverse((child) => {
      if (!child.isMesh || !child.material) return;

      const applyClipping = (material) => {
        if (!material) return;
        material.clippingPlanes = [clippingPlane];
        material.clipIntersection = false;
        material.needsUpdate = true;
      };

      if (Array.isArray(child.material)) {
        child.material.forEach(applyClipping);
        return;
      }

      applyClipping(child.material);
    });

    // Recenter the model so rotation feels like it's around the true middle.
    const bounds = new THREE.Box3().setFromObject(computer.scene);
    const center = bounds.getCenter(new THREE.Vector3());
    computer.scene.position.sub(center);
  }, [computer.scene, clippingPlane]);

  useFrame((state, delta) => {
    if (meshRef.current && isMobile) {
      meshRef.current.rotation.y += delta * 0.5; // Adjust rotation speed as needed
    }
  });

  return (
    <mesh ref={meshRef}>
      <ambientLight intensity={0.35} />
      <hemisphereLight intensity={0.6} groundColor="black" color="#4cc9ff" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.8}
        color="#6dd3ff"
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[0, 6, 8]} intensity={2.2} color="#3aa0ff" />
      <pointLight position={[-6, 2, -6]} intensity={1.6} color="#1e4bff" />
      <directionalLight position={[8, 10, 5]} intensity={1.2} color="#7ad7ff" />
      <primitive
        object={computer.scene}
        scale={isMobile ? 3.6 : 5}
        position={isMobile ? [0, -1.6, 0] : [0, -2.1, -1.5]}
        rotation={isMobile ? [0, 0, 0] : [-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={isMobile ? 
        { position: [0, 0, 20], fov: 50 } : 
        { position: [20, 3, 5], fov: 25 }
      }
      gl={{ preserveDrawingBuffer: true }}
      onCreated={({ gl }) => {
        gl.localClippingEnabled = true;
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {!isMobile && (
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
          />
        )}
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
