import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import stylesPadrao from '../../style/styleDefault';
import stylesEditar from '../../style/styleEditar';
export default function Editar({navigation}){
    return(
        <View style={{height:"100%",backgroundColor:"#fff"}}>
            <View style={stylesEditar.boxTitulo}>
                <Text style={stylesEditar.titulo}>
                    Alterar anestésicos
                </Text>
            </View>
            <View style={stylesEditar.boxConteudo}>
                <Text>
                    Peso do paciente:
                </Text>
                <TextInput placeholder="60Kg" keyboardType='numeric' />
            </View>
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