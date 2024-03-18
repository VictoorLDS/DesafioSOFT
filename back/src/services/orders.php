<?php
    include("../index.php");

    function getOrder($code){
        $orders = myPDO->query("SELECT * FROM orders WHERE USERS_CODE = $code");
        $dataOrders = $orders->fetchALL();
        return json_encode($dataOrders);
    }

    function postOrder($code, $total, $tax, $users_code){
        $addOrder = myPDO->prepare("INSERT INTO orders (code, total , tax, users_code) VALUES ('$code', $total, $tax, $users_code)");
        $addOrder->execute();
    }
    
    function deleteOrder($code){
        $deleteOrder = myPDO->prepare("DELETE FROM orders WHERE code = {$code}");
        $deleteOrder->execute();
        return "Order Deleted";
    }
?>