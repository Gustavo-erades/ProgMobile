import { Text, View } from 'react-native';
import styleBoxDetalhes from '../../style/styleBoxDetalhes';
import { Divider } from 'react-native-elements';
const BoxDetalhes=()=>{
    return(
        <View style={styleBoxDetalhes.fundo}>
            <View style={styleBoxDetalhes.modal}>
                <Text style={{marginBottom:5}}>Mais variáveis para o cálculo</Text>
                <Divider style={{marginBottom:5}}/>
                <View>
                    <Text>* Mais variáveis para o cálculo 1</Text>
                    <Text>* Mais variáveis para o cálculo 2</Text>
                    <Text>* Mais variáveis para o cálculo 3</Text>
                    <Text>* Mais variáveis para o cálculo 4</Text>
                    <Text>* Mais variáveis para o cálculo 5</Text>
                </View>
            </View>
        </View>
    )
}
export default BoxDetalhes