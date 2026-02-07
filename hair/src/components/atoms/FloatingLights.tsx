'use client';

import { motion } from 'framer-motion';

export const FloatingLights = () => {
  // 光の粒を8個生成
  const particles = Array.from({ length: 8 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* 1. ベースの大きな揺らぎ（オーロラのような土台） */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 5, 0] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-[#E9F0E8] via-white to-[#F5F0E6] blur-[100px]"
      />

      {/* 2. キラキラ動く光の粒たち */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%`,
            scale: 0,
            opacity: 0 
          }}
          animate={{ 
            y: [0, -100, 0],       // 上下にふわふわ
            opacity: [0, 1, 0],    // 瞬き
            scale: [0, 1.2, 0],    // 大きくなったり小さくなったり
          }}
          transition={{ 
            duration: Math.random() * 4 + 4, // 4〜8秒で1サイクル
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            backgroundColor: '#fff', // 白にするとより輝いて見えます
            borderRadius: '50%',
            boxShadow: '0 0 15px 2px rgba(255, 255, 255, 0.9), 0 0 30px 5px rgba(194, 209, 193, 0.4)', 
          }}
        />
      ))}

      {/* 3. 画面全体を覆う繊細な光のベール */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-tr from-[#F5F0E6]/30 via-transparent to-[#E9F0E8]/30"
      />
    </div>
  );
};