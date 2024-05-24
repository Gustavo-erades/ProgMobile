import { Text, TouchableOpacity, Linking} from 'react-native';
import styleBoxDetalhes from '../../style/styleBoxDetalhes';
export default function Tabela(){
    const abrirTabela=()=>{
        Linking.openURL("http://172.20.10.8/testes/backendReact/tabela");
    }
    return(
        <TouchableOpacity style={styleBoxDetalhes.buttonTabelaAnestesicos} onPress={abrirTabela}>
            <Text style={styleBoxDetalhes.buttonTabelaAnestesicosText}>
                Tabela de anestésicos
            </Text>
        </TouchableOpacity>
    )
}