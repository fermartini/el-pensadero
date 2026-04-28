import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticulasMagicas() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          particles: {
            number: {
              value: 70,
              density: { enable: true, value_area: 800 },
            },
            color: { value: ["#B39D4E", "#FFF8D6", "#DAA520"] },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.2, max: 0.8 },
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
              }
            },
            size: {
              value: { min: 1, max: 4 },
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
                sync: false
              }
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "top",
              random: true,
              straight: false,
              outModes: {
                default: "out"
              }
            },
          },
          background: { color: "transparent" },
        }}
      />
    </div>
  );
}
