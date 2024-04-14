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
        setVisibilidadeModal(true)
    }
    const fecharModalDetalhes=()=>{
        setVisibilidadeModal(false)
    }
    //parent to child
    const [dataBoxCalculo, setDataBoxCalculo]=useState('');
    const dadosAnestesico=()=>{
        const lista=dataChildToParent
        tam=lista.length
        lista[3]=dataChildToParent2
        setDataBoxCalculo(lista)
    }
    //child to parent
    const [dataChildToParent, setChildToParent]=useState('');
    const childToParent=(childData)=>{
        setChildToParent(childData)
    }
    //child to parent 2 --> referente ao elemento dropdown 
    const [dataChildToParent2, setChildToParent2]=useState('');
    const childToParent2=(childData)=>{
        setChildToParent2(childData)
    }
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.titulo}>Anestésicos</Text>
                <DropdownComponent childToParent2={childToParent2} />
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
                <BoxDetalhes childToParent={childToParent}/>
                <TouchableOpacity style={styles.buttonDetalhes} onPress={fecharModalDetalhes}>
                    <Text style={styles.buttonDetalhesText}>
                        Finalizar
                    </Text>
                </TouchableOpacity>
            </Modal>

        </View>
    );
}