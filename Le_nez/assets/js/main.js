'use strict';

{
    $(function(){
        $('.stick_menu').on('click', function(){
            $('.nav').toggleClass('active');

            // .navに.activeがあるかどうかで、.stick_menuの表示切り替え
            if ($('.nav').hasClass('active')) {
                $('.stick_menu').hide();
            } else {
                $('.stick_menu').show();
            }
        });

        $('.nav_btn, .nav_item a').on('click', function(){
            $('.nav').removeClass('active');
            // メニューを閉じたときは、.stick_menu を表示する
            $('.stick_menu').show();
        });


        $('.menu_tag').on('click', function() {
            $('.menu_tag').removeClass('active');
            $(this).addClass('active');
          
            const target = $(this).data('target');
            $('.menu_content').removeClass('active');
            $('.content-' + target).addClass('active');
          });      
    });
}

//h2 の動き
{
    $(function() {
    $(window).on('scroll', function() {
        $('.aroma-fade').each(function() {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            // 画面の3/4くらいまでスクロールしたら発火
            if (scroll > elemPos - windowHeight + (windowHeight / 4)) {
                $(this).addClass('is-active');
            }
        });
    });
    // ロード時にも一度実行（最初から画面内にある見出しのため）
    $(window).trigger('scroll');
});
}
