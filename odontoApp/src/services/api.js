import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const action = 'boxCalculo';  

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://192.168.0.8/testes/backendReact/api.php?action=${action}`);
        setData(response.data);
      } catch (error) {
        // Em caso de erro, define a mensagem de erro no estado 'error'
        setError('Ocorreu um erro ao buscar os dados da API.', error);
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
          <Text>{JSON.stringify(data[0])}</Text>
        </View>
      )}
      <Text>
        {JSON.stringify(data['mlPorTubete'])}
      </Text>
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default YourComponent;
