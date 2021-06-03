<?php
header("Access-Control-Allow-Origin: *"); 

if((isset($_POST['phone'])&&$_POST['phone']!="")){
        $to = 'rudikov-web@ya.ru,asmi046@gmail.com,79067076385@yandex.ru'; 
        $subject = 'Обращение с сайта манипулятор-мск.рф'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p> 
                        <p>Время подачи: '.$_POST['time'].'</p>                   
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Заявка с сайта Аренда манипулятора <noreply@манипулятор-мск.рф>\r\n";
        if (mail($to, $subject, $message, $headers)) {
            http_response_code(200);
            die();
        } else {
            http_response_code(403);
            die();
        }

}
?>