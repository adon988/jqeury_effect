  $(window).load(function(){
    box_animate();
  });
  var box_animate = function(){
    setTimeout("box_animate();",3800);
    var animate_init = 700;
    var animate_final = 600;
    var animate_activate = "swing";
    var animate_activate2 = "";
    var element_length = $(".element").filter(function () {return $(this).css('opacity')  > 0;}).length - 1;
    var element_random_target_num = Math.floor(Math.random()*element_length);
    var element_random_target = $(".element").filter(function () {return $(this).css('opacity')  > 0;}).eq(element_random_target_num);
    var element_img_height = element_random_target.find('img').height();

    element_random_target.find('.flip_down_content, .flip_up_content').css('visibility', 'hidden');//visibility:hidden visible

    element_random_target.find('.flip_names').animate({width: "-=200","margin-left": "+=100"},animate_init, animate_activate ,function() {
      element_random_target.find('.flip_names').animate({width: "+=200","margin-left": "-=100"},animate_final, animate_activate ,function(){
        element_random_target.find('.flip_down_content, .flip_up_content').css('visibility', 'visible');//visibility:hidden visible
      });

    });

    element_random_target.find('img').animate({width: "-=200px", height:element_img_height },animate_init, animate_activate ,function() {
      element_random_target.find('img').animate({width: "+=200px",height:element_img_height },animate_final, animate_activate );
    });
  }; 