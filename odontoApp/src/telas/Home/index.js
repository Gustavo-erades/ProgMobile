import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from '../../style/styleHome';
import DropdownComponent from '../../components/DropDownAnestesicos';
function alerta() {
    alert('Clicou!');
}
export default function Home() {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.titulo}>Anestésicos</Text>
                <DropdownComponent />
                <TouchableOpacity style={styles.botao} onPress={alerta}>
                    <Text style={styles.botaoTexto}>
                        Calcular
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.moreDetails}>
                <TouchableOpacity>
                    <Text style={styles.moreDetailsText} onPress={alerta}>+ Mais detalhes</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.textoProvisorio}>Escolha algum anestésico para efetuar o cálculo</Text>
            </View>
        </View>
    );
}