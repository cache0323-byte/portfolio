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