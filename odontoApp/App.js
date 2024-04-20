import Home from './src/telas/Home/index';
import Tela02 from './src/telas/Tela02/index';
import styles from './src/style/styleDefault';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Tela02"
              component={Tela02}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
  );
}


