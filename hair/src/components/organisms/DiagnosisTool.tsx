'use client';

import { useState } from 'react';
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
  const [step, setStep] = useState(0);
  const [selectedTargets, setSelectedTargets] = useState<number[]>([]);

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
        
        {/* --- 1. 開始画面 --- */}
        {step === 0 && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="p-12 bg-white shadow-sm rounded-2xl text-center"
          >
            <h2 className="text-xl mb-8 leading-relaxed font-bold">
              30秒でわかる。<br />あなたの髪に、真実の潤いを。
            </h2>
            <motion.button 
              whileHover={{ scale: 1.05 }} // ぷにっ
              whileTap={{ scale: 0.95 }}   // ギュッ
              onClick={() => setStep(1)}
              className="bg-[#7e2c2c] text-white px-12 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              診断をはじめる
            </motion.button>
          </motion.div>
        )}

        {/* --- 2. 質問画面 --- */}
        {step > 0 && step <= questions.length && (
          <motion.div
            key={`question-id-${questions[step-1].id}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="p-10 bg-white shadow-sm rounded-2xl"
          >
            <div className="w-full bg-gray-100 h-1 mb-8">
              <motion.div 
                className="bg-[#7e2c2c] h-1" 
                initial={{ width: 0 }}
                animate={{ width: `${(step / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-sm font-bold text-[#ec96a3]">QUESTION {step}/4</p>
            <h2 className="text-xl mt-4 font-bold">{questions[step - 1].question}</h2>
            <div className="mt-8 space-y-4">
              {questions[step - 1].options.map((opt, i) => (
                <motion.button 
                  key={opt.text}
                  whileHover={{ x: 10, backgroundColor: "#F9F4F0" }} // 少し右にスライド
                  onClick={() => handleAnswer(opt.target)} 
                  className="w-full p-5 border border-gray-100 rounded-xl text-left transition-all flex justify-between items-center group"
                >
                  {opt.text}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* --- 3. 結果画面 --- */}
        {step > questions.length && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 12 }}
            className="p-12 bg-white shadow-sm rounded-2xl text-center"
          >
            <p className="text-[#ec96a3] font-bold mb-2">YOUR BEST MATCH</p>
            <h2 className="text-2xl font-bold mb-6">{getResult().title}</h2>
            <div className="bg-[#F9F4F0] p-8 rounded-lg mb-8">
              <div className="w-48 h-48 mx-auto bg-gray-200 mb-6 rounded-lg overflow-hidden">
                 <img src={getResult().imageUrl} alt={getResult().title} className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">{getResult().description}</p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <Link href="/#products" className="w-full max-w-xs bg-[#7e2c2c] text-white py-3 rounded-full font-bold text-center">
                Topページへ戻る
              </Link>
              <button onClick={() => { setStep(0); setSelectedTargets([]); }} className="text-sm underline text-gray-400">
                もう一度診断する
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};