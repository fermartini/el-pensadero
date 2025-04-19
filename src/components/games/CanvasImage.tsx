import { useRef, useEffect } from "react";

const CanvasImage = ({ casa }: { casa: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Configura el tamaño del canvas
        canvas.width = 350;
        canvas.height = 300;

        // Fondo oscuro degradado
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#1a1a2e");
        gradient.addColorStop(1, "#16213e");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Dibujar estrellas
        drawStars(ctx, canvas.width, canvas.height);

        // Borde decorativo
        ctx.strokeStyle = "#d4af37";
        ctx.lineWidth = 8;
        ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

        // Texto principal con sombra
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 40px 'Arial', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        // Texto de la casa con efectos especiales
        const houseName = casa === "a" ? "Gryffindor" : 
                         casa === "b" ? "Ravenclaw" : 
                         casa === "c" ? "Slytherin" : "Hufflepuff";
        
        const houseColor = casa === "a" ? "#ae0001" : 
                          casa === "b" ? "#0e1a40" : 
                          casa === "c" ? "#2a623d" : "#ecb939";
        
        const houseEmoji = casa === "a" ? "🦁" : 
                           casa === "b" ? "🦅" : 
                           casa === "c" ? "🐍" : "🦡";

        // Efecto de brillo alrededor del texto
        const glowGradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 50,
          canvas.width / 2, canvas.height / 2, 150
        );
        glowGradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = glowGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Texto de la casa
        ctx.shadowColor = houseColor;
        ctx.shadowBlur = 20;
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 36px 'spectral', sans-serif";
        ctx.fillText("¡Sos de la casa...", canvas.width / 2, canvas.height / 2 - 50);

        // Nombre de la casa con estilo especial
        ctx.font = "bold 60px 'spectral', sans-serif";
        ctx.fillStyle = "#928952";
        ctx.fillText(houseName, canvas.width / 2, canvas.height / 2 + 20);

        // Emoji grande
        ctx.font = "100px spectral";
        ctx.fillText(houseEmoji, canvas.width / 2, canvas.height / 2 + 120);

      }
    }
  }, [casa]);

  // Función para dibujar estrellas titilantes
  const drawStars = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.fillStyle = "#ffffff";
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 1.5;
      const opacity = Math.random();
      
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  };

  // Botón para descargar la imagen generada
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const imageUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = `Resultado_HarryPotter_${casa}.png`;
      link.click();
    }
  };

  return (
    <div className="text-center">
      <canvas 
        ref={canvasRef} 
        className="border-4 border-gold-500 mb-4 shadow-xl rounded-lg"
      />
      <div>
      </div>
    </div>
  );
};

export default CanvasImage;