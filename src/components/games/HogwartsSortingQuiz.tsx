"use client"

import { useState, useEffect } from "react"


interface Question {
  question: string
  answers: {
    a: string
    b: string
    c: string
    d: string
  }
}

interface ShuffledAnswer {
  key: string
  text: string
}

const questionsES: Question[] = [
  {
    question: "¿Qué cualidad valoras más?",
    answers: {
      a: "Valentía",
      b: "Inteligencia",
      c: "Determinación",
      d: "Lealtad",
    },
  },
  {
    question: "¿Cómo resolverías un conflicto?",
    answers: {
      a: "Confrontando directamente",
      b: "Negociando con lógica",
      c: "Manipulando la situación a mi favor",
      d: "Buscando una solución justa para todos",
    },
  },
  {
    question: "¿Cuál sería tu rol ideal en un equipo?",
    answers: {
      a: "El líder valiente",
      b: "El estratega",
      c: "El que toma decisiones difíciles",
      d: "El que mantiene la armonía",
    },
  },
  {
    question: "¿Qué animal mágico elegirías como compañero?",
    answers: {
      a: "Un león",
      b: "Un cuervo",
      c: "Una serpiente",
      d: "Un tejón",
    },
  },
  {
    question: "¿Cuál es tu peor defecto?",
    answers: {
      a: "Impulsividad",
      b: "Orgullo",
      c: "Ambición excesiva",
      d: "Inseguridad",
    },
  },
  {
    question: "¿Qué harías si tu amigo rompiera las reglas?",
    answers: {
      a: "Lo cubriría si fue por una buena razón",
      b: "Le explicaría por qué fue un error",
      c: "Vería cómo usar eso a mi favor",
      d: "Lo acompañaría a admitir su error",
    },
  },
  {
    question: "¿Qué te motiva más?",
    answers: {
      a: "El honor",
      b: "El conocimiento",
      c: "El poder",
      d: "La comunidad",
    },
  },
  {
    question: "Si tuvieras un giratiempo, ¿cómo lo usarías?",
    answers: {
      a: "Para salvar a alguien",
      b: "Para estudiar más",
      c: "Para cambiar mi destino",
      d: "Para disfrutar más con mis seres queridos",
    },
  },
  {
    question: "¿Cómo reaccionas ante un desafío?",
    answers: {
      a: "Lo enfrento de inmediato",
      b: "Lo analizo y busco una solución lógica",
      c: "Busco cómo salir ganando",
      d: "Pido ayuda si es necesario",
    },
  },
  {
    question: "¿Cuál es tu actividad favorita?",
    answers: {
      a: "Deportes o aventuras",
      b: "Leer o aprender algo nuevo",
      c: "Planear objetivos",
      d: "Pasar tiempo con amigos",
    },
  },
  {
    question: "¿Qué tipo de líder preferís?",
    answers: {
      a: "Audaz e inspirador",
      b: "Razonable e inteligente",
      c: "Fuerte y determinado",
      d: "Justo y empático",
    },
  },
  {
    question: "¿Cuál sería tu patronus?",
    answers: {
      a: "Un lobo",
      b: "Un búho",
      c: "Un zorro",
      d: "Un perro",
    },
  },
  {
    question: "¿Qué harías si ganaras la Copa de las Casas?",
    answers: {
      a: "Celebrarlo con euforia",
      b: "Analizar cómo ganaron",
      c: "Usarlo para ganar respeto",
      d: "Agradecer a todos por el trabajo en equipo",
    },
  },
  {
    question: "¿Qué tipo de magia te atrae más?",
    answers: {
      a: "Hechizos ofensivos",
      b: "Magia antigua y compleja",
      c: "Magia oscura o prohibida",
      d: "Encantamientos de protección",
    },
  },
  {
    question: "¿Cómo preferís pasar un sábado?",
    answers: {
      a: "Haciendo algo emocionante",
      b: "Leyendo o jugando ajedrez mágico",
      c: "Planeando mis metas futuras",
      d: "Descansando con mis amigos",
    },
  },
]

