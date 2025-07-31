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

const questions: Question[] = [
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

const houses = {
  a: "Gryffindor",
  b: "Ravenclaw",
  c: "Slytherin",
  d: "Hufflepuff",
}

const houseInfo = {
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
  },
}

export default function HogwartsSortingQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)
  const [shuffledAnswers, setShuffledAnswers] = useState<ShuffledAnswer[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [isAnimating, setIsAnimating] = useState(false)

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
    setSelectedAnswer("")
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (!quizStarted) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute " />

        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-gray-900/95 border-2 border-yellow-500/50 text-white shadow-2xl rounded-lg">
            <div className="text-center space-y-6 p-8">
              <div className="text-8xl animate-bounce">🎩</div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                ⚡ El Sombrero Seleccionador ⚡
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Bienvenido a Hogwarts, joven mago. Es hora de descubrir a qué casa perteneces...
              </p>
            </div>

            <div className="p-8 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(houseInfo).map(([house, info]) => (
                  <div
                    key={house}
                    className={`p-4 rounded-lg ${info.bgColor} ${info.borderColor} border-2 text-center transform `}
                  >
                    <div className="text-4xl mb-2">{info.emoji}</div>
                    <h3 className={`font-bold ${info.textColor}`}>{house}</h3>
                  </div>
                ))}
              </div>

              <div className="text-center space-y-4">
                <p className="text-gray-400 italic">"Hmm... difícil, muy difícil. Déjame ver dentro de tu mente..."</p>
                <button
                  onClick={startQuiz}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 text-xl transform hover:scale-105 transition-all duration-300 shadow-lg rounded-lg"
                >
                  🎩 Comenzar Selección
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (showResult) {
    const resultHouse = calculateResult()
    const houseData = houseInfo[resultHouse as keyof typeof houseInfo]

    return (
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/70 via-purple-900/80 to-black/90" />

        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div
            className={`w-full max-w-3xl bg-gray-900/95 border-2 ${houseData.borderColor} text-white shadow-2xl animate-pulse rounded-lg`}
          >
            <div className="text-center space-y-6 p-8">
              <div className="text-8xl animate-bounce mb-4">{houseData.emoji}</div>
              <h1 className={`text-5xl font-bold bg-gradient-to-r ${houseData.colors} bg-clip-text text-transparent`}>
                ¡{resultHouse.toUpperCase()}!
              </h1>
              <p className="text-2xl text-gray-300 font-semibold">🎉 ¡Has sido seleccionado! 🎉</p>
            </div>

            <div className="space-y-8 p-8">
              <div className={`p-6 rounded-xl ${houseData.bgColor} ${houseData.borderColor} border-2`}>
                <p className="text-lg text-center text-gray-200 leading-relaxed mb-6">{houseData.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className={`text-xl font-bold ${houseData.textColor} mb-3`}>🌟 Cualidades:</h3>
                    <ul className="space-y-2">
                      {houseData.traits.map((trait, index) => (
                        <li key={index} className="text-gray-300 flex items-center">
                          <span className="mr-2">✨</span> {trait}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className={`font-bold ${houseData.textColor}`}>👑 Fundador:</h4>
                      <p className="text-gray-300">{houseData.founder}</p>
                    </div>
                    <div>
                      <h4 className={`font-bold ${houseData.textColor}`}>🔮 Elemento:</h4>
                      <p className="text-gray-300">{houseData.element}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-gray-400 italic text-lg">
                  "Sí... {resultHouse} será perfecto para ti. ¡Que tengas una excelente estadía en Hogwarts!"
                </p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={resetQuiz}
                    className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 font-bold py-3 px-6 rounded-lg"
                  >
                    🔄 Hacer Quiz de Nuevo
                  </button>
                  <button
                    onClick={() => window.location.reload()}
                    className={`bg-gradient-to-r ${houseData.colors} font-bold py-3 px-6 transform hover:scale-105 transition-all rounded-lg`}
                  >
                    🎮 Volver al Inicio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 " />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-gray-900/95 border-2 border-purple-500/50 text-white shadow-2xl rounded-lg">
          <div className="space-y-4 p-6 border-b border-purple-500/30">
            <div className="flex justify-between items-center">
              <span className="text-purple-300 font-semibold">
                Pregunta {currentQuestion + 1} de {questions.length}
              </span>
              <div className="text-4xl opacity-70">🎩</div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <h2 className="text-2xl font-bold text-center text-yellow-300 leading-relaxed">
              {questions[currentQuestion].question}
            </h2>
          </div>

          <div className="space-y-4 p-6">
            <div className="grid gap-4">
              {shuffledAnswers.map((answer, index) => (
                <button
                  key={`${currentQuestion}-${answer.key}`}
                  onClick={() => handleAnswer(answer.key)}
                  disabled={isAnimating}
                  className={`p-6 text-left h-auto bg-gray-800/50 hover:bg-gray-700/70 border-2 border-gray-600/50 hover:border-purple-400/70 text-white font-medium text-lg leading-relaxed transform hover:scale-105 transition-all duration-300 rounded-lg ${
                    selectedAnswer === answer.key ? "bg-purple-600/50 border-purple-400" : ""
                  } ${isAnimating ? "animate-pulse" : ""}`}
                >
                  <span className="block">
                    <span className="text-purple-300 font-bold mr-3">{String.fromCharCode(65 + index)}.</span>
                    {answer.text}
                  </span>
                </button>
              ))}
            </div>

            <div className="text-center pt-4">
              <p className="text-gray-400 italic">"Interesante... muy interesante..."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
