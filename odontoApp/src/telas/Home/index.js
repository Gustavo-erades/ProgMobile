import { View, Text, TouchableOpacity } from "react-native";
import { useState } from 'react';
import styles from '../../style/styleHome';
import { Dropdown } from "react-native-element-dropdown";
function alerta() {
    alert('Clicou!');
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