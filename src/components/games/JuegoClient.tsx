import { useState } from "react";
import CanvasImage from "./CanvasImage.tsx";

type Question = {
  question: string;
  answers: Record<string, string>;
};

type Props = {
  questions: Question[];
};

const casas = {
  a: "🦁 Gryffindor",
  b: "🦅 Ravenclaw",
  c: "🐍 Slytherin",
  d: "🦡 Hufflepuff"
};

export default function JuegoClient({ questions }: Props) {
  const [iniciado, setIniciado] = useState(false);
  const [index, setIndex] = useState(0);
  const [respuestas, setRespuestas] = useState<Record<string, number>>({
    a: 0,
    b: 0,
    c: 0,
    d: 0
  });
  const [finalizado, setFinalizado] = useState(false);
  const [casaFinal, setCasaFinal] = useState("");

  const handleRespuesta = (op: string) => {
    setRespuestas((prev) => ({
      ...prev,
      [op]: prev[op] + 1
    }));

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      finalizarTest();
    }
  };

  const finalizarTest = () => {
    const max = Math.max(...Object.values(respuestas));
    const empatadas = Object.entries(respuestas)
      .filter(([_, val]) => val === max)
      .map(([key]) => key);
    const alAzar = empatadas[Math.floor(Math.random() * empatadas.length)];
    setCasaFinal(alAzar);
    setFinalizado(true);
  };

  return (
    <div className="flex justify-center flex-col items-center   p-4">
      <div className="">
      <h2 className="text- xl md:text-3xl font-cinzel text-center text-gray-400 mb-5">
      ¿Quieres saber cual es tu casa de Hogwarts?
  </h2>
      </div>
      
      {/* Contenedor fijo */}
      <div className="w-full max-w-2xl h-[600px] bg-gray-800 rounded-xl shadow-2xl overflow-hidden border-2 border-purple-500">
        
        {/* Contenido con scroll interno */}
        <div className="h-full overflow-y-auto">
          
          {!iniciado ? (
            // Pantalla de inicio
            <div className="flex flex-col justify-center items-center h-full p-6 text-center">
              <h1 className="text-3xl font-bold text-purple-700 mb-6">Test de Casas de Hogwarts</h1>
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all"
                onClick={() => setIniciado(true)}
              >
                Comenzar
              </button>
            </div>
          ) : finalizado ? (
            // Resultado final
            <div className="p-6 ">
              <div className="mb-6 flex justify-center">
                <CanvasImage casa={casaFinal} />
              </div>
              
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => {
                    setIniciado(false);
                    setIndex(0);
                    setRespuestas({ a: 0, b: 0, c: 0, d: 0 });
                    setFinalizado(false);
                    setCasaFinal("");
                  }}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-full font-medium"
                >
                  Volver a jugar
                </button>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
  <a
    href={`https://twitter.com/intent/tweet?text=¡Sos de ${casas[casaFinal]} en el test de casas de Hogwarts! 🧙‍♂️⚡️ Hacelo vos también: https://elpensadero.vercel.app/juegos`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
  >
    Compartir en X (Twitter)
  </a>

  <a
    href={`https://www.facebook.com/sharer/sharer.php?u=https://elpensadero.vercel.app/juegos`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded"
  >
    Compartir en Facebook
  </a>

  <a
    href={`https://api.whatsapp.com/send?text=¡Sos de ${casas[casaFinal]} en el test de casas de Hogwarts! 🧙‍♂️⚡️ Hacelo vos también: https://elpensadero.vercel.app/juegos`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
  >
    Compartir en WhatsApp
  </a>
</div>


                {/* Botones de compartir (igual que antes) */}
                <div className="flex flex-wrap justify-center gap-3">
                  {/* ... tus botones de compartir aquí ... */}
                </div>
              </div>
            </div>
          ) : (
            // Preguntas
            <div className="p-6">
              <div className="mb-8">
                <div className="w-full bg-purple-100 rounded-full h-2.5">
                  <div 
                    className="bg-purple-600 h-2.5 rounded-full" 
                    style={{ width: `${((index + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-white mt-1">
                  Pregunta {index + 1} de {questions.length}
                </p>
              </div>

              <h2 className="text-4xl font-bold text-center mb-8 text-purple-400">
                {questions[index].question}
              </h2>

              <div className="grid gap-4">
                {Object.entries(questions[index].answers).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => handleRespuesta(key)}
                    className="bg-purple-100 hover:bg-purple-200 border border-purple-300 py-4 px-6 rounded-xl text-gray-800 font-medium text-left transition-colors"
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}