import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useState } from 'react';
import styles from '../../style/styleHome';
import DropdownComponent from '../../components/DropDownAnestesicos';
import BoxCalculo from '../../components/BoxCalculo';
import BoxDetalhes from './../../components/BoxDetalhes/index';
//<Text style={styles.textoProvisorio}>Escolha algum anestésico para efetuar o cálculo</Text>
export default function Home() {
    const [mostrarBoxDetalhes, boxDetalhesFunction]=useState(null);
    let validaBoxDetalhes=null
    if(mostrarBoxDetalhes===true){
        validaBoxDetalhes=false
    }else{
        validaBoxDetalhes=true
    }
    const chamaBoxDetalhes = () => boxDetalhesFunction(validaBoxDetalhes);

    const [modalVisible, setModalVisible]=useState(false);
    const chamaTelaCalc = () => setModalVisible(true);
    const fechaTelaCalc = () => setModalVisible(false);
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
                    <TouchableOpacity onPress={chamaBoxDetalhes}>
                        <Text style={styles.moreDetailsText} >+ Mais detalhes</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
                       
            <View style={styles.contentBoxCalc}>
                    {mostrarBoxDetalhes?<BoxDetalhes/>:<Text></Text>}
                    {modalVisible?<BoxCalculo/>:<Text style={styles.textoProvisorio}>Escolha algum anestésico para efetuar o cálculo</Text>}
                    {modalVisible && <TouchableOpacity onPress={fechaTelaCalc}style={styles.limparTelaCalc}><Text style={styles.limparTelaCalcText}>Limpar</Text></TouchableOpacity>}
            </View>
        </View>
    );
}