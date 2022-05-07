<?php

require_once("connect.php");

if(isset($_GET['token']) && $_GET['token'] == 'xxxyyy'){
    $stmt = $conn->prepare("SELECT * FROM language");
    $stmt->execute();
    
    $data = $stmt->fetchall();
    
    echo json_encode($data);
}
