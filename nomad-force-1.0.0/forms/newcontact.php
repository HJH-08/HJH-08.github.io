<?php

ini_set('display_errors', 1);
error_reporting(E_ALL|E_STRICT);

if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];


    $mailTo = 'hojunhan49@gmail.com';
    $headers = "From: ".$mailFrom;
    $txt = "You have recevied an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers) or die("Error");

    echo '<script type="text/javascript">alert("Message was sent successfully, thank you!")</script>';
    header("Location: index.html");
}
?>