import {View, Text, TouchableOpacity, TextInput, ScrollView, Alert, Modal, Linking} from 'react-native';
import stylesPadrao from '../../style/styleDefault';
import {useRef, useState} from 'react';
import stylesEditar from '../../style/styleEditar';
import styles from '../../style/styleHome';
import { handleSubmitDeletarAnestesico, handleSubmitNovoAnestesico } from '../../services/api';
import styleBoxDetalhes from '../../style/styleBoxDetalhes';
export default function Editar({navigation}){
    //envia os dados para a API php (editar)
    const [data, setData] = useState({
        nome: '',
        doseMax: '',
        maxAbs:'',
        numTubete:'',
        porcentagem:'',
    });
    const refNome=useRef(null);
    const refDoseMax=useRef(null);
    const refMaxAbs=useRef(null);
    const refNumTubete=useRef(null);
    const refPorcentagem=useRef(null);
    const refNomeRemover=useRef(null);

    function enviarNovoAnestesico(){
        if(data['nome']!=''&&data['doseMax']!=''&&data['maxAbs']!=''&&data['numTubete']!=''&&data['porcentagem']!=''){
            try{
                handleSubmitNovoAnestesico(data);
                Alert.alert('Novo anestésico cadastrado com sucesso!','Os dados foram enviados e cadastrados no banco de dados.');
                refNome.current.clear();
                refDoseMax.current.clear();
                refMaxAbs.current.clear();
                refNumTubete.current.clear();
                refPorcentagem.current.clear();
            }catch(error){
                Alert.alert("Erro ao cadastrar novo anestésico!","Os dados para cadastro de um novo anestésico não puderam ser enviados.");
            }
        }else{
            Alert.alert("Erro ao cadastrar novo anestésico!","Nem todos os campos foram preenchidos.");
        }
    }
    //envia os dados para a API php (remover)
    const [dataRemover, setDataRemover] = useState({
        nomeRemover: ''
    });
    const [visibilidadeRemover,setVisibilidadeRemover]=useState(false);
    function chamaTelaRemover(){
        setVisibilidadeRemover(!visibilidadeRemover);
    }
    function removerAnestesico(){
        if(dataRemover['nomeRemover']!=''){
            try{
                handleSubmitDeletarAnestesico(dataRemover);
                Alert.alert('Anestésico removido com sucesso!','O anestésico descrito foi removido do banco de dados.');
                refNomeRemover.current.clear();
            }catch(error){
                Alert.alert("Erro ao remover anestésico!","Os dados para deletar o anestésico não poderam ser enviados ao backend.");
            }
            chamaTelaRemover();
        }else{
            Alert.alert("Erro ao remover anestésico!","Nenhum nome foi digitado. Consulte a tabela de anestésico para poder fazer a remoção.")
        }
    }
    const abrirTabela=()=>{
        Linking.openURL("http://192.168.0.8/testes/backendReact/tabela");
    }
    return(
        <View style={{height:"100%",backgroundColor:"#fff"}}>
            <View style={stylesEditar.boxTitulo}>
                <Text style={stylesEditar.titulo}>
                    Cadastrar novo anestésico
                </Text>
            </View>
            <View style={stylesEditar.boxConteudo}>
                <ScrollView>
                    <View>
                        <Text style={stylesEditar.titleInput}>
                            Nome do anestésico:
                        </Text>
                        <TextInput style={stylesEditar.input} placeholder="Ex: Anestésico x%" keyboardType='default' onChangeText={text=>setData({...data,nome:text})} ref={refNome}/>
                    </View>
                    <View>
                        <Text style={stylesEditar.titleInput}>
                            Dose máxima:
                        </Text>
                        <TextInput style={stylesEditar.input} placeholder="por kg de peso corporal" keyboardType='numeric' onChangeText={text=>setData({...data,doseMax:text})} ref={refDoseMax}/>
                    </View>
                    <View>
                        <Text style={stylesEditar.titleInput}>
                            Máximo absoluto:
                        </Text>
                        <TextInput style={stylesEditar.input} placeholder="independente do peso" keyboardType='numeric' onChangeText={text=>setData({...data,maxAbs:text})} ref={refMaxAbs}/>
                    </View>
                    <View>
                        <Text style={stylesEditar.titleInput}>
                            Número de tubetes:
                        </Text>
                        <TextInput style={stylesEditar.input} placeholder="máximo por sessão" keyboardType='numeric' onChangeText={text=>setData({...data,numTubete:text})} ref={refNumTubete}/>
                    </View>
                    <View>
                        <Text style={stylesEditar.titleInput}>
                            Porcentagem:
                        </Text>
                        <TextInput style={stylesEditar.input} placeholder="porcentagem de gramas em 100 ml" keyboardType='numeric' onChangeText={text=>setData({...data,porcentagem:text})} ref={refPorcentagem} />
                    </View>
                    <TouchableOpacity style={stylesEditar.buttonCadastrar} onPress={enviarNovoAnestesico}>
                        <Text style={styles.buttonDetalhesText}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesEditar.buttonRemover} onPress={chamaTelaRemover}>
                        <Text style={styles.buttonDetalhesText}>
                            Remover
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesEditar.buttonTabelaAnestesicos} onPress={abrirTabela}>
                        <Text style={styleBoxDetalhes.buttonTabelaAnestesicosText}>
                            Tabela de anestésicos
                        </Text>
                    </TouchableOpacity>
                    <Modal 
                        animationType='none'
                        transparent={true}
                        visible={visibilidadeRemover}
                        onRequestClose={()=>{
                            setVisibilidadeRemover(!visibilidadeRemover)
                        }}
                    >
                        <TouchableOpacity onPress={chamaTelaRemover}>
                            <View style={{backgroundColor:'rgba(0,0,0,0.4);',height:'100%', justifyContent:'center'}}>
                                <View style={{backgroundColor:'#fff',paddingBottom:20}}>
                                    <Text style={stylesEditar.titleInput}>
                                        Nome do anestésico:
                                    </Text>
                                    <TextInput style={stylesEditar.input} placeholder="Ex: Anestésico x%" keyboardType='default' onChangeText={text=>setDataRemover({...dataRemover,nomeRemover:text})}
                                    ref={refNomeRemover}/>
                                    <TouchableOpacity style={stylesEditar.buttonTabelaAnestesicos} onPress={abrirTabela}>
                                        <Text style={styleBoxDetalhes.buttonTabelaAnestesicosText}>
                                            Tabela de anestésicos
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={stylesEditar.buttonCadastrar} onPress={removerAnestesico}>
                                        <Text style={styles.buttonDetalhesText}>
                                            Deletar anestésico
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </ScrollView>
            </View>
            <View style={stylesPadrao.buttonArea}>
                <TouchableOpacity style={stylesPadrao.buttonInativo} onPress={()=>navigation.navigate('Home')}>
                    <Text style={stylesPadrao.botaoTextoInativo}>
                        Calcular
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesPadrao.button}>
                    <Text style={stylesPadrao.botaoTexto}>
                        Editar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}