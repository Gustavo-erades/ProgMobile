import axios from 'axios';

const api = axios.create({
  baseURL: "http://192.168.0.8/testes/backendReact/api.php",
  timeout: 1000,
});

export const fetchBoxCalculo = async () => {
  try {
    const response = await api.get("?action=boxCalculo"); // Rota da sua API
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos: tela api", error);
    throw error;
  }
};
export default api;