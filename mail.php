<?php


 require './assets/PHPMailer/class.phpmailer.php';
 require './assets/PHPMailer/class.pop3.php';
 require './assets/PHPMailer/class.smtp.php';
 require './assets/PHPMailer/class.phpmaileroauth.php';

 
// use PHPMailer;
//use PHPMailer\PHPMailer\Exception;


$firstname = isset($_POST['firstname']) ? $_POST['firstname'] : '';
$surname = isset($_POST['surname']) ? $_POST['surname'] : '';
$contact = isset($_POST['contact']) ? $_POST['contact'] : '';
$stuForm = isset($_POST['student-form']) ? $_POST['student-form'] : '';

$mealType = isset($_POST['mealType']) ? $_POST['mealType'] : '';

$meal = isset($_POST['meal']) ? $_POST['meal'] : '';
$mealQuantity = isset($_POST['mealQty']) ? $_POST['mealQty'] : '';
// $mealCost = isset($_POST['mealCost']) ? $_POST['mealCost'] : '';

$bev = isset($_POST['beverage']) ? $_POST['beverage'] : '';
$bevQuantity = isset($_POST['beverageQty']) ? $_POST['beverageQty'] : '';
$orderComments = isset($_POST['order-comments']) ? $_POST['order-comments'] : '';
// $bevCost = isset($_POST['bevCost']) ? $_POST['bevCost'] : '';

$valStatus = true;
$errMsg = array();

if(!isset($firstname) || empty($firstname)){
    $valStatus = false;
    $errMsg[] = "Blank firstname entries are NOT allowed!!!";
}

if(!isset($surname) || empty($surname)){
    $valStatus = false;
    $errMsg[] = "Blank surname entries are NOT allowed!!!";
}

if(!isset($contact) || empty($contact)){
    $valStatus = false;
    $errMsg[] = "Blank contact entries are NOT allowed!!!";
}

echo json_encode(
    array(
        'ok' => $valStatus,
        'messages' => $errMsg
    )
    );


    //PHPMailer Object
$mail = new PHPMailer(true); //Argument true in constructor enables exceptions
$mail->isSMTP();
$mail->isHTML(true);


//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;

//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';

//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;

//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';

//Whether to use SMTP authentication
$mail->SMTPAuth = true;


$mail->Username = "larrymayers101@gmail.com";
$mail->Password = "M@y3rZT#ch!4";

//From email address and name
$mail->From = "info@yourdomain.com";
$mail->FromName = "Healthy Gourmet - Lunch Order Services";

//To address and name
$mail->addAddress("larry.mayers@outlook.com", "Larry Mayers");
// $mail->addAddress("recepient1@example.com"); //Recipient name is optional

//Address to which recipient will reply
$mail->addReplyTo("larrymayers101@gmail.com", "Reply");

//CC and BCC
$mail->addCC("cc@example.com");
$mail->addBCC("bcc@example.com");

//Send HTML or Plain Text email
$mail->isHTML(true);

//Set the subject line
$mail->Subject = "Lunch Order";
$mail->Body = "<p><b>Wednesday</b>: Please review order details below.</p>";
//$mail->AltBody = "This is the plain text version of the email content";


//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
// $mail->msgHTML(file_get_contents('contents.html'));

//Replace the plain text body with one created manually
// $mail->AltBody = 'This is a plain-text message body';

//Attach an image file
// $mail->addAttachment('images/phpmailer_mini.png');



try {
    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}