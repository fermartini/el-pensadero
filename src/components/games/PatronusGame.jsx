import React, { useState, useEffect, useCallback } from 'react';

const USE_IMAGES = true; // Imágenes activadas
const INITIAL_TIME = 100;
const TREE_HEIGHT = 6;
const TIME_DEPLETION_RATE = 2; // Time lost per tick
const TIME_RECOVERY_RATE = 3;  // Time gained per tap
const TICK_RATE = 100;         // ms per tick

const generateSegment = (lastObstacle) => {
  if (lastObstacle !== 'none') return 'none';
  const rand = Math.random();
  if (rand < 0.3) return 'left';
  if (rand < 0.6) return 'right';
  return 'none';
};

export default function PatronusGame({ 
  patronusTitle = "Defensa de Almas",
  patronusSubtitle = "Usa tus flechas o toca los lados para invocar el Patronus y proteger el muro.",
  patronusStart = "🪄 Comenzar",
  patronusGameOver = "¡Beso del Dementor!",
  patronusScoreLabel = "Has perdido tu alma con {score} puntos",
  patronusRetry = "Intentar de nuevo",
  patronusVitalMagic = "Magia Vital",
  patronusScoreHUD = "Puntuación",
  bgImg = "/assets/game/bg-forest.webp",
  dementorBodyImg = "/assets/game/dementor-body.webp",
  dementorAuraLeftImg = "/assets/game/dementor-aura-left.webp",
  dementorAuraRightImg = "/assets/game/dementor-aura-right.webp",
  harryIdleImg = "/assets/game/harry-idle.webp",
  harryDeadImg = "/assets/game/harry-dead.webp",
  patronusBlastImg = "/assets/game/patronus-blast.webp"
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [playerSide, setPlayerSide] = useState('left');
  const [tree, setTree] = useState([]);
  
  // States for visual juice
  const [flyingChunks, setFlyingChunks] = useState([]);
  const [attackAnim, setAttackAnim] = useState(false);

  const initGame = useCallback(() => {
    const initialTree = ['none', 'none'];
    for (let i = 2; i < TREE_HEIGHT; i++) {
      initialTree.push(generateSegment(initialTree[i - 1]));
    }
    setTree(initialTree);
    setScore(0);
    setTimeLeft(INITIAL_TIME);
    setPlayerSide('left');
    setGameOver(false);
    setIsPlaying(false);
    setFlyingChunks([]);
  }, []);

  useEffect(() => {
    initGame();
  }, [initGame]);

  useEffect(() => {
    if (!isPlaying || gameOver) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const nextTime = prev - (TIME_DEPLETION_RATE + Math.floor(score / 50));
        if (nextTime <= 0) {
          setGameOver(true);
          setIsPlaying(false);
          return 0;
        }
        return nextTime;
      });
    }, TICK_RATE);
    return () => clearInterval(timer);
  }, [isPlaying, gameOver, score]);

  const handleTap = (side) => {
    if (gameOver) return;
    if (!isPlaying) setIsPlaying(true);

    setPlayerSide(side);

    // Patronus shoot animation
    setAttackAnim(false);
    // Forzar reflow para reiniciar la animación si se tapea muy rápido
    setTimeout(() => setAttackAnim(true), 10);
    setTimeout(() => setAttackAnim(false), 250);

    if (tree[0] === side) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    const chopped = tree[0];
    const newTree = [...tree];
    newTree.shift();
    newTree.push(generateSegment(newTree[newTree.length - 1]));

    // Añadir el pedazo cortado a las animaciones de vuelo (solo las auras)
    if (chopped !== 'none') {
      setFlyingChunks(prev => [...prev.slice(-3), { id: Date.now(), obstacle: chopped, hitFrom: side }]);
    }

    if (newTree[0] === side) {
      setTree(newTree);
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    setTree(newTree);
    setScore((s) => s + 1);
    setTimeLeft((prev) => Math.min(100, prev + TIME_RECOVERY_RATE));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleTap('left');
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleTap('right');
      }
    };
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [tree, isPlaying, gameOver]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto p-4 select-none relative group">
      
      {/* Custom Keyframes for Animations */}
      <style>{`
        @keyframes flyLeftUp {
          0% { transform: translate(0, 0) rotate(0deg) scale(1.1); opacity: 1; }
          100% { transform: translate(-300px, -300px) rotate(-720deg) scale(0.3); opacity: 0; }
        }
        @keyframes flyRightUp {
          0% { transform: translate(0, 0) rotate(0deg) scale(1.1); opacity: 1; }
          100% { transform: translate(300px, -300px) rotate(720deg) scale(0.3); opacity: 0; }
        }
        .fly-left-up { animation: flyLeftUp 0.6s ease-out forwards; }
        .fly-right-up { animation: flyRightUp 0.6s ease-out forwards; }
        
        @keyframes shootPatronus {
          0% { transform: translateX(0) scale(1); filter: brightness(1.5) drop-shadow(0 0 10px rgba(0,255,255,0.8)); opacity: 1; }
          100% { transform: translateX(-110px) scale(4.5); filter: brightness(3.5) drop-shadow(0 0 60px rgba(0,255,255,1)); opacity: 1; }
        }
        .shoot-anim { animation: shootPatronus 0.12s ease-in forwards; }

        @keyframes pulseBg {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .bg-breathe { animation: pulseBg 15s infinite ease-in-out; }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px) rotate(-2deg); }
          50% { transform: translateX(8px) rotate(2deg); }
          75% { transform: translateX(-8px) rotate(-2deg); }
        }
        .shake-screen { animation: shake 0.3s ease-in-out; }
      `}</style>

      {/* Main Container with Magical Border */}
      <div className="w-full bg-slate-900/60 backdrop-blur-xl border border-[#B39D4E]/30 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] p-2">
        
        {/* HUD */}
        <div className="w-full bg-black/40 p-6 rounded-t-[2rem] flex flex-col items-center border-b border-white/5">
          <div className="flex justify-between w-full items-center mb-4">
             <div className="flex flex-col">
                <span className="text-[10px] font-cinzel text-[#B39D4E] uppercase tracking-[0.2em]">{patronusVitalMagic}</span>
                <div className="w-32 md:w-48 h-2 bg-white/5 rounded-full overflow-hidden border border-white/10 mt-1">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-100 ease-linear shadow-[0_0_15px_cyan]"
                    style={{ width: `${timeLeft}%` }}
                  ></div>
                </div>
             </div>
             <div className="flex flex-col items-end">
                <span className="text-[10px] font-cinzel text-[#B39D4E] uppercase tracking-[0.2em]">{patronusScoreHUD}</span>
                <span className="text-3xl font-cinzel font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] leading-none">{score}</span>
             </div>
          </div>
        </div>

        {/* Game Area */}
        <div className={`relative w-full h-[500px] md:h-[600px] bg-slate-950 overflow-hidden flex justify-center ${gameOver ? 'shake-screen' : ''}`}>
          
          {/* Background ambient magic / Forest */}
          {USE_IMAGES ? (
            <img src={bgImg} className="absolute inset-0 w-full h-full object-cover opacity-50 bg-breathe origin-center" alt="background" />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.05)_0%,transparent_100%)] bg-breathe"></div>
          )}

          {/* The Dementor Column */}
          <div className="relative w-[90px] md:w-[110px] h-full flex flex-col-reverse justify-start z-10">
            
            {/* Flying Chunks (Auras despedidas al atacar) */}
            {flyingChunks.map(chunk => (
              <React.Fragment key={chunk.id}>
                {chunk.obstacle === 'left' && (
                  <div className="absolute right-full bottom-0 h-[90px] md:h-[110px] flex items-center justify-end pr-0 z-50 pointer-events-none fly-left-up">
                    {USE_IMAGES ? <img src={dementorAuraLeftImg} className="h-[100px] md:h-[130px] w-auto max-w-[180px] object-contain origin-right scale-110" alt="Flying" /> : <span className="text-5xl transform scale-x-[-1]">🌫️</span>}
                  </div>
                )}
                {chunk.obstacle === 'right' && (
                  <div className="absolute left-full bottom-0 h-[90px] md:h-[110px] flex items-center justify-start pl-0 z-50 pointer-events-none fly-right-up">
                    {USE_IMAGES ? <img src={dementorAuraRightImg} className="h-[100px] md:h-[130px] w-auto max-w-[180px] object-contain origin-left scale-110" alt="Flying" /> : <span className="text-5xl">🌫️</span>}
                  </div>
                )}
              </React.Fragment>
            ))}

            {tree.map((obstacle, index) => (
              <div key={index} className="w-full h-[90px] md:h-[110px] relative flex items-center justify-center">
                {/* Dementor Body (Muro) */}
                {USE_IMAGES ? (
                  <img 
                    src={dementorBodyImg} 
                    className={`w-full h-full object-cover opacity-80 ${index % 2 !== 0 ? 'scale-y-[-1]' : ''}`} 
                    alt="Muro de Almas" 
                  />
                ) : (
                  <div className="text-5xl opacity-80 filter drop-shadow-[0_0_5px_rgba(0,0,0,1)] animate-pulse">👻</div>
                )}
                
                {/* Obstacle (Swooping Dementor Hand/Aura) */}
                {obstacle === 'left' && (
                  <div className="absolute right-full h-full flex items-center justify-end pr-0 z-20">
                    {USE_IMAGES ? <img src={dementorAuraLeftImg} className="h-[100px] md:h-[130px] w-auto max-w-[180px] object-contain origin-right scale-110 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" alt="Dementor Atacando Izquierda" /> : <span className="text-5xl transform scale-x-[-1] animate-bounce block">🌫️</span>}
                  </div>
                )}
                {obstacle === 'right' && (
                  <div className="absolute left-full h-full flex items-center justify-start pl-0 z-20">
                    {USE_IMAGES ? <img src={dementorAuraRightImg} className="h-[100px] md:h-[130px] w-auto max-w-[180px] object-contain origin-left scale-110 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" alt="Dementor Atacando Derecha" /> : <span className="text-5xl animate-bounce block">🌫️</span>}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Player (Harry) */}
          <div 
            className="absolute bottom-0 h-[90px] md:h-[110px] w-[90px] md:w-[110px] flex items-center justify-center transition-all duration-75 z-30"
            style={{ 
              left: playerSide === 'left' ? '5%' : 'auto',
              right: playerSide === 'right' ? '5%' : 'auto',
              transform: playerSide === 'left' ? 'scaleX(-1)' : 'scaleX(1)'
            }}
          >
            {USE_IMAGES ? (
              <img src={gameOver ? harryDeadImg : harryIdleImg} className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]" alt="Harry" />
            ) : (
              <div className="text-6xl">{gameOver ? '💀' : '🧙‍♂️'}</div>
            )}
            
            {isPlaying && !gameOver && attackAnim && (
              <div className="absolute bottom-8 left-[80%] shoot-anim z-40">
                {USE_IMAGES ? <img src={patronusBlastImg} className="w-24 h-24 md:w-32 md:h-32 object-contain" alt="Patronus" /> : <span className="text-6xl block">✨</span>}
              </div>
            )}
          </div>

          {/* Game Over Overlay */}
          {gameOver && (
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center z-50 text-center px-6">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
                <h2 className="relative text-red-500 font-cinzel text-4xl md:text-5xl mb-2 drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]">{patronusGameOver}</h2>
              </div>
              <p className="text-white font-spectral text-2xl mb-8">{patronusScoreLabel.replace('{score}', score)}</p>
              <button 
                onClick={initGame}
                className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-full border border-red-500/50 hover:border-red-500 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-red-600/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative font-cinzel text-xl text-red-400 tracking-widest uppercase">
                  {patronusRetry}
                </span>
              </button>
            </div>
          )}
          
          {/* Start Overlay */}
          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-md flex flex-col items-center justify-center z-50 text-center px-8">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-cyan-400/10 blur-3xl rounded-full scale-150 animate-pulse"></div>
                <h2 className="relative text-4xl md:text-6xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8D6] to-[#B39D4E] drop-shadow-lg leading-tight">
                  {patronusTitle}
                </h2>
              </div>
              <p className="text-gray-300 font-spectral italic text-lg md:text-xl mb-12 max-w-xs leading-relaxed">
                "{patronusSubtitle}"
              </p>
              <button 
                onClick={() => handleTap('left')}
                className="group relative px-12 py-6 bg-transparent overflow-hidden rounded-full border border-[#B39D4E]/50 hover:border-[#B39D4E] transition-all duration-500 shadow-[0_0_30px_rgba(218,165,32,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B39D4E]/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative font-cinzel text-2xl text-[#B39D4E] tracking-[0.3em] uppercase flex items-center gap-4">
                  {patronusStart}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Controls Overlay */}
        <div className="bg-black/60 p-6 flex gap-6 border-t border-white/5">
           <button 
            className="flex-1 group relative h-20 bg-slate-800/40 hover:bg-[#B39D4E]/20 rounded-2xl border border-white/10 hover:border-[#B39D4E]/50 transition-all duration-300 active:scale-95 flex items-center justify-center shadow-inner"
            onClick={() => handleTap('left')}
            aria-label="Atacar Izquierda"
          >
            <svg class="w-8 h-8 text-[#B39D4E] group-hover:scale-125 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="flex-1 group relative h-20 bg-slate-800/40 hover:bg-[#B39D4E]/20 rounded-2xl border border-white/10 hover:border-[#B39D4E]/50 transition-all duration-300 active:scale-95 flex items-center justify-center shadow-inner"
            onClick={() => handleTap('right')}
            aria-label="Atacar Derecha"
          >
            <svg class="w-8 h-8 text-[#B39D4E] group-hover:scale-125 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}
