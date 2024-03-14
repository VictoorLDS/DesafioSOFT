<?php
    include("../index.php");

    function getOrder(){
        $orders = myPDO->query("SELECT * FROM orders");
        $dataOrders = $orders->fetchALL();
        return json_encode($dataOrders);
    }

    function postOrder($code, $total, $tax){
        $addOrder = myPDO->prepare("INSERT INTO orders (code, total , tax) VALUES ('$code', $total, $tax)");
        $addOrder->execute();
    }
    
    function deleteOrder($code){
        $deleteOrder = myPDO->prepare("DELETE FROM orders WHERE code = {$code}");
        $deleteOrder->execute();
        return "Order Deleted";
    }
?>