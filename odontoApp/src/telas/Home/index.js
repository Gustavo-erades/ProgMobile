import { View, Text, TouchableOpacity, Modal, Button } from "react-native";
import { useState } from 'react';
import styles from '../../style/styleHome';
import DropdownComponent from '../../components/DropDownAnestesicos';
import BoxCalculo from '../../components/BoxCalculo';
import BoxDetalhes from './../../components/BoxDetalhes/index';
//<Text style={styles.textoProvisorio}>Escolha algum anestésico para efetuar o cálculo</Text>
export default function Home() {
    const [modalVisibleCalc, setModalVisibleCalc]=useState(false);
    const chamaTelaCalc = () => {
        setModalVisibleCalc(true)
        dadosAnestesico()
    };
    const fechaTelaCalc = () => setModalVisibleCalc(false);

    const [visibilidadeModal, setVisibilidadeModal]=useState(null);
   
    const abrirModalDetalhes=()=>{
        {setVisibilidadeModal(true)}
    }
    const fecharModalDetalhes=()=>{
        {setVisibilidadeModal(false)}
    }
    const [dataBoxCalculo, setDataBoxCalculo]=useState('');
    const dadosAnestesico=()=>{
        const lista=["nome do anestésico","peso","volume"]
        setDataBoxCalculo(lista)
    }
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
                    <TouchableOpacity onPress={abrirModalDetalhes}>
                        <Text style={styles.moreDetailsText} >+ Mais detalhes</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View style={styles.contentBoxCalc}>
                    {modalVisibleCalc?<BoxCalculo dadosAnestesico={dataBoxCalculo}/>:<Text style={styles.textoProvisorio}>Escolha algum anestésico para efetuar o cálculo</Text>}
                    {modalVisibleCalc && <TouchableOpacity onPress={fechaTelaCalc}style={styles.limparTelaCalc}><Text style={styles.limparTelaCalcText}>Limpar</Text></TouchableOpacity>}
            </View>
            <Modal animationType='slide' transparent={false} visible={visibilidadeModal}>
                <BoxDetalhes/>
                <TouchableOpacity style={styles.buttonTabelaAnestesicos} onPress={()=>{alert("tabela de anestésicos com doses máximas, etc.")}}>
                    <Text style={styles.buttonTabelaAnestesicosText}>
                        Tabela de anestésicos
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={fecharModalDetalhes} style={styles.buttonDetalhes}>
                    <Text style={styles.buttonDetalhesText}>
                        Finalizar
                    </Text>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}