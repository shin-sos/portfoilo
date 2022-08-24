$(function(){

    $('nav a').on('click',pageMove);
            $('aside a').on('click',pageMove);
            
            function pageMove(){    
                // let idx = $('nav a').eq(1).index();
                event.preventDefault();
                let idx = $(this).index();
                
                let conTop = $('.con').eq(idx).offset().top;
                $('html').animate({ scrollTop:conTop },600);
                
                update(idx);
            }
    
            function update(n){
                $('aside a, nav a').removeClass('active');
                $(`nav a:eq(${n}), aside a:eq(${n})`).addClass('active');
    
                //$('nav a').eq(idx).addClass('active');
                ///$('aside a').eq(idx).addClass('active');
                
            }
            console.log(
                $('.con').length
            )
            $('aside').html('<a></a><a></a><a></a>')
});