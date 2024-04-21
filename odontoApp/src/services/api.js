import{ useState, useEffect } from 'react';
import axios from 'axios';

export default function  buscaDadosApi(variavel){
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://192.168.0.8/testes/backendReact/api.php?action=${variavel}`);
      setData(response.data);
    } catch (error) {
      setError('Ocorreu um erro ao buscar os dados da API.', error);
    }
  };
  fetchData();

  useEffect(fetchData, []);
};