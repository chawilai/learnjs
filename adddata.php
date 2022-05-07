<?php

require_once("connect.php");

if(isset($_POST['title']) && isset($_POST['body'])){
    $stmt = $conn->prepare("INSERT into language (title, body) VALUE (?, ?)");
    $stmt->execute([
        $_POST['title'],
        $_POST['body'],
    ]);
    
    echo json_encode($conn->lastInsertId());
}