const questionsEN: Question[] = [
  {
    question: "What quality do you value the most?",
    answers: {
      a: "Bravery",
      b: "Intelligence",
      c: "Determination",
      d: "Loyalty",
    },
  },
  {
    question: "How would you resolve a conflict?",
    answers: {
      a: "By confronting it directly",
      b: "By negotiating with logic",
      c: "By manipulating it to my advantage",
      d: "By seeking a fair solution for everyone",
    },
  },
  {
    question: "What would be your ideal role in a team?",
    answers: {
      a: "The brave leader",
      b: "The strategist",
      c: "The one who makes the hard decisions",
      d: "The one who keeps harmony",
    },
  },
  {
    question: "Which magical creature would you choose as a companion?",
    answers: {
      a: "A lion",
      b: "A raven",
      c: "A snake",
      d: "A badger",
    },
  },
  {
    question: "What’s your biggest flaw?",
    answers: {
      a: "Impulsiveness",
      b: "Pride",
      c: "Excessive ambition",
      d: "Insecurity",
    },
  },
  {
    question: "What would you do if your friend broke the rules?",
    answers: {
      a: "Cover for them if it was for a good reason",
      b: "Explain why it was a mistake",
      c: "See how I could use it to my advantage",
      d: "Go with them to admit the mistake",
    },
  },
  {
    question: "What motivates you the most?",
    answers: {
      a: "Honor",
      b: "Knowledge",
      c: "Power",
      d: "Community",
    },
  },
  {
    question: "If you had a time-turner, how would you use it?",
    answers: {
      a: "To save someone",
      b: "To study more",
      c: "To change my fate",
      d: "To enjoy more time with loved ones",
    },
  },
  {
    question: "How do you react to a challenge?",
    answers: {
      a: "Face it head-on",
      b: "Analyze it and find a logical solution",
      c: "Look for a way to come out on top",
      d: "Ask for help if needed",
    },
  },
  {
    question: "What’s your favorite activity?",
    answers: {
      a: "Sports or adventures",
      b: "Reading or learning something new",
      c: "Planning goals",
      d: "Spending time with friends",
    },
  },
  {
    question: "What kind of leader do you prefer?",
    answers: {
      a: "Bold and inspiring",
      b: "Rational and intelligent",
      c: "Strong and determined",
      d: "Fair and empathetic",
    },
  },
  {
    question: "What would your Patronus be?",
    answers: {
      a: "A wolf",
      b: "An owl",
      c: "A fox",
      d: "A dog",
    },
  },
  {
    question: "What would you do if you won the House Cup?",
    answers: {
      a: "Celebrate with excitement",
      b: "Analyze how we won",
      c: "Use it to gain respect",
      d: "Thank everyone for their teamwork",
    },
  },
  {
    question: "What type of magic attracts you the most?",
    answers: {
      a: "Offensive spells",
      b: "Ancient and complex magic",
      c: "Dark or forbidden magic",
      d: "Protective enchantments",
    },
  },
  {
    question: "How would you prefer to spend a Saturday?",
    answers: {
      a: "Doing something exciting",
      b: "Reading or playing wizard chess",
      c: "Planning future goals",
      d: "Relaxing with friends",
    },
  },
]


const houses = {
  a: "Gryffindor",
  b: "Ravenclaw",
  c: "Slytherin",
  d: "Hufflepuff",
}

