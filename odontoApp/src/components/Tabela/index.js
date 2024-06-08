import { Text, TouchableOpacity, Linking} from 'react-native';
import styleBoxDetalhes from '../../style/styleBoxDetalhes';
export default function Tabela(){
    const localhost="http://192.168.105.21/testes/backendReact/tabela" //192.168.0.8 |  172.20.10.8  | 172.17.17.235
    const abrirTabela=()=>{
        Linking.openURL(localhost);
    }
    return(
        <TouchableOpacity style={styleBoxDetalhes.buttonTabelaAnestesicos} onPress={abrirTabela}>
            <Text style={styleBoxDetalhes.buttonTabelaAnestesicosText}>
                Tabela de anestésicos
            </Text>
        </TouchableOpacity>
    )
}