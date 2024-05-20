import { Text, TouchableOpacity, Linking} from 'react-native';
import styleBoxDetalhes from '../../style/styleBoxDetalhes';
export default function Tabela(){
    const abrirTabela=()=>{
        Linking.openURL("http://192.168.0.2/testes/backendReact/tabela");
    }
    return(
        <TouchableOpacity style={styleBoxDetalhes.buttonTabelaAnestesicos} onPress={abrirTabela}>
            <Text style={styleBoxDetalhes.buttonTabelaAnestesicosText}>
                Tabela de anestésicos
            </Text>
        </TouchableOpacity>
    )
}