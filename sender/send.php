<?php
header("Access-Control-Allow-Origin: *"); 

if((isset($_POST['phone'])&&$_POST['phone']!="")){
        $to = 'Lisitsayulia@yandex.ru'; 
        $subject = 'Обращение с сайта https://ur-center46.ru';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p> 
                        <p>Вопрос: '.$_POST['mail'].'</p>                   
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Заявка с сайта ЦЕНТР ЮРИДИЧЕСКОЙ ПОДДЕРЖКИ В КУРСКЕ <Lisitsayulia@yandex.ru>\r\n";
        if (mail($to, $subject, $message, $headers)) {
            http_response_code(200);
            die();
        } else {
            http_response_code(403);
            die();
        }

}
?>