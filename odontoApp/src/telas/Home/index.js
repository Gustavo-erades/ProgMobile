import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useState } from 'react';
import styles from '../../style/styleHome';
import DropdownComponent from '../../components/DropDownAnestesicos';
import BoxCalculo from '../../components/BoxCalculo';

export default function Home() {
    function alerta() {
        setModalVisible(true);
    }
    const [modalVisible, setModalVisible]=useState(false);
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
                    <Text style={styles.moreDetailsText}>+ Mais detalhes</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Modal visible={modalVisible} animationType="fade">
                    <BoxCalculo/>
                </Modal>
                <Text style={styles.textoProvisorio}>Escolha algum anestésico para efetuar o cálculo</Text>
            </View>
        </View>
    );
}