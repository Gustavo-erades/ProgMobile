import { View, TouchableOpacity, Text, Alert } from 'react-native';
import Home from './src/telas/Home/index';
import Tela02 from './src/telas/Tela02/index';
import styles from './src/style/styleDefault'
export default function App() {
  return (
    <View>
      <Home />
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.botaoTexto}>
            Calcular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonInativo} onPress={()=>{Alert.alert("Falta fazer!","vai para a tela 2")}}>
          <Text style={styles.botaoTextoInativo}>
            Editar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


