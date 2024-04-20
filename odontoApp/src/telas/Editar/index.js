import {View, Text, TouchableOpacity} from 'react-native';
import stylesPadrao from '../../style/styleDefault';
export default function Editar({navigation}){
    return(
        <View>
            <View style={stylesPadrao.buttonArea}>
                <TouchableOpacity style={stylesPadrao.buttonInativo} onPress={()=>navigation.navigate('Home')}>
                    <Text style={stylesPadrao.botaoTextoInativo}>
                        Calcular
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesPadrao.button}>
                    <Text style={stylesPadrao.botaoTexto}>
                        Editar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}