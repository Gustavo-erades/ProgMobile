import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useState } from 'react';
import styles from '../../style/styleHome';
import DropdownComponent from '../../components/DropDownAnestesicos';
import BoxCalculo from '../../components/BoxCalculo';
//<Text style={styles.textoProvisorio}>Escolha algum anestésico para efetuar o cálculo</Text>
export default function Home() {
    function alerta(){
        alert('clicou!')
    }
    function chamaTelaCalc() {
        setModalVisible(!modalVisible);
    }
    const [modalVisible, setModalVisible]=useState(false);
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.titulo}>Anestésicos</Text>
                <DropdownComponent />
                <TouchableOpacity style={styles.botao} onPress={chamaTelaCalc}>
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
            <View style={styles.contentBoxCalc}>
                    {modalVisible?<BoxCalculo/>:<Text style={styles.textoProvisorio}>Escolha algum anestésico para efetuar o cálculo</Text>}
            </View>
        </View>
    );
}