<?php
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: GET, POST, DELETE");
    header("Access-Control-Allow-Origin: *");
include("../services/orders.php");

function requestOrder(){

    $method = $_SERVER["REQUEST_METHOD"];

    if($method === "GET"){
        $dataOrder = getOrder();
        echo ($dataOrder);
    }
    if($method === "POST"){
        $code = $_POST["code"];
        $total = filter_input(INPUT_POST, "total", FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
        $tax = filter_input(INPUT_POST, "tax", FILTER_SANITIZE_NUMBER_FLOAT,  FILTER_FLAG_ALLOW_FRACTION);

        error_log("$code, $total, $tax");
        $addOrder = postOrder($code, $total, $tax);
        echo $addOrder;
    }
    if($method === "DELETE"){
        $Delete = $_GET["code"];
        $deleteOrder = deleteOrder($Delete);
        echo $deleteOrder;
    }
}
requestOrder()
?>