import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const variavel = 'boxCalculo';  

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://192.168.0.8/testes/backendReact/api.php?action=${variavel}`);
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
      
        <View style={{marginTop:40}}>
          <Text>
            {JSON.stringify(data['mlPorTubete'])}
          </Text>
        </View>
     
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default YourComponent;
