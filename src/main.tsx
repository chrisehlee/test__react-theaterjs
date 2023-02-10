import * as THREE from "three";
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import { editable as e, SheetProvider } from "@theatre/r3f";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import "./index.css";

studio.initialize();
studio.extend(extension);

// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

const App = () => {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        position: [5, 5, -5],
        fov: 75,
      }}
    >
      <SheetProvider sheet={demoSheet}>
        <ambientLight />
        <e.pointLight theatreKey="Light" position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
      </SheetProvider>
    </Canvas>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
