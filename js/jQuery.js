//------------------------------------------------------//
//                        ex1                           //
//------------------------------------------------------//

$(document).ready(function(){
    $('#btnclick').click(function(){
        alert('apertou o meu o botão? que isso?')
    })
})

//------------------------------------------------------//
//                        ex2                           //
//------------------------------------------------------//


$(document).ready(function(){
    $('#ex2').mouseover(function(){
        $(this).css('background-color','lightblue');
    }).mouseout(function(){
        $(this).css('background-color','black');
    })
})

//------------------------------------------------------//
//                        ex3                           //
//------------------------------------------------------//


$(document).ready(function(){
    $('#options').change(function(){
        alert('ent vc é '+ $(this).val());
    })
});

//------------------------------------------------------//
//                        ex4                           //
//------------------------------------------------------//
