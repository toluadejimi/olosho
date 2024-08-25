function updateCredits(uid,amount,type,reason,reward='') {
    var credits = parseInt(amount);
    if(type == 1){
         playAudio('coin.wav');
         user_info.credits = user_info.credits - credits;
    } else {
        //user_info.credits = user_info.credits + credits;
    }
    user_info.credits = parseInt(user_info.credits);
    $('.userCredits').hide();
    $('.userCredits').show();
    $('.userCredits').html('<b>'+user_info.credits+'</b>');

    if(mobileSite){
        
    }
    var query = uid+','+amount+','+type+','+reason+','+reward;
    $.get( aUrl, { action: 'updateCredits', query: query } );
}

function pushNotifMobile(data,type=0,time=1000){
    if(!$('.chatNotification').hasClass('is-visible')){     
        $('.chatNotification').attr('ng-click',"hideNotification()");                           
        $('.chatNotification').removeClass('is-visible');
        $('.chatNotificationPhoto').removeClass('sblur');   
        $('.chatNotificationPhoto').css('background-image', 'url('+ data.icon +')');
        $('.chatNotificationContent').html(data.message);
        setTimeout(function(){
            if(!$('.chatNotification').hasClass('is-visible')){
                $('.chatNotification').addClass('is-visible');
            }
        },100);             
        setTimeout(function(){
            if($('.chatNotification').hasClass('is-visible')){
                $('.chatNotification').removeClass('is-visible');
            }
        },time);                    
    }
}

function playAudio(sound) {
    var audio = new Audio(siteUrl+'assets/sounds/'+sound);
    audio.play();
}