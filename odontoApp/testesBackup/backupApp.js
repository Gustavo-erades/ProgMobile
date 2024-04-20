import { View, TouchableOpacity, Text } from 'react-native';
import Home from '../src/telas/Home/index';
import styles from '../src/style/styleDefault'
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
        <TouchableOpacity style={styles.button} onPress={()=>{alert("vai para a tela 2")}}>
          <Text style={styles.botaoTexto}>
            Editar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


