<?php

require_once("connect.php");

if(isset($_GET['title']) && isset($_GET['body'])){
    $stmt = $conn->prepare("INSERT into language (title, body) VALUE (?, ?)");
    $stmt->execute([
        $_GET['title'],
        $_GET['body'],
    ]);
    
    echo json_encode($conn->lastInsertId());
}
