import { View, Text, Button, TouchableOpacity } from "react-native";
import styles from '../../style/styleDefault';
function alerta(){
    console.log("primeiro teste do app");
}
export default function Home() {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.titulo}>Anestésicos</Text>
                <Text>CAIXA DE SELEÇÃO DE ANESTÉSICOS</Text>
                <TouchableOpacity style={styles.botao} onPress={alerta}>
                    <Text style={styles.botaoTexto}>
                        Calcular
                    </Text>
                </TouchableOpacity>
            </View>
            <View styles={styles.content}>
                <Text>conteudo</Text>
            </View>
        </View>
    );
}