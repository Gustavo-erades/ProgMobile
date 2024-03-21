import { Text, View, TouchableOpacity } from 'react-native';
import stylesBoxCalc from '../../style/styleBoxCalc';
const BoxCalculo = () => {
    return (
        <View style={stylesBoxCalc.container}>
            <View style={stylesBoxCalc.card}>
                <Text style={stylesBoxCalc.cardTitle}> Prilovacaína 3% </Text>
                <View style={stylesBoxCalc.cardContainer}>
                    <View style={stylesBoxCalc.cardTextBox}>
                        <Text style={stylesBoxCalc.cardText}>Máximo de Tubetes: 4.4</Text>
                        <Text style={stylesBoxCalc.cardText}>Máximo de mg: 240mg</Text>
                        <Text style={stylesBoxCalc.cardText}>Miligrama por Tubetes: 54mg</Text>
                    </View>
                    <View style={stylesBoxCalc.cardInto}>
                        <Text style={stylesBoxCalc.cardIntoText}>*Tubete com 1.8mg</Text>
                        <Text style={stylesBoxCalc.cardIntoText}>*Paciente de 40kg</Text>
                    </View>
                </View>
                <View style={stylesBoxCalc.cardButtonsFooter}>
                    <TouchableOpacity style={stylesBoxCalc.cardButton}>
                        <Text style={stylesBoxCalc.cardButtonText}>
                            Recarregar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesBoxCalc.cardButton}>
                        <Text style={stylesBoxCalc.cardButtonText}>
                            Exibir cálculo
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
export default BoxCalculo;