$(document).ready(function() {
    $('#showMe').click(function() {
        $('#showMe').css( {
            'display': 'none'
        })
        $('#hideMe').css( {
            'display': 'flex'
        })
    })
    $('#rehide').click(function() {
        $('#hideMe').animate( {
            width: 'toggle'
        }) 
        $('#showMe').css( {
            'display': 'flex'
        })
    })
    $("#img").click(function(){
        $("#img").hide(4000)
        $('#imgReturn').show(100)
    })
    $("#imgReturn").click(function() {
        $("#img").show(3000)
        $("#imgReturn").hide(5000)
    })
    $("#tvBox").click(function(){
        var div = $(".div");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
        div.animate({height: '50px', opacity: '0.4'}, "slow");
        div.animate({width: '50px', opacity: '0.8'}, "slow");
    });
})

// https://www.tutorialrepublic.com/codelab.php?topic=faq&file=jquery-slide-left-and-right-effect