
$(document).ready(function () {
    if(window.scrollY > 0 || window.innerWidth <= 993){
        $('body').addClass('resizeHeader');
    }else{
        $('body').removeClass('resizeHeader');
    }

    $(window).resize(function(){
        if(window.innerWidth <= 993){
            $('body').addClass('resizeHeader');
        }else if(window.innerWidth > 993 && window.scrollY < 0){
            $('body').removeClass('resizeHeader');
        }
    })
    $(window).scroll(function () {
        if(this.scrollY > 0){
            $('body').addClass('resizeHeader');
        }else{
            $('body').removeClass('resizeHeader');
        }
    });
})