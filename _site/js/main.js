$(document).ready(function () {
    $(window).scroll(function () { 
        $("#subwelcome").css("position", "static"); 
        });
    $('#mailing-list-form').click(function() {
        $('#overlay').fadeIn('fast');
        });
    $('#close-modal').click(function() { 
        $('#overlay').fadeOut('fast');
        });
    /*General scroll down on landing page*/
    $('#scroll-down-1').click(function(){
         $('html, body').animate({                     
                    scrollTop: $("#how-we-work-title").offset().top
                     }, 1000);                     
        });
    $('#scroll-down-2').click(function(){
         $('html, body').animate({                     
                    scrollTop: $("#who-we-work-with-title").offset().top
                     }, 1000);                     
        });        
    $('#scroll-down-3').click(function(){
         $('html, body').animate({                     
                    scrollTop: $("#why-are-we-doing-this-title").offset().top
                     }, 1000);                     
        });        
    $('#scroll-down-4').click(function(){
         $('html, body').animate({                     
                    scrollTop: $("#last").offset().top
                     }, 1000);                     
        });      
    /*Mobile scroll-down*/          
    $('#q1').click(function(){
         $('html, body').animate({                     
                    scrollTop: $("#how-we-work-title").offset().top
                     }, 1000);                     
        });
    $('#q2').click(function(){
         $('html, body').animate({                     
                    scrollTop: $("#who-we-work-with-title").offset().top
                     }, 1000);                     
        });
    $('#q3').click(function(){
         $('html, body').animate({                     
                    scrollTop: $("#why-are-we-doing-this-title").offset().top
                     }, 1000);                     
        });                    
    
    /*Tabs on People Section*/

    $('#tab-accelerate').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('#accelerate-participants').siblings().fadeOut('fast');
        $('#accelerate-participants').fadeIn('500');
    })

    $('#tab-connect').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('#connect-graduates').siblings().fadeOut('fast');
        $('#connect-graduates').fadeIn('500');
    });

    $('#tab-residents').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('#residents').siblings().fadeOut('fast');
        $('#residents').fadeIn('500');
    })

    /*Gallery on Residence*/
    $('.gallery figure').click(function (){
        $('#active-photo-container').empty();
        $(this).children().clone().removeClass('blurred').appendTo('#active-photo-container');
        $('.gallery .thumb img').addClass('blurred');        
        $('#active-photo-container').click(function(){
            $(this).empty();            
            $('.gallery .thumb img').removeClass('blurred');            
            });
        });
    $('.player').click(function (){
        $('#active-video-holder').fadeOut('fast');
        $('#ytplayer').fadeIn('fast');
        });
    $('.video-thumb').click(function(){
        var picture = $(this).find('img').attr('src');
        var speaker = $(this).find('figcaption h6').text();
        var title = $(this).find('figcaption h5').text();
        var description = $(this).find('.video-content').text();
        var videoUrl = $(this).find('.yt-url').text();
        $('#ytplayer').fadeOut('fast');
        $('#active-video-holder').fadeIn('fast');
        $('#active-video-holder img').attr('src', picture);
        $('#active-video-holder h2').text(speaker);
        $('#active-video-holder h3').text(title);
        $('#active-video-holder p').text(description);        
        $('#ytplayer').attr('src', videoUrl);
        });
});