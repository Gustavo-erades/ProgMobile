import axios from 'axios';
const api = axios.create({
  baseURL: "http://192.168.0.8/testes/backendReact/api.php",
  timeout: 1000,
});
//Recebe dados do cálculo
export const fetchBoxCalculo = async () => {
  try {
    const response = await api.get("?action=boxCalculo"); // Rota API
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do cálculo: tela api", error);
    throw error;
  }
};
//Recebe dados do banco de dados
export const fetchDadosBd = async () => {
  try {
    const response = await api.get("?action=varBanco"); // Rota API
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do banco de dados: tela api", error);
    throw error;
  }
};
//envia nome do anestésico, peso do paciente, dose máxima por quilo e volume do tubete
export const handleSubmit = (data) => {
  axios.post('http://192.168.0.8/testes/backendReact/api.php', data)
    .then(response => {
      console.log('Resposta da API:', response.data);
    })
    .catch(error => {
      console.error('Erro ao enviar dados para a API:', error);
    });
};

export default api;