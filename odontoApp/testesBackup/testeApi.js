import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchData = async () => {
      try {
        // Substitua 'sua_url_da_api' pela URL real da sua API
        const response = await axios.get('sua_url_da_api');
        // Define os dados recebidos no estado 'data'
        setData(response.data);
      } catch (error) {
        // Em caso de erro, define a mensagem de erro no estado 'error'
        setError('Ocorreu um erro ao buscar os dados da API.');
      }
    };

    // Chama a função para buscar os dados da API quando o componente é montado
    fetchData();
  }, []);

  return (
    <View>
      {/* Renderiza os dados se estiverem disponíveis */}
      {data && (
        <View>
          {/* Renderiza os dados recebidos da API */}
          <Text>{JSON.stringify(data)}</Text>
        </View>
      )}

      {/* Renderiza a mensagem de erro se ocorrer algum erro */}
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default YourComponent;
