import { Text, TouchableOpacity, Linking} from 'react-native';
import styleBoxDetalhes from '../../style/styleBoxDetalhes';
export default function Tabela(){
    const localhost="http://172.20.10.8/testes/backendReact/tabela" //192.168.0.8
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