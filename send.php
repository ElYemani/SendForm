<?php
    // ! Check if user/someone coming from request
    if($_SERVER['REQUEST_METHOD'] == 'POST'){

        // & Assign Variables
        $user_name   = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
        $user_number = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
        $user_mail   = filter_var($_POST['mail'], FILTER_SANITIZE_EMAIL);
        $user_msg    = filter_var($_POST['msg'], FILTER_SANITIZE_STRING);

        // & Creating array of error &
        $formErrors = array();

        if(strlen($user_name) <= 3){
            $formErrors[] = 'username must be more than <strong>3</strong> latters';
        }

        $headers = 'From: ' . $user_mail . '\r\n';
        if(empty($formErrors)){
            mail('jhadqyl302@gmail.com', 'contact Form', $user_msg, $headers);
            $user_name   = '';
            $user_number = '';
            $user_mail   = '';
            $user_msg    = '';
        }
    }
?>