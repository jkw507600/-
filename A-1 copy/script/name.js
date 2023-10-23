$(function(){
    // 메뉴
    $('.gnb').hover(
        function(){
            $(this).find('ul').stop().slideDown('slow')
        },

        function(){
            $(this).find('ul').stop().slideUp('fast')
        },
    )

    // 탭
    $('.item').eq(0).show()

    $('.titles h3').click(function(){
        var idx = $(this).index()

        $('.titles h3').removeClass('active')
        $(this).addClass('active')

        $('.item').hide()
        $('.item').eq(idx).show()
    })

    // 슬라이드    
    setInterval(function(){
        $('.slides').animate({top:'-100%'},function(){
            $('.slide').first().appendTo('.slides')
            $(this).css('top',0)
        })
        }, 3000)    
    
    // 모달    
    $('#ShowModal').click(function(){
        $('.modal').show()
    })
    $('#CloseModal').click(function(){
        $('.modal').hide()
    })    
})
 

// $(function(){
//     // 메뉴
//     $('.gnb').hover(
//         function(){
//             $(this).find('ul').stop().slideDown('fast')
//         },
//         function(){
//             $(this).find('ul').stop().slideUp('fast')
//         }
//     )

//     // 탭 
//     $('.item').eq(0).show()

//     $('.titles h3').click(function(){
//         var idx = $(this).index()

//         $('.titles h3').removeClass('active')
//         $(this).addClass('active')

//         $('item').hide()
//         $('item').eq(idx).show()
//     })

//     // 슬라이드
//     setInterval(function(){
//         $('.slides').animate({top:'-100%'},function(){
//             $('.slide').first().appendTo('.slides')
//             $(this).css('top',0)
//         })
//     },3000)

//     // 모달
//     $('Modal')
// })