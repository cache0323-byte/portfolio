'use client'; // ボタン操作など動きがあるのでこれが必要

import { useState } from 'react';

export const DiagnosisTool = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-2xl mx-auto p-10 bg-white shadow-lg rounded-xl">
      <p className="text-sm text-[var(--primary-pink)] font-bold">STEP {step}</p>
      <h2 className="text-xl mt-2">質問：現在の髪の状態はどうですか？</h2>
      
      <div className="mt-8 space-y-4">
        <button onClick={() => setStep(step + 1)} className="w-full p-4 border rounded-lg hover:bg-gray-50 text-left">
          A. パサつきが気になる
        </button>
        <button onClick={() => setStep(step + 1)} className="w-full p-4 border rounded-lg hover:bg-gray-50 text-left">
          B. 広がりやすい
        </button>
      </div>
    </div>
  );
};