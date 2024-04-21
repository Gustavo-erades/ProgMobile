<?php

// Definindo o cabeçalho para indicar que a resposta é JSON
header('Content-Type: application/json');

// Função que retorna "oi" e uma variável com o valor 1
function sayHi() {
    $response = array(
        'message' => 'Oi',
        'value' => 1
    );
    return json_encode($response);
}

// Verifica se a requisição é para a função sayHi
if (isset($_GET['action']) && $_GET['action'] == 'sayHi') {
    // Chama a função sayHi e imprime a resposta
    echo sayHi();
} else {
    // Retorna uma mensagem de erro se a ação não for encontrada
    echo json_encode(array('error' => 'Ação não encontrada'));
}
?>
