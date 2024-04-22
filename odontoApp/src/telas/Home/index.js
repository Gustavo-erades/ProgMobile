import { View, Text, TouchableOpacity, Modal, Alert} from "react-native";
import { useState } from 'react';
import styles from '../../style/styleHome';
import DropdownComponent from '../../components/DropDownAnestesicos';
import BoxCalculo from '../../components/BoxCalculo';
import BoxDetalhes from './../../components/BoxDetalhes/index';
import stylesPadrao from '../../style/styleDefault';
export default function Home({navigation}) {
    const [modalVisibleCalc, setModalVisibleCalc]=useState(false);
    const chamaTelaCalc = () => {
        if(dataChildToParent!=''){
            setModalVisibleCalc(true)
        }else{
            Alert.alert("Anestésico não selecionado!", "informe ao menos um anestésico para o cálculo ser efetuado")
        }  
    };
    const fechaTelaCalc = () => {
        setModalVisibleCalc(false);
        }
    const [visibilidadeModal, setVisibilidadeModal]=useState(null);
    const abrirModalDetalhes=()=>{
        setVisibilidadeModal(true)
    }
    const fecharModalDetalhes=()=>{
        setVisibilidadeModal(false)
        chamaTelaCalc()
    }
    //child to parent
    const [dataChildToParent, setChildToParent]=useState(null);
    const childToParent=(childData)=>{
        setChildToParent(childData)
    }
    return (
        <View style={{height:'100%',backgroundColor:'#fff'}}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Anestésicos</Text>
                <DropdownComponent childToParent={childToParent} />
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
                    {modalVisibleCalc?<BoxCalculo/>:<Text style={styles.textoProvisorio}>Escolha algum anestésico para efetuar o cálculo</Text>}
                    {modalVisibleCalc && <TouchableOpacity onPress={fechaTelaCalc}style={styles.limparTelaCalc}><Text style={styles.limparTelaCalcText}>Limpar</Text></TouchableOpacity>}
            </View>
            <Modal animationType='slide' transparent={false} visible={visibilidadeModal}>
                <BoxDetalhes/>
                <TouchableOpacity style={styles.buttonDetalhes} onPress={fecharModalDetalhes}>
                    <Text style={styles.buttonDetalhesText}>
                        Finalizar
                    </Text>
                </TouchableOpacity>
            </Modal>
            <View style={stylesPadrao.buttonArea}>
                <TouchableOpacity style={stylesPadrao.button} >
                    <Text style={stylesPadrao.botaoTexto}>
                        Calcular
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesPadrao.buttonInativo} onPress={()=>navigation.navigate('Editar')}>
                    <Text style={stylesPadrao.botaoTextoInativo}>
                        Editar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}