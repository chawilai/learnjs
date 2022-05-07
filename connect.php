<?php
$servername = "localhost";
$username = "root";
$password = "12341234";
$database = "learnjs";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //echo "Connected successfully"; 
    $conn->query('SET character_set_client = utf8mb4');
    $conn->query('SET character_set_results = utf8mb4');
    $conn->query('SET character_set_connection = utf8mb4');
    // $conn->query('SET collation_connection = @@collation_database');
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
