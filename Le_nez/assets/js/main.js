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
