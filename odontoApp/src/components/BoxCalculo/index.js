import { Text, View, TouchableOpacity } from 'react-native';
import stylesBoxCalc from '../../style/styleBoxCalc';
export default function  BoxCalculo({dadosAnestesico}){
    function chamaModal(){
        alert('modal com todo o passo a passo do calculo feito');
    }
    
    return (
        <View style={stylesBoxCalc.container}>
            <View style={stylesBoxCalc.card}>
                <Text style={stylesBoxCalc.cardTitle}> 
                    Nome do anestésico
                </Text>
                <View style={stylesBoxCalc.cardContainer}>
                    <View style={stylesBoxCalc.cardTextBox}>
                        <Text style={stylesBoxCalc.cardText}>Máximo de Tubetes: 4.4</Text>
                        <Text style={stylesBoxCalc.cardText}>Máximo de mg: {dadosAnestesico[1]}mg</Text>
                        <Text style={stylesBoxCalc.cardText}>Miligrama por Tubetes: 54mg</Text>
                    </View>
                    <View style={stylesBoxCalc.cardInto}>
                        <Text style={stylesBoxCalc.cardIntoText}>*Tubete com {dadosAnestesico[2]}mg</Text>
                        <Text style={stylesBoxCalc.cardIntoText}>*Paciente de {dadosAnestesico[0]}kg</Text>
                    </View>
                </View>
                <View style={stylesBoxCalc.cardButtonsFooter}>
                    <TouchableOpacity style={stylesBoxCalc.cardButton}>
                        <Text style={stylesBoxCalc.cardButtonText}>
                            Recarregar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesBoxCalc.cardButton} onPress={chamaModal}>
                        <Text style={stylesBoxCalc.cardButtonText}>
                            Exibir cálculo
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
