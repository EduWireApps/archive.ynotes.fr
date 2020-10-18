<?php
if (isset($_POST['mail'])) {
    try {
    $file = '../assets/addresses.txt';
    $mail =  $_POST['mail'] . "\n";
    putenv("GNUPGHOME=/tmp");
    $pubkey = file_get_contents("../assets/jsonlines.asc");
    $res = gnupg_init();
    $rtv = gnupg_import($res, $pubkey);
    $rtv = gnupg_addencryptkey($res, "A93F793715A4C892622BB1E875CCF34C5F74029D");
    $enc = gnupg_encrypt($res, $mail);
    file_put_contents($file, $enc,  FILE_APPEND);
}catch (Exception $e)
{
    throw $e;
}
}
?>
