<?php
    header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");
    header("Access-Control-Allow-Methods: GET, POST, DELETE");
    header("Access-Control-Allow-Origin: *");

    require_once '../services/users.php';

    function requestUser(){
    $method = $_SERVER["REQUEST_METHOD"];

    if($method === "POST"){
        $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
        $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
        $password = $_POST["password"];
        $password = password_hash($password, PASSWORD_DEFAULT);
        $addUser = postUsers($username, $email, $password);
        echo $addUser;
    }
}
    requestUser();
?>