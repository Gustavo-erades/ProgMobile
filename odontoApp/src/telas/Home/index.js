import { View, Text, TouchableOpacity, Modal, Alert} from "react-native";
import { useState, useEffect } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import styles from '../../style/styleHome';
import stylesPadrao from '../../style/styleDefault';
import stylesDropDown from '../../style/styleDropDown';
import BoxCalculo from '../../components/BoxCalculo';
import BoxDetalhes from './../../components/BoxDetalhes/index';
import { handleSubmitNome, fetchNomesDropdown} from '../../services/api';
export default function Home({navigation}) {
    //tela de cálculo
    const [modalVisibleCalc, setModalVisibleCalc]=useState(false);
    const chamaTelaCalc = () => {
        console.log(dataNome.nomeAnestesico)
        if(dataNome.nomeAnestesico!=''){
            setModalVisibleCalc(true)
        }else{
            Alert.alert("Anestésico não selecionado","Por favor, selecione algum anestésico na barra acima para o cálculo porder ser efetuado")
        }
    };
    const fechaTelaCalc = () => {
        setModalVisibleCalc(false);
        dataNome.nomeAnestesico='';
    }
    //modal de cálculo
    const [visibilidadeModal, setVisibilidadeModal]=useState(null);
    const abrirModalDetalhes=()=>{
        setVisibilidadeModal(true)
    }
    const fecharModalDetalhes=()=>{
        setVisibilidadeModal(false)
        chamaTelaCalc()
    }
    //dados do dropdown
    const [dataDropTeste, setDataDropTeste] = useState([]);
    recarregar=false;
    //executado assim que a página for carregada
    useEffect(() => {
        async function loadDataDropTeste() {
          try {
            const responseDropTesteApi = await fetchNomesDropdown();
            setDataDropTeste(responseDropTesteApi)
          } catch (error) {
            console.log('Erro ao buscar os dados na API (teste no dropdown)', error);
          }
        }
        loadDataDropTeste();
      }, []); 
    //executado sempre que o elemento é clicado (recarrega os dados)
    useEffect(() => {
        async function loadDataDropTeste2() {
          try {
            const responseDropTesteApi = await fetchNomesDropdown();
            setDataDropTeste(responseDropTesteApi)
          } catch (error) {
            console.log('Erro ao buscar os dados na API (teste no dropdown)', error);
          }
        }
        if(recarregar){
            loadDataDropTeste2();
            recarregar=false
        }
      }, [recarregar]); 
    function recarregaDropdown(){
        recarregar=true;
    }
    //envia os dados para a API php
    const [dataNome, setData] = useState({
        nomeAnestesico: '',
      });
    return (
        <View style={{height:'100%',backgroundColor:'#fff'}}>
            <View style={styles.header} onPress={recarregaDropdown}>
                <Text style={styles.titulo}>Anestésicos</Text>
                <Dropdown
                    style={stylesDropDown.dropdown}
                    placeholderStyle={stylesDropDown.placeholderStyle}
                    selectedTextStyle={stylesDropDown.selectedTextStyle}
                    inputSearchStyle={stylesDropDown.inputSearchStyle}
                    iconStyle={stylesDropDown.iconStyle}
                    data={dataDropTeste}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="label"
                    placeholder="Selecionar anestésico"
                    searchPlaceholder="Pesquisar anestésico"
                    value={dataNome.nomeAnestesico}
                    onChange={item => {
                        setData({ ...dataNome, nomeAnestesico: item });
                    }}
                    onConfirmSelectItem={
                        handleSubmitNome(dataNome)
                    }
                />
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