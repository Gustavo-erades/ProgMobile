import { View, TouchableOpacity, Text } from 'react-native';
import Home from './src/telas/Home/index';
import Tela2 from './src/telas/Tela2/index';
import styles from './src/style/styleDefault'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <Home />
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.botaoTexto}>
            Calcular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.botaoTexto}>
            Editar
          </Text>
        </TouchableOpacity>
      </View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Calcular" component={Home}/>
          <Stack.Screen name="editar"/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}


