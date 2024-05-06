import {View, Text, TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';
import stylesPadrao from '../../style/styleDefault';
import {useState} from 'react';
import stylesEditar from '../../style/styleEditar';
import styles from '../../style/styleHome';
import { handleSubmitNovoAnestesico } from '../../services/api';
export default function Editar({navigation}){
    //envia os dados para a API php
    const [data, setData] = useState({
        nome: '',
        doseMax: '',
        maxAbs:'',
        numTubete:'',
        porcentagem:'',
    });
    function enviarNovoAnestesico(){
        if(data['nome']!=''&&data['doseMax']!=''&&data['maxAbs']!=''&&data['numTubete']!=''&&data['porcentagem']!=''){
            try{
                handleSubmitNovoAnestesico(data);
                Alert.alert('Novo anestésico cadastrado com sucesso!','Os dados foram enviados e cadastrados no banco de dados.');
            }catch(error){
                Alert.alert("Erro ao cadastrar novo anestésico!","Os dados para cadastro de um novo anestésico não puderam ser enviados.");
            }
        }else{
            Alert.alert("Erro ao cadastrar novo anestésico!","Nem todos os campos foram preenchidos.");
        }
    }
    function removerAnestesico(){
        alert("removido!");
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
                        <TextInput style={stylesEditar.input} placeholder="Ex: Anestésico x%" keyboardType='default' onChangeText={text=>setData({...data,nome:text})}/>
                    </View>
                    <View>
                        <Text style={stylesEditar.titleInput}>
                            Dose máxima:
                        </Text>
                        <TextInput style={stylesEditar.input} placeholder="por kg de peso corporal" keyboardType='numeric' onChangeText={text=>setData({...data,doseMax:text})} />
                    </View>
                    <View>
                        <Text style={stylesEditar.titleInput}>
                            Máximo absoluto:
                        </Text>
                        <TextInput style={stylesEditar.input} placeholder="independente do peso" keyboardType='numeric' onChangeText={text=>setData({...data,maxAbs:text})}/>
                    </View>
                    <View>
                        <Text style={stylesEditar.titleInput}>
                            Número de tubetes:
                        </Text>
                        <TextInput style={stylesEditar.input} placeholder="máximo por sessão" keyboardType='numeric' onChangeText={text=>setData({...data,numTubete:text})} />
                    </View>
                    <View>
                        <Text style={stylesEditar.titleInput}>
                            Porcentagem:
                        </Text>
                        <TextInput style={stylesEditar.input} placeholder="porcentagem de gramas em 100 ml" keyboardType='numeric' onChangeText={text=>setData({...data,porcentagem:text})} />
                    </View>
                    <TouchableOpacity style={stylesEditar.buttonCadastrar} onPress={enviarNovoAnestesico}>
                        <Text style={styles.buttonDetalhesText}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesEditar.buttonCadastrar} onPress={removerAnestesico}>
                        <Text style={styles.buttonDetalhesText}>
                            Remover
                        </Text>
                    </TouchableOpacity>
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