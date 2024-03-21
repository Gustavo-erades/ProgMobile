import { Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
const BoxCalculo = () => {
    return (
        <Card>
            <Card.Title> Prilovacaína 3% </Card.Title>
            <Card.Divider />
            <Text>Máximo de Tubetes: 4.4</Text>
            <Text>Máximo de mg:240mg</Text>
            <Text>Miligrama por Tubetes:54mg</Text>
            <Card>
                <Text>*Tubete com 1.8mg</Text>
                <Text>*Paciente de 40kg</Text>
            </Card>
            <Card.Divider />
            <View>
                <TouchableOpacity>
                    <Text>
                        Recarregar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>
                        Exibir cálculo
                    </Text>
                </TouchableOpacity>
            </View>
        </Card>
    );
};
export default BoxCalculo;