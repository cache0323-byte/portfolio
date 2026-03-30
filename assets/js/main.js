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


// Intersection Observer
const observeFade = () => {
    const targets = document.querySelectorAll('.js-fade');
    
    const options = {
        root: null, // ビューポートを基準にする
        rootMargin: '0px',
        threshold: 0.2 // 15% 画面に入ったら実行
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    targets.forEach(target => observer.observe(target));
};

// DOMが読み込まれたら実行
window.addEventListener('DOMContentLoaded', observeFade);

const initFvMainAnimation = () => {
    const fvMains = document.querySelectorAll('.fv_main');
    if (fvMains.length === 0) return;

    // 1. 全ての fv_main に対して文字分割処理
    fvMains.forEach(main => {
        const text = main.textContent.trim();
        main.innerHTML = ''; 
        
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.className = 'char';
            span.textContent = char === ' ' ? '\u00A0' : char;
            main.appendChild(span);
        });
    });

    // 2. GSAPで全 .char を一斉に（かつ順番に）アニメーション
    if (typeof gsap !== 'undefined') {
        gsap.to('.fv_main .char', {
            duration: 1.0,
            rotateX: 0,
            opacity: 1,
            ease: "back.out(1.5)",
            stagger: 0.03, // 文字数が多いので少し早めに設定
            delay: 0.8     // ラインが出始めてから動くように調整
        });
    }
};

// DOM構築後に実行
document.addEventListener('DOMContentLoaded', initFvMainAnimation);


//モーダル
// モーダル制御（書き換え案）
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('works_modal');
    const closeBtn = document.querySelector('.modal_close');

    document.querySelectorAll('.works_container li').forEach(item => {
        item.addEventListener('click', () => {
            // データの取得（HTMLに追加したdata属性から拾う）
            const title = item.getAttribute('data-title') || "Title";
            const text = item.getAttribute('data-text') || "Description";
            const img = item.querySelector('img').getAttribute('src');
            const url = item.getAttribute('data-url');
            const github = item.getAttribute('data-github');

            // モーダルへ反映
            document.getElementById('modal_title').innerText = title;
            document.getElementById('modal_text').innerText = text;
            document.getElementById('modal_img').src = img;
            
            // リンクボタンの表示・非表示制御
            const urlBtn = document.getElementById('modal_url');
            const gitBtn = document.getElementById('modal_github');
            
            urlBtn.href = url || "#";
            urlBtn.style.display = url ? "inline-block" : "none";
            gitBtn.href = github || "#";
            gitBtn.style.display = github ? "inline-block" : "none";

            // クラスを付与して表示（CSSのアニメーションが効く）
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('is-active');
            }, 10);
            document.body.style.overflow = 'hidden'; // 背景スクロール停止
        });
    });

    // 閉じる処理
    const closeModal = () => {
        modal.classList.remove('is-active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 400); // アニメーションが終わるまで待ってから消す
        document.body.style.overflow = 'auto';
    };

    closeBtn.onclick = closeModal;
    // 背景クリックでも閉じる
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
}); 