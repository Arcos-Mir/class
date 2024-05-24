$(document).ready(function(){
    
    $('#boton').on('click', function(){
        //$(this).addClass('naranja');
        //$(this).removeClass('boton');

        //$(this).toggleClass('naranja');

        $(this).css({//no se puede alternar css con toggle
            'height': '100px',
            'width': '100px'
        });
    });
});