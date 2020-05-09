<?php
if (isset($_POST['mail'])) {
    try {
    $file = '../assets/addresses.txt';
    $mail =  $_POST['mail'] . "\n";
    putenv("GNUPGHOME=/tmp");
    $pubkey = file_get_contents("../assets/jsonlines.asc");
    $res = gnupg_init();
    $rtv = gnupg_import($res, $pubkey);
    $rtv = gnupg_addencryptkey($res, "0223BC767B9BBCCD1B596FAB7D0F8CBFDFE252FE");
    $enc = gnupg_encrypt($res, $mail);
    file_put_contents($file, $enc,  FILE_APPEND);
}catch (Exception $e)
{
    throw $e;
}
}
?>
