import { Text, View,TextInput, TouchableOpacity, Linking} from 'react-native';
import {useState} from 'react';
import styleBoxDetalhes from '../../style/styleBoxDetalhes';
import { CheckBox} from 'react-native-elements';
import { handleSubmitDetalhes } from './../../services/api';
export default function BoxDetalhes(){
    //check box
    const [checkboxMarcado, setCheckboxMarcado]=useState(false);
    function marcarCheckbox(){
        setCheckboxMarcado(!checkboxMarcado)
        if(checkboxMarcado==false){
            handleSubmitDetalhes(data);
        }
    }
    const abrirTabela=()=>{
        Linking.openURL("https://google.com");
    }
    //envia os dados para a API php
    const [data, setData] = useState({
        peso: '',
        quantMax: '',
        volTubete:'',
      });
    
    return(
        <View>
            <View style={styleBoxDetalhes.header}>
                <Text style={styleBoxDetalhes.headerText}>Modificar variáveis do cálculo</Text>
            </View>
            <View style={styleBoxDetalhes.areaInputs}>
               <View>
                    <Text style={styleBoxDetalhes.titleInput}>
                        Peso do paciente:
                    </Text>
                    <TextInput placeholder="60Kg" keyboardType='numeric' style={styleBoxDetalhes.input}  onChangeText={text => setData({ ...data, peso: text })} value={data.peso}/>
               </View>
               <View>
                    <Text style={styleBoxDetalhes.titleInput}>
                        Dose máxima por Kg:
                    </Text>
                    <TextInput placeholder="Consulte a tebela de anestésicos" keyboardType='numeric' style={styleBoxDetalhes.input}  onChangeText={text => setData({ ...data, quantMax: text })} value={data.quantMax} />
               </View>
               <View>
                    <Text style={styleBoxDetalhes.titleInput}>
                        Volume do tubete:
                    </Text>
                    <TextInput placeholder="1.8mg" keyboardType='numeric' style={styleBoxDetalhes.input}  onChangeText={text => setData({ ...data, volTubete: text })} value={data.volTubete}/>
               </View>
            </View>
            <View style={styleBoxDetalhes.checkboxView}>
                <CheckBox checked={checkboxMarcado} title="Alterar cálculo padrão" size={32} checkedColor='#5BBCAF' uncheckedColor='red' required onPress={marcarCheckbox}/>
            </View>
            <TouchableOpacity style={styleBoxDetalhes.buttonTabelaAnestesicos} onPress={abrirTabela}>
                    <Text style={styleBoxDetalhes.buttonTabelaAnestesicosText}>
                        Tabela de anestésicos
                    </Text>
            </TouchableOpacity>
        </View>        
    )
}