import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { addNumberToFront } from './NameHandler'; // Importa a função do arquivo NameHandler.js

export default function App() {
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  const handleName = () => {
    // Chama a função do arquivo NameHandler.js para manipular o nome
    const modifiedName = addNumberToFront(name);
    setResult(modifiedName); // Atualiza o estado com o nome modificado
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Digite seu nome"
        onChangeText={text => setName(text)}
        value={name}
      />
      <Button title="Enviar Nome" onPress={handleName} />
      {result ? <Text>{result}</Text> : null}
    </View>
  );
}