const houseInfoES = {
  Gryffindor: {
    colors: "from-red-600 to-yellow-500",
    bgColor: "bg-red-900/20",
    borderColor: "border-red-500/50",
    textColor: "text-red-300",
    description: "Valientes, audaces y caballerosos. Los Gryffindor nunca huyen de un desafío.",
    traits: ["Valentía", "Audacia", "Caballerosidad", "Determinación"],
    founder: "Godric Gryffindor",
    element: "Fuego",
    emoji: "🦁",
    img: "/assets/img/icons/gryffindor.webp",
  },
  Ravenclaw: {
    colors: "from-blue-600 to-cyan-400",
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-500/50",
    textColor: "text-blue-300",
    description: "Inteligentes, creativos y sabios. Los Ravenclaw valoran el conocimiento por encima de todo.",
    traits: ["Inteligencia", "Sabiduría", "Creatividad", "Ingenio"],
    founder: "Rowena Ravenclaw",
    element: "Aire",
    emoji: "🦅",
    img: "/assets/img/icons/ravenclaw.webp",
  },
  Slytherin: {
    colors: "from-green-600 to-emerald-400",
    bgColor: "bg-green-900/20",
    borderColor: "border-green-500/50",
    textColor: "text-green-300",
    description: "Ambiciosos, astutos y determinados. Los Slytherin harán cualquier cosa para lograr sus objetivos.",
    traits: ["Ambición", "Astucia", "Determinación", "Liderazgo"],
    founder: "Salazar Slytherin",
    element: "Agua",
    emoji: "🐍",
    img: "/assets/img/icons/slytherin.webp",
  },
  Hufflepuff: {
    colors: "from-yellow-600 to-amber-400",
    bgColor: "bg-yellow-900/20",
    borderColor: "border-yellow-500/50",
    textColor: "text-yellow-300",
    description: "Leales, justos y trabajadores. Los Hufflepuff valoran la amistad y la justicia.",
    traits: ["Lealtad", "Justicia", "Paciencia", "Trabajo duro"],
    founder: "Helga Hufflepuff",
    element: "Tierra",
    emoji: "🦡",
    img: "/assets/img/icons/hufflepuff.webp",
  },
}

const houseInfoEN = {
  Gryffindor: {
    colors: "from-red-600 to-yellow-500",
    bgColor: "bg-red-900/20",
    borderColor: "border-red-500/50",
    textColor: "text-red-300",
    description: "Brave, daring, and chivalrous. Gryffindors never back down from a challenge.",
    traits: ["Bravery", "Daring", "Chivalry", "Determination"],
    founder: "Godric Gryffindor",
    element: "Fire",
    emoji: "🦁",
    img: "/assets/img/icons/gryffindor.webp",
  },
  Ravenclaw: {
    colors: "from-blue-600 to-cyan-400",
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-500/50",
    textColor: "text-blue-300",
    description: "Intelligent, creative, and wise. Ravenclaws value knowledge above all.",
    traits: ["Intelligence", "Wisdom", "Creativity", "Wit"],
    founder: "Rowena Ravenclaw",
    element: "Air",
    emoji: "🦅",
    img: "/assets/img/icons/ravenclaw.webp",
  },
  Slytherin: {
    colors: "from-green-600 to-emerald-400",
    bgColor: "bg-green-900/20",
    borderColor: "border-green-500/50",
    textColor: "text-green-300",
    description: "Ambitious, cunning, and determined. Slytherins will do whatever it takes to succeed.",
    traits: ["Ambition", "Cunning", "Determination", "Leadership"],
    founder: "Salazar Slytherin",
    element: "Water",
    emoji: "🐍",
    img: "/assets/img/icons/slytherin.webp",
  },
  Hufflepuff: {
    colors: "from-yellow-600 to-amber-400",
    bgColor: "bg-yellow-900/20",
    borderColor: "border-yellow-500/50",
    textColor: "text-yellow-300",
    description: "Loyal, fair, and hardworking. Hufflepuffs value friendship and justice.",
    traits: ["Loyalty", "Fairness", "Patience", "Hard Work"],
    founder: "Helga Hufflepuff",
    element: "Earth",
    emoji: "🦡",
    img: "/assets/img/icons/hufflepuff.webp",
  },
}


