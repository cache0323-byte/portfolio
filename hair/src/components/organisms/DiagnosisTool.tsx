'use client';

import { useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const DiagnosisResults = [
  { id: 0, title: 'Glow Rich Oil', description: '濃密なツヤ・リッチな補修力', imageUrl: '/images/oil01.jpg' },
  { id: 1, title: 'Scalp Vital Oil', description: '根本からのハリ・頭皮ケア', imageUrl: '/images/oil02.jpg' },
  { id: 2, title: 'Balance Moist', description: 'うねり防止・内側から潤す', imageUrl: '/images/oil03.jpg' },
  { id: 3, title: 'Airy Silk Oil', description: '軽やかな指通り・さらさら感', imageUrl: '/images/oil04.jpg' },
];

const questions = [
  {
    id: 1,
    question: "今の髪の悩みで一番近いのは？",
    options: [
      { text: "ダメージ・枝毛", target: 0 },
      { text: "ハリ・コシ不足", target: 1 },
    ],
  },
  {
    id: 2,
    question: "お悩み第2位は？",
    options: [
      { text: "うねり・広がり", target: 2 },
      { text: "ベタつき・指通り", target: 3 },
    ],
  },
  {
    id: 3,
    question: "どんな仕上がりを求める？",
    options: [
      { text: "しっとり重め", target: 0 },
      { text: "ふんわり軽め", target: 1 },
    ],
  },
  {
    id: 4,
    question: "香りの好みは？",
    options: [
      { text: "深みのあるウッディ", target: 2 },
      { text: "爽やかなフローラル", target: 3 },
    ],
  },
];
export const DiagnosisTool = () => {
  const [isClient, setIsClient] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedTargets, setSelectedTargets] = useState<number[]>([]);
  
  useEffect(()=>{
    setIsClient(true);
  },[]);
  if (!isClient){
    return <div className="min-h-[500px]" />;
  }

  const handleAnswer = (target: number) => {
    setSelectedTargets([...selectedTargets, target]);
    setStep(step + 1);
  };

  const getResult = () => {
    const counts: { [key: number]: number } = {};
    selectedTargets.forEach(id => { counts[id] = (counts[id] || 0) + 1; });
    const resultId = Object.keys(counts).reduce((a, b) =>
      counts[Number(a)] > counts[Number(b)] ? Number(a) : Number(b)
      , selectedTargets[selectedTargets.length - 1]);
    return DiagnosisResults[Number(resultId)];
  };

  return (
    <div className="max-w-2xl mx-auto min-h-[500px] relative">
      <AnimatePresence mode="wait">
        {/* 質問画面 */}
        {step > 0 && step <= questions.length && (
          <motion.div
            key={`question-${step}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="py-10"
            >
            {/* プログレスバー */}
            <div 
              className="
                w-30 
                mx-auto 
                mb-16 
                overflow-hidden
              ">
              <p 
                className="
                  text-sm 
                  tracking-[0.3em] 
                  text-gray-400 
                  mb-2 
                  text-center 
                  uppercase
                ">
                  Step {step} / 4
              </p>
              <div 
                className="
                  w-full 
                  bg-gray-200 
                  h-[1px] 
                  relative
                ">
                <motion.div
                  className="
                    bg-[var(--primary-brown)] 
                    h-[1px] 
                    absolute 
                    top-0 
                    left-0
                    "
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 
              className="
                font-[var(--font-zen-old-mincho)] 
                text-xl 
                text-center 
                mb-12 
                tracking-wider">
              {questions[step - 1].question}
            </h2>

            <div 
              className="
                grid grid-cols-1 
                gap-4
                ">
               {questions[step - 1].options.map((opt,i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.target)}
                  className="
                    w-full 
                    p-6 
                    bg-white 
                    hover:bg-[#FDFBF9] 
                    border border-transparent 
                    hover:border-[var(--primary-pink)]/20 
                    transition-all 
                    rounded-sm 
                    text-center 
                    text-xl 
                    tracking-widest 
                    text-[var(--primary-brown)] 
                    shadow-sm"
                  >
                  {opt.text}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* 結果画面  */}
        {step > questions.length && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 12 }}
            className="
              p-12 
              bg-white 
              shadow-sm 
              rounded-sm 
              text-center"
            >
            <p 
              className="
                font-bold 
                mb-2
                ">
                YOUR BEST MATCH
            </p>
            <h2 
              className="
                text-2xl 
                font-bold 
                mb-6
              ">
                {getResult().title}
            </h2>
            <div 
              className="
                bg-[#F9F4F0] 
                p-8 
                rounded-lg 
                mb-8
              ">
              <div 
                className="
                  w-48 
                  h-48 
                  mx-auto 
                  bg-gray-200 
                  mb-6 
                  rounded-lg 
                  overflow-hidden
                ">
                <img src={getResult().imageUrl} 
                     alt={getResult().title} 
                     className="
                      w-full 
                      h-full 
                      object-cover"
                />
              </div>
              <p 
                className="
                  text-gray-700 
                  leading-relaxed 
                  font-medium">
                    {getResult().description}
              </p>
            </div>
            <div 
              className="
                flex flex-col 
                gap-4 
                items-center
                ">
              <Link 
                href="/#products"
                className="
                  w-full max-w-xs
                  bg-[var(--primary-brown)] 
                  text-white 
                  py-5 
                  rounded-sm
                  font-bold
                  over:bg-opacity-90 
                  transition-all 
                  duration-300
                  shadow-[0_10px_30px_rgba(126,44,44,0.15)]
                  flex items-center justify-center
                ">
                商品一覧へ戻る
              </Link>
              <button 
                onClick={() => { setStep(1); setSelectedTargets([]); }} 
                className="
                  text-base 
                  underline 
                  text-gray-600
                ">
                もう一度診断する
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};