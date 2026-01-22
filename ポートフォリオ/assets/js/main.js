'use strict';
//lineのアニメーション
    document.addEventListener('DOMContentLoaded', () => {
        const animatedLines = document.querySelectorAll('.animated-line');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    
                    // 1秒後にクラスを追加
                    setTimeout(() => {
                        target.classList.add('is-drawn');
                    }, 1000); 

                    observer.unobserve(target);
                }
            });
        }, {
            rootMargin: '0px', 
            threshold: 0.1 
        });

        animatedLines.forEach(line => {
            observer.observe(line);
        });
    })
