$(function(){
    'use strict';
    
    var usernameerror = true,
        usermailerror = true,
        usermsgerror  = true;
    
    $('.user_name').blur(function(){
        
        if($(this).val().length < 4){ // * Show errors
            $(this).css('border', '1px solid red');
            $(this).parent().find('.custom-alert').fadeIn(200);
            $(this).parent().find('.asterisx').fadeIn(100);
            usernameerror = true;
            
        }else{
            
            $(this).css('border', '1px solid green');
            $(this).parent().find('.custom-alert').fadeOut(200);
            $(this).parent().find('.asterisx').fadeOut(100);
            usernameerror = false;
            
        }
        
    });

    $('.user_mail').blur(function(){
        
        if($(this).val() === ''){
            
            $(this).css('border', '1px solid red');
            $(this).parent().find('.custom-alert').fadeIn(200);
            $(this).parent().find('.asterisx').fadeIn(100);
            usermailerror = true;
            
        }else{
            
            $(this).css('border', '1px solid green');
            $(this).parent().find('.custom-alert').fadeOut(200);
            $(this).parent().find('.asterisx').fadeOut(100);
            usermailerror = false;
            
        }
        
    });
    
    $('.user_msg').blur(function(){

        if($(this).val().length < 10){
            
            $(this).css('border', '1px solid red');
            $(this).parent().find('.custom-alert').fadeIn(200);
            $(this).parent().find('.asterisx').fadeIn(100);
            usermsgerror = true;
            
        }else{
            
            $(this).css('border', '1px solid green');
            $(this).parent().find('.custom-alert').fadeOut(200);
            $(this).parent().find('.asterisx').fadeOut(100);
            usermsgerror = false;
            
        }
    });

    $('.contact-form').submit(function(e){

        if(usernameerror === true || usermailerror === true || usermsgerror === true){
            e.preventDefault();

            $('.user_name', '.user_mail', '.user_msg').blur();
        }else{
        }
    });

});