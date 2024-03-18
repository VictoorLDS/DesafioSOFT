<?php 
require_once '../index.php';


    function postUsers($username, $email, $password){
        $addUser = myPDO->prepare("INSERT INTO USERS(USERNAME, EMAIL, PASSWORD) VALUES ('{$username}', '{$email}', '{$password}')");
        $addUser->execute();
    }

    function loginUsers($username, $password){
        $getUser = myPDO->query("SELECT * FROM USERS WHERE USERNAME = '{$username}'");
        $selectedUser = $getUser->fetch();
        if($selectedUser) {
            if (password_verify($password, $selectedUser["password"])) {
                return json_encode(array("code" => $selectedUser["code"], "username" => $selectedUser["username"]));
            }
        }
        return json_encode(array('error' => 'user not found'));
    }
?>