import axios from 'axios';
const localhost= 'http://172.20.10.8/testes/backendReact/api.php' //192.168.0.8
const api = axios.create({
  baseURL: localhost,
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
//Recebe nome do anestésico que será usado para o cálculo
export const fetchNomeAnestesico=async()=>{
  try{
    const response= await api.get("?action=nomeAnestesicoDropdown");
    console.log("deu certo")
    return response.data;
  }catch(error){
    console.error("Erro ao buscar nome do anestésico: tela api",error);
    throw error;
  }
}
//Recebe os nomes dos anestésicos para o dropdown da home
export const fetchNomesDropdown=async()=>{
  try{
    const response= await api.get("?action=nomesDropdown");
    return response.data;
  }catch(error){
    console.error("Erro ao buscar os nomes dos anestésicos no banco de dados para compor o dropdown: tela api",error);
    throw error;
  }
}
//envia peso do paciente, dose máxima por quilo e volume do tubete
export const handleSubmitDetalhes = (dataDetalhes) => {
  axios.post(localhost, dataDetalhes)
    .then(response => {
      console.log('Resposta da API (detalhes):', response.data);
    })
    .catch(error => {
      console.error('Erro ao enviar dados para a API:', error);
    });
};
//envia nome do anestésico
export const handleSubmitNome = (dataNome) => {
  axios.post(localhost, dataNome)
    .then(response => {
      console.log('Resposta da API (dropdown):', response.data);
    })
    .catch(error => {
      console.error('Erro ao enviar dados para a API:', error);
    });
};
//envia dados do novo anestésico (cadastro de anestésico)
export const handleSubmitNovoAnestesico = (dataNovoAnestésico) => {
  axios.post(localhost, dataNovoAnestésico)
    .then(response => {
      console.log('Resposta da API (Editar):', response.data);
    })
    .catch(error => {
      console.error('Erro ao enviar dados para a API:', error);
    });
};
//envia nome do anestésico a ser deletado (remover anestésico)
export const handleSubmitDeletarAnestesico = (nomeRemoverAnestesico) => {
  axios.post(localhost, nomeRemoverAnestesico)
    .then(response => {
      console.log('Resposta da API (Remover):', response.data);
    })
    .catch(error => {
      console.error('Erro ao enviar dados para a API:', error);
    });
};
export default api;