import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const YourComponent = () => {
  const [message, setMessage] = useState('');
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchData = async () => {
      try {
        // Faz uma solicitação HTTP GET para a API PHP
        const response = await axios.get('http://sua_url/api.php?action=sayHi');
        // Define os dados recebidos no estado
        setMessage(response.data.message);
        setValue(response.data.value);
      } catch (error) {
        // Em caso de erro, define a mensagem de erro no estado
        setError('Ocorreu um erro ao buscar os dados da API.', error);
      }
    };
    // Chama a função para buscar os dados da API quando o componente é montado
    fetchData();
  }, []);

  return (
    <View>
      {/* Renderiza os dados se estiverem disponíveis */}
      {message && value !== null && (
        <View>
          <Text>{message}</Text>
          <Text>Valor: {value}</Text>
        </View>
      )}

      {/* Renderiza a mensagem de erro se ocorrer algum erro */}
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default YourComponent;
