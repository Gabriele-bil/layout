<?php
    $mailInvio = 'infocapre@libero.it';

    $nome = $_POST['nome'];
    $mail = $_POST['mail'];
    $object = $_POST['object'];
    $msg = $_POST['msg'];

    $message = "L'email è stata mandata ".$mail."\nNome: ".$nome."\nOggetto: ".$object."\nMessaggio: ".$msg;

    if (isset ($_POST['invia']) ) {
        mail($mailInvio, "Capre da latte".$object, $message);
        header("Location: contattaci.html");
        exit;
    }else {
        header("Location: contattaci.html");
        exit;
    }
?>