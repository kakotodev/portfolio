"use client"; // Obligatoire pour Next.js (interactivité)

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

export default function Background() {
  const [init, setInit] = useState(false);

  // Initialise le moteur une seule fois au montage du composant
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        /* Copie tes réglages ici (adaptés pour TypeScript) */
        fpsLimit: 120,
        particles: {
          number: { value: 100, density: { enable: true, area: 1000 } },
          color: { value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"] },
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 2 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: { enable: true }, // Remplace l'ancien "resize" booléen
          },
          modes: {
            grab: { distance: 140, links: { opacity: 1 } },
          },
        },
        detectRetina: true,
      }}
    />
  );
}