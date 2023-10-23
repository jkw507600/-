$(function(){
   
    // modal
    $('.ShowModal').click(function(){
        $('.modal').show()
    })
    $('.CloseModal').click(function(){
        $('.modal').hide()
    })

    // menu
    $('.gnb').hover(
        function(){
            $(this).find('ul').stop().slideDown('fast')
        },
        function(){
            $(this).find('ul').stop().slideUp('fast')
        }
    )
    // slide
    setInterval(function(){
        $('.slides').animate({top:'-100%'},function(){
            $('.slide').first().appendTo('.slides')
            $(this).css('top',0)
        })
    },3000)
  

})