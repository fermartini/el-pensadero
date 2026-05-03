import React, { useState, useEffect, useRef } from 'react';

const RoscoGame = ({ lang, coverImg }) => {
  const roscoData = {
    es: [
      { letter: 'A', definition: 'Mago que puede transformarse en un animal.', answer: 'ANIMAGO' },
      { letter: 'B', definition: 'Criatura que toma la forma de lo que más teme una persona.', answer: 'BOGGART' },
      { letter: 'C', definition: 'Maldición imperdonable que sirve para torturar a la víctima.', answer: 'CRUCIATUS' },
      { letter: 'D', definition: 'Aparato que tiene la capacidad de absorber la luz de otros objetos.', answer: 'DESILUMINADOR' },
      { letter: 'E', definition: 'Criatura doméstica y servicial en el mundo mágico.', answer: 'ELFO' },
      { letter: 'F', definition: 'Apellido del celador de Hogwarts.', answer: 'FILCH' },
      { letter: 'G', definition: 'Banco de los magos en el Callejón Diagon, custodiado por duendes.', answer: 'GRINGOTTS' },
      { letter: 'H', definition: 'Objeto de magia negra donde un mago oculta un trozo de su alma.', answer: 'HORROCRUX' },
      { letter: 'I', definition: 'Maleficio imperdonable que controla la voluntad de la víctima.', answer: 'IMPERIUS' },
      { letter: 'J', definition: 'Nombre de pila del padre de Harry Potter.', answer: 'JAMES' },
      { letter: 'K', definition: 'Apellido del buscador de la selección de Bulgaria.', answer: 'KRUM' },
      { letter: 'L', definition: 'Hechizo que produce luz en la punta de la varita.', answer: 'LUMOS' },
      { letter: 'M', definition: 'Planta curativa cuyo llanto puede matar a quien lo escuche.', answer: 'MANDRAGORA' },
      { letter: 'N', definition: 'Nombre de la serpiente y Horrocrux de Lord Voldemort.', answer: 'NAGINI' },
      { letter: 'Ñ', definition: 'CONTIENE LA Ñ: Criatura de ocho patas, la fobia de Ron Weasley.', answer: 'ARAÑA' },
      { letter: 'O', definition: 'Hechizo utilizado comúnmente para borrar la memoria.', answer: 'OBLIVIATE' },
      { letter: 'P', definition: 'Fuente de piedra donde se almacenan y revisan los pensamientos.', answer: 'PENSADERO' },
      { letter: 'Q', definition: 'Pelota roja usada para marcar puntos en el Quidditch.', answer: 'QUAFFLE' },
      { letter: 'R', definition: 'Encantamiento que provoca cosquillas intensas.', answer: 'RICTUSEMPRA' },
      { letter: 'S', definition: 'Apellido del profesor de Pociones y jefe de Slytherin.', answer: 'SNAPE' },
      { letter: 'T', definition: 'Criatura mágica gigante, de gran fuerza y poca inteligencia.', answer: 'TROL' },
      { letter: 'U', definition: 'Su sangre puede salvar a alguien de la muerte, pero a un precio terrible.', answer: 'UNICORNIO' },
      { letter: 'V', definition: 'Mago tenebroso asesino de los padres de Harry.', answer: 'VOLDEMORT' },
      { letter: 'W', definition: 'Apellido de la familia de magos pelirrojos amigos de Harry.', answer: 'WEASLEY' },
      { letter: 'X', definition: 'Nombre de pila del padre de Luna Lovegood.', answer: 'XENOPHILIUS' },
      { letter: 'Y', definition: 'CONTIENE LA Y: Fantasma que habita en los baños de chicas.', answer: 'MYRTLE' },
      { letter: 'Z', definition: 'CONTIENE LA Z: Prisión mágica custodiada por Dementores.', answer: 'AZKABAN' },
    ],
    en: [
      { letter: 'A', definition: 'A wizard who can transform into an animal at will.', answer: 'ANIMAGUS' },
      { letter: 'B', definition: 'A creature that takes the form of the observer\'s worst fear.', answer: 'BOGGART' },
      { letter: 'C', definition: 'The Unforgivable Curse used for torture.', answer: 'CRUCIATUS' },
      { letter: 'D', definition: 'A device used by Dumbledore to remove light from a source.', answer: 'DELUMINATOR' },
      { letter: 'E', definition: 'A small, magical creature that serves wizarding families.', answer: 'ELF' },
      { letter: 'F', definition: 'The grumpy Hogwarts caretaker.', answer: 'FILCH' },
      { letter: 'G', definition: 'The only wizarding bank in Great Britain.', answer: 'GRINGOTTS' },
      { letter: 'H', definition: 'An object in which a Dark wizard has hidden a fragment of his soul.', answer: 'HORCRUX' },
      { letter: 'I', definition: 'The Unforgivable Curse that controls the victim\'s mind.', answer: 'IMPERIUS' },
      { letter: 'J', definition: 'Harry Potter\'s father\'s first name.', answer: 'JAMES' },
      { letter: 'K', definition: 'The famous Seeker for the Bulgarian National Quidditch team.', answer: 'KRUM' },
      { letter: 'L', definition: 'The wand-lighting charm.', answer: 'LUMOS' },
      { letter: 'M', definition: 'A plant with a fatal cry when mature.', answer: 'MANDRAKE' },
      { letter: 'N', definition: 'Voldemort\'s giant pet snake.', answer: 'NAGINI' },
      { letter: 'O', definition: 'The charm used to erase or modify memories.', answer: 'OBLIVIATE' },
      { letter: 'P', definition: 'A stone basin used to view memories.', answer: 'PENSIEVE' },
      { letter: 'Q', definition: 'The red ball used to score goals in Quidditch.', answer: 'QUAFFLE' },
      { letter: 'R', definition: 'The tickling charm.', answer: 'RICTUSEMPRA' },
      { letter: 'S', definition: 'The Potions Master and Head of Slytherin House.', answer: 'SNAPE' },
      { letter: 'T', definition: 'A large, powerful, and often stupid magical creature.', answer: 'TROLL' },
      { letter: 'U', definition: 'A magical horse whose blood can sustain life.', answer: 'UNICORN' },
      { letter: 'V', definition: 'The Dark Lord who killed Harry\'s parents.', answer: 'VOLDEMORT' },
      { letter: 'W', definition: 'The surname of Harry\'s red-haired best friend.', answer: 'WEASLEY' },
      { letter: 'X', definition: 'The first name of Luna Lovegood\'s father.', answer: 'XENOPHILIUS' },
      { letter: 'Y', definition: 'CONTAINS Y: The ghost who haunts the second-floor girls\' bathroom.', answer: 'MYRTLE' },
      { letter: 'Z', definition: 'CONTAINS Z: The wizarding prison guarded by Dementors.', answer: 'AZKABAN' },
    ]
  };

  const currentRosco = roscoData[lang] || roscoData.es;
  const totalTime = 180;

  const [gameState, setGameState] = useState('start'); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [letters, setLetters] = useState(
    currentRosco.map(item => ({ ...item, status: 'pending' }))
  );
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [feedback, setFeedback] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    let timer;
    if (gameState === 'playing' && timeLeft > 0 && !feedback) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameState('finished');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft, feedback]);

  useEffect(() => {
    if (gameState === 'playing' && inputRef.current && !feedback) {
      inputRef.current.focus();
    }
  }, [gameState, currentIndex, feedback]);

  const startGame = () => {
    setLetters(currentRosco.map(item => ({ ...item, status: 'pending' })));
    setCurrentIndex(0);
    setTimeLeft(totalTime);
    setScore(0);
    setErrors(0);
    setUserInput('');
    setFeedback(null);
    setGameState('playing');
  };

  const checkAnswer = (e) => {
    if (e) e.preventDefault();
    if (!userInput.trim() || feedback) return;

    const normalizedInput = userInput.trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalizedAnswer = letters[currentIndex].answer.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const isCorrect = normalizedInput === normalizedAnswer;
    const newLetters = [...letters];
    
    if (isCorrect) {
      newLetters[currentIndex].status = 'correct';
      setScore(prev => prev + 1);
      setFeedback({ type: 'correct', answer: letters[currentIndex].answer });
    } else {
      newLetters[currentIndex].status = 'incorrect';
      setErrors(prev => prev + 1);
      setFeedback({ type: 'incorrect', answer: letters[currentIndex].answer });
    }

    setLetters(newLetters);
    setUserInput('');

    // Tiempos de feedback diferenciados
    const waitTime = isCorrect ? 600 : 3000;
    setTimeout(() => {
      setFeedback(null);
      moveToNextPending();
    }, waitTime);
  };

  const handlePasapalabra = () => {
    if (feedback) return;
    const newLetters = [...letters];
    newLetters[currentIndex].status = 'pasapalabra';
    setLetters(newLetters);
    setUserInput('');
    moveToNextPending();
  };

  const moveToNextPending = () => {
    const nextIndex = letters.findIndex((l, i) => 
      i > currentIndex && (l.status === 'pending' || l.status === 'pasapalabra')
    );

    if (nextIndex !== -1) {
      setCurrentIndex(nextIndex);
    } else {
      const firstPending = letters.findIndex(l => l.status === 'pending' || l.status === 'pasapalabra');
      if (firstPending !== -1) {
        setCurrentIndex(firstPending);
      } else {
        setGameState('finished');
      }
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const renderRosco = () => {
    const radius = 150;
    const centerX = 180;
    const centerY = 180;
    
    return (
      <div className="relative w-[320px] h-[320px] md:w-[360px] md:h-[360px] mx-auto scale-[0.75] sm:scale-90 md:scale-110 transition-transform duration-500">
        <div className="absolute inset-0 rounded-full border-4 border-white/5 animate-pulse shadow-[0_0_50px_rgba(179,157,78,0.1)]"></div>
        <svg width="360" height="360" viewBox="0 0 360 360" className="transform -rotate-90 filter drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          {letters.map((l, i) => {
            const angle = (i / letters.length) * 2 * Math.PI;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            let color = "#1e293b";
            let glow = "none";
            if (l.status === 'correct') { color = "#22c55e"; glow = "0 0 15px #22c55e"; }
            if (l.status === 'incorrect') { color = "#ef4444"; glow = "0 0 15px #ef4444"; }
            if (l.status === 'pasapalabra') { color = "#eab308"; glow = "0 0 15px #eab308"; }
            if (i === currentIndex && gameState === 'playing') { color = "#B39D4E"; glow = "0 0 20px #B39D4E"; }

            return (
              <g key={l.letter} className="transition-all duration-500">
                <circle 
                  cx={x} cy={y} r="18" 
                  fill={color} 
                  stroke={i === currentIndex ? "white" : "rgba(255,255,255,0.2)"}
                  strokeWidth={i === currentIndex ? "3" : "1"}
                  style={{ filter: `drop-shadow(${glow})` }}
                />
                <text 
                  x={x} y={y} 
                  fill="white" 
                  fontSize="12" 
                  fontWeight="bold" 
                  textAnchor="middle" 
                  dominantBaseline="middle"
                  transform={`rotate(90, ${x}, ${y})`}
                  className="pointer-events-none"
                >
                  {l.letter}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-4xl md:text-5xl font-cinzel font-bold text-white drop-shadow-[0_0_15px_rgba(179,157,78,0.5)]">
            {formatTime(timeLeft)}
          </div>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span className="text-[10px] md:text-xs font-cinzel text-gray-300">{score}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <span className="text-[10px] md:text-xs font-cinzel text-gray-300">{errors}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (gameState === 'start') {
    return (
      <div className="relative overflow-hidden min-h-[600px] flex items-center justify-center p-4 rounded-[3rem] border border-[#B39D4E]/20">
        <div className="absolute inset-0 bg-slate-950">
           <img src={coverImg || "/assets/img/icons/rosco-cover.webp"} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[2px]" alt="bg" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950"></div>
        </div>

        <div className="relative z-10 w-full max-w-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl p-8 md:p-12 text-center space-y-8">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-[#B39D4E]/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
              <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-[#B39D4E]/40 p-2 overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                 <img src={coverImg || "/assets/img/icons/rosco-cover.webp"} className="w-full h-full object-cover rounded-full" alt="Rosco" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8D6] to-[#B39D4E] drop-shadow-lg">
                {lang === 'es' ? 'El Rosco Mágico' : 'Wizarding Rosco'}
              </h1>
              <p className="text-xl md:text-2xl font-spectral italic text-gray-300 leading-relaxed max-w-lg mx-auto">
                {lang === 'es' 
                  ? '¿Tienes el conocimiento necesario para completar el desafío de la A a la Z?' 
                  : 'Do you have the knowledge to complete the A to Z challenge?'}
              </p>
            </div>

            <button 
              onClick={startGame}
              className="group relative px-12 py-5 bg-transparent overflow-hidden rounded-full border-2 border-[#B39D4E] transition-all duration-500 hover:shadow-[0_0_40px_rgba(179,157,78,0.4)]"
            >
              <div className="absolute inset-0 bg-[#B39D4E] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="relative font-cinzel text-xl font-bold text-[#B39D4E] group-hover:text-black transition-colors tracking-[0.2em]">
                {lang === 'es' ? 'REVELAR EL DESTINO' : 'REVEAL DESTINY'}
              </span>
            </button>
        </div>
      </div>
    );
  }

  if (gameState === 'finished') {
    return (
      <div className="max-w-4xl mx-auto p-12 text-center bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl">
        <h2 className="text-6xl font-cinzel font-bold text-[#B39D4E] mb-12 drop-shadow-lg">
          {lang === 'es' ? '¡FIN DEL JUEGO!' : 'GAME OVER!'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-10 bg-green-500/5 border border-green-500/20 rounded-3xl transform hover:scale-105 transition-all">
            <div className="text-6xl font-cinzel text-green-400 mb-2">{score}</div>
            <div className="text-sm font-cinzel text-gray-400 uppercase tracking-widest">{lang === 'es' ? 'Aciertos' : 'Correct'}</div>
          </div>
          <div className="p-10 bg-red-500/5 border border-red-500/20 rounded-3xl transform hover:scale-105 transition-all">
            <div className="text-6xl font-cinzel text-red-400 mb-2">{errors}</div>
            <div className="text-sm font-cinzel text-gray-400 uppercase tracking-widest">{lang === 'es' ? 'Errores' : 'Errors'}</div>
          </div>
        </div>
        <button 
          onClick={startGame}
          className="px-12 py-5 bg-white/5 hover:bg-[#B39D4E] text-white hover:text-black border border-[#B39D4E]/50 font-cinzel font-bold text-xl rounded-2xl transition-all duration-500"
        >
          {lang === 'es' ? 'INTENTAR DE NUEVO' : 'TRY AGAIN'}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-4 py-4 md:py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-16">
        <div className="lg:w-1/2 flex justify-center -mb-8 md:mb-0">
          {renderRosco()}
        </div>

        <div className="lg:w-1/2 w-full max-w-2xl">
          <div className="relative group p-6 md:p-12 bg-slate-900/40 backdrop-blur-3xl rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl transition-all duration-500">
            
            {feedback && (
              <div className={`absolute inset-0 z-50 flex flex-col items-center justify-center rounded-[2rem] md:rounded-[3rem] transition-all duration-500 animate-fadeIn
                ${feedback.type === 'correct' ? 'bg-green-500/95' : 'bg-red-600/95'}`}>
                <span className="text-6xl md:text-8xl mb-2 md:mb-4">{feedback.type === 'correct' ? '✨' : '❌'}</span>
                <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-white mb-2 text-center px-4">
                  {feedback.type === 'correct' ? (lang === 'es' ? '¡CORRECTO!' : 'CORRECT!') : (lang === 'es' ? 'INCORRECTO' : 'INCORRECT')}
                </h3>
                {feedback.type === 'incorrect' && (
                  <>
                    <p className="text-xl md:text-2xl font-spectral italic text-white/90">
                      {lang === 'es' ? 'La respuesta era:' : 'The answer was:'}
                    </p>
                    <p className="text-2xl md:text-4xl font-cinzel font-bold text-white mt-2 tracking-widest text-center px-4">
                      {feedback.answer}
                    </p>
                  </>
                )}
              </div>
            )}

            <div className="space-y-4 md:space-y-8">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-[#FFF8D6] to-[#B39D4E] text-black text-2xl md:text-4xl font-cinzel font-bold rounded-xl md:rounded-2xl shadow-[0_0_20px_rgba(179,157,78,0.4)] transform -rotate-3">
                  {letters[currentIndex].letter}
                </div>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-[10px] md:text-xs font-cinzel text-[#B39D4E] uppercase tracking-[0.3em]">
                    {lang === 'es' ? 'DEFINICIÓN MÁGICA' : 'WIZARDING DEFINITION'}
                  </p>
                  <p className="text-lg md:text-3xl font-spectral text-white leading-tight italic">
                    "{letters[currentIndex].definition}"
                  </p>
                </div>
              </div>

              <form onSubmit={checkAnswer} className="space-y-4 md:space-y-6">
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    disabled={!!feedback}
                    placeholder={lang === 'es' ? 'Tu respuesta...' : 'Your answer...'}
                    className="w-full bg-black/40 border-2 border-white/10 focus:border-[#B39D4E] rounded-xl md:rounded-2xl p-4 md:p-6 text-xl md:text-2xl text-white font-spectral outline-none transition-all placeholder:text-gray-600 shadow-inner"
                    autoFocus
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <button
                    type="submit"
                    disabled={!!feedback}
                    className="py-4 md:py-5 bg-[#B39D4E] hover:bg-[#928952] text-black font-cinzel font-bold text-sm md:text-lg rounded-xl transition-all shadow-lg transform active:scale-95 disabled:opacity-50"
                  >
                    {lang === 'es' ? 'CONTESTAR' : 'ANSWER'}
                  </button>
                  <button
                    type="button"
                    onClick={handlePasapalabra}
                    disabled={!!feedback}
                    className="py-4 md:py-5 bg-white/5 hover:bg-white/10 text-white font-cinzel font-bold text-sm md:text-lg rounded-xl border border-white/10 transition-all active:scale-95 disabled:opacity-50"
                  >
                    PASAPALABRA
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoscoGame;