export default function HogwartsSortingQuiz({ 
  lang, 
  titleGame,
  descriptionGame,
  hat,
  start,
  finishGame,
  cualities,
  fundador,
  element,
  yes,
  thinks,
  again,
  back,
  ask,
  of,
  interesting
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)
  const [shuffledAnswers, setShuffledAnswers] = useState<ShuffledAnswer[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [isAnimating, setIsAnimating] = useState(false)
  

  const questions = lang == 'es' ? questionsES : questionsEN
  const houseInfo = lang == 'es' ? houseInfoES : houseInfoEN
  // Mezclar respuestas para la pregunta actual
  useEffect(() => {
    if (quizStarted && currentQuestion < questions.length) {
      const currentQ = questions[currentQuestion]
      const answerArray: ShuffledAnswer[] = [
        { key: "a", text: currentQ.answers.a },
        { key: "b", text: currentQ.answers.b },
        { key: "c", text: currentQ.answers.c },
        { key: "d", text: currentQ.answers.d },
      ]

      // Algoritmo Fisher-Yates para mezclar
      for (let i = answerArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[answerArray[i], answerArray[j]] = [answerArray[j], answerArray[i]]
      }

      setShuffledAnswers(answerArray)
    }
  }, [currentQuestion, quizStarted])

  const startQuiz = () => {
    setQuizStarted(true)
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
  }

  const handleAnswer = (answerKey: string) => {
    setSelectedAnswer(answerKey)
    setIsAnimating(true)

    setTimeout(() => {
      const newAnswers = [...answers, answerKey]
      setAnswers(newAnswers)

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer("")
      } else {
        setShowResult(true)
      }
      setIsAnimating(false)
    }, 500)
  }

  const calculateResult = () => {
    const counts = { a: 0, b: 0, c: 0, d: 0 }
    answers.forEach((answer) => {
      counts[answer as keyof typeof counts]++
    })

    const maxCount = Math.max(...Object.values(counts))
    const winningKey = Object.keys(counts).find(
      (key) => counts[key as keyof typeof counts] === maxCount,
    ) as keyof typeof houses

    return houses[winningKey]
  }

  const resetQuiz = () => {
    setQuizStarted(false)
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (!quizStarted) {
    return (
      <div className="relative overflow-hidden min-h-[600px] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-slate-950">
           <img src="/assets/img/icons/hat-card.webp" className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm" alt="bg" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950"></div>
        </div>

        <div className="relative z-10 w-full max-w-2xl bg-slate-900/40 backdrop-blur-xl border border-[#B39D4E]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="p-8 md:p-12 text-center space-y-8">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-[#B39D4E]/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
              <img src="/assets/img/icons/hat-card.webp" className="relative w-40 h-40 md:w-56 md:h-56 object-contain transform hover:scale-110 transition-transform duration-700 drop-shadow-[0_0_20px_rgba(218,165,32,0.4)]" alt="Sorting Hat" />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-500 drop-shadow-[0_0_15px_rgba(200,200,200,0.3)]">
                {titleGame}
              </h1>
              <p className="text-xl md:text-2xl font-spectral italic text-gray-300 leading-relaxed max-w-lg mx-auto">
                "{descriptionGame}"
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2 md:gap-4 py-4">
              {Object.entries(houseInfo).map(([house, info]) => (
                <div key={house} className="flex flex-col items-center group">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-800 border border-[#B39D4E]/20 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-[#B39D4E]/50 transition-all shadow-inner`}>
                    {info.emoji}
                  </div>
                  <span className="text-[10px] md:text-xs font-cinzel text-gray-400 mt-2 uppercase tracking-tighter">{house}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button
                onClick={startQuiz}
                className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-full border border-[#B39D4E]/50 hover:border-[#B39D4E] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#B39D4E]/0 via-[#B39D4E]/20 to-[#B39D4E]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative font-cinzel text-xl md:text-2xl text-[#B39D4E] tracking-widest uppercase flex items-center gap-3">
                   🪄 {start}
                </span>
              </button>
              <p className="mt-6 text-gray-500 font-spectral italic text-sm">{hat}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (showResult) {
    const resultHouse = calculateResult()
    const houseData = houseInfo[resultHouse as keyof typeof houseInfo] as any

    return (
      <div className="relative min-h-[700px] flex items-center justify-center p-4 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black`}></div>
        <img src={houseData.img} className="absolute inset-0 w-full h-full object-cover opacity-20 blur-xl scale-110" alt="bg" />

        <div className={`relative z-10 w-full max-w-4xl bg-slate-900/60 backdrop-blur-2xl border-2 ${houseData.borderColor} rounded-[2rem] overflow-hidden shadow-2xl animate-fadeInScale`}>
          <div className="grid md:grid-cols-2">
            
            {/* House Banner Section */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img src={houseData.img} className="absolute inset-0 w-full h-full object-cover" alt={resultHouse} />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                 <div className="text-7xl md:text-9xl mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] animate-bounce">{houseData.emoji}</div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-8 md:p-12 space-y-8">
              <div className="space-y-2">
                <h1 className={`text-5xl md:text-7xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b ${houseData.colors} drop-shadow-lg`}>
                  {resultHouse}
                </h1>
                <p className="text-xl text-gray-300 font-spectral italic">{finishGame}</p>
              </div>

              <div className={`p-6 rounded-2xl bg-black/40 border border-white/5 space-y-6`}>
                <p className="text-lg text-gray-300 font-spectral leading-relaxed italic">"{houseData.description}"</p>

                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                  <div className="space-y-3">
                    <h3 className={`text-sm font-cinzel uppercase tracking-widest ${houseData.textColor}`}>{cualities}</h3>
                    <div className="flex flex-wrap gap-2">
                      {houseData.traits.map((trait, index) => (
                        <span key={index} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10 flex items-center gap-1">
                          ✨ {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className={`text-[10px] font-cinzel uppercase tracking-tighter ${houseData.textColor}`}>{fundador}</h4>
                      <p className="text-sm font-spectral text-gray-300">{houseData.founder}</p>
                    </div>
                    <div>
                      <h4 className={`text-[10px] font-cinzel uppercase tracking-tighter ${houseData.textColor}`}>{element}</h4>
                      <p className="text-sm font-spectral text-gray-300">{houseData.element}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={resetQuiz}
                  className="flex-1 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-cinzel rounded-xl transition-all border border-white/10"
                >
                  🔄 {again}
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className={`flex-1 px-8 py-4 bg-gradient-to-r ${houseData.colors} text-white font-cinzel font-bold rounded-xl transform hover:scale-105 transition-all shadow-lg`}
                >
                  🏰 {back}
                </button>
              </div>
              
              <p className="text-center text-gray-500 font-spectral italic text-sm">
                "{yes}... {resultHouse} {thinks}"
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-[600px] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950">
        <img src="/assets/img/icons/hat-card.webp" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale" alt="bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl bg-slate-900/60 backdrop-blur-xl border border-[#B39D4E]/20 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-6 md:p-8 space-y-6">
          
          {/* Header & Progress */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-[10px] font-cinzel text-[#B39D4E] uppercase tracking-[0.2em]">{ask} {currentQuestion + 1} {of} {questions.length}</p>
                <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-white leading-tight">
                  {questions[currentQuestion].question}
                </h2>
              </div>
              <img src="/assets/img/icons/hat-card.webp" className="w-12 h-12 object-contain opacity-50" alt="Hat" />
            </div>
            
            <div className="relative w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 h-full rounded-full shadow-[0_0_10px_rgba(218,165,32,0.6)] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Answers Grid */}
          <div className="grid grid-cols-1 gap-3">
            {shuffledAnswers.map((answer, index) => (
              <button
                key={`${currentQuestion}-${answer.key}`}
                onClick={() => handleAnswer(answer.key)}
                disabled={isAnimating}
                className={`group relative p-5 text-left rounded-2xl border transition-all duration-300 overflow-hidden
                  ${selectedAnswer === answer.key 
                    ? "bg-[#B39D4E]/20 border-[#B39D4E] scale-[1.02] shadow-[0_0_20px_rgba(218,165,32,0.1)]" 
                    : "bg-white/5 border-white/10 hover:border-[#B39D4E]/40 hover:bg-white/[0.08]"
                  } ${isAnimating ? "opacity-50 scale-95" : "opacity-100"}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#B39D4E]/0 via-[#B39D4E]/5 to-[#B39D4E]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-cinzel transition-all
                    ${selectedAnswer === answer.key ? "bg-[#B39D4E] text-black border-[#B39D4E]" : "bg-black/40 text-[#B39D4E] border-[#B39D4E]/20 group-hover:border-[#B39D4E]/50"}
                  `}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="flex-1 font-spectral text-lg text-gray-200 group-hover:text-white transition-colors">
                    {answer.text}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center pt-2">
            <p className="text-gray-500 font-spectral italic text-sm animate-pulse">
              {interesting}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
