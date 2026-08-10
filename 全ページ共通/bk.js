$(document).ready(function(){

  $(function(){
    $(".toggle--drawer__box,.close--drawer__box").on("click", function(){
      console.log("aaa");
      $('body,html').scrollTop(0);
      $(".contents_body").toggleClass("drawer_on");
      $(".floating_button").toggleClass("floating_not_display");
    });
  });

  $(function(){
    // #で始まるリンクをクリックした場合
    $('a[href^="#"]').click(function() {
      // スクロールの速度
      let speed = 600;
      // スクロールタイプ
      let type = 'swing';
      // href属性の取得
      let href= $(this).attr("href");
      // 移動先の取得（hrefが#indexならトップ$(html)に、）
      let target = $(href == "#index" ? 'html' : href);
      // 移動先のポジション取得
      let position = target.offset().top;
      // animateでスムーススクロール
      $('body,html').animate({scrollTop:position - "150"}, speed, type);
      return false;
    });
  });
});

