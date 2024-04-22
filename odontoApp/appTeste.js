import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const AppTeste = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (dataT) => {
    axios.post('http://192.168.0.8/testes/backendReact/serase.php', dataT)
      .then(response => {
        console.log('Resposta da API:', response.data);
        // Faça algo com a resposta, se necessário
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
      });
  };

  return (
    <View style={{marginTop:50}}>
      <TextInput
        placeholder="Nome"
        onChangeText={text => setData({ ...data, name: text })}
        value={data.name}
      />
      <TextInput
        placeholder="Email"
        onChangeText={text => setData({ ...data, email: text })}
        value={data.email}
      />
      <Button title="Enviar" onPress={handleSubmit(data)} />
    </View>
  );
};

export default AppTeste;
