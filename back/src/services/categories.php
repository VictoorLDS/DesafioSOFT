<?php 
    include("../index.php");

    function getCategories(){
        $categories = myPDO->query("SELECT * FROM categories");
        $categories = $categories->fetchALL();
        return json_encode($categories);
    }

    function postCategories($name, $tax){
        $addCategory = myPDO->prepare("INSERT INTO categories ( name , tax) VALUES ('{$name}', {$tax})");
        $addCategory->execute();
    }

    function deleteCategories($code){
        $deleteCategory = myPDO->prepare("DELETE FROM categories where CODE = {$code}");
        $deleteCategory->execute();
        return "Category deleted";
    }

?>