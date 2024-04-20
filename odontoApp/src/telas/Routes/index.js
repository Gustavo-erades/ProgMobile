import Home from '../Home';
import Editar from '../Editar';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen 
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Editar"
              component={Editar}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
  );
}


