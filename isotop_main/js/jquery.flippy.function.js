        $(window).load(function(){

            var flip_randoms = function(){
                setTimeout("flip_randoms2();",3800);
                var element_length = $(".element").filter(function () {return $(this).css('opacity')  > 0;}).length - 1;
                var element_random_target_num = Math.floor(Math.random()*element_length);

                var element_random_target = $(".element").filter(function () {return $(this).css('opacity')  > 0;}).eq(element_random_target_num).find('.flip_names');
                var element_content = element_random_target.html();
                element_random_target.stop().flippy({
                    duration: "1000",
                    verso: element_content,
                });
            }; 
            
            flip_randoms2 = function(){
                flip_randoms();
            }; flip_randoms2();  

            
        }) 