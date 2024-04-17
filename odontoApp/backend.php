<?php

// Array de usuários
$users = array(
    array("id" => 1, "name" => "João"),
    array("id" => 2, "name" => "Maria"),
    array("id" => 3, "name" => "Pedro")
);

// Configura o cabeçalho para permitir requisições de qualquer origem (CORS)
header("Access-Control-Allow-Origin: *");
// Define o tipo de conteúdo como JSON
header("Content-Type: application/json");

// Retorna os usuários como JSON
echo json_encode($users);
?>
