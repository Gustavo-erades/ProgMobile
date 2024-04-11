import { Text, View,TextInput, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import styleBoxDetalhes from '../../style/styleBoxDetalhes';
import styles from '../../style/styleHome';
import { CheckBox} from 'react-native-elements';
export default function BoxDetalhes({childToParent}){
    //check box
    const [checkboxMarcado, setCheckboxMarcado]=useState(false);
    marcarCheckbox=()=>setCheckboxMarcado(!checkboxMarcado)
    //dados dos inputs
    const [pesoInput, setPesoInput]=useState('')
    const [doseInput, setDoseInput]=useState('')
    const [tubeteInput, setTubeteInput]=useState('')
    const dataChildToParent=[pesoInput,doseInput,tubeteInput, false]
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
                    <TextInput placeholder="60Kg" keyboardType='numeric' style={styleBoxDetalhes.input} onChangeText={setPesoInput} value={pesoInput}/>
               </View>
               <View>
                    <Text style={styleBoxDetalhes.titleInput}>
                        Dose máxima por Kg:
                    </Text>
                    <TextInput placeholder="Consulte a tebela de anestésicos" keyboardType='numeric' style={styleBoxDetalhes.input} onChangeText={setDoseInput} value={doseInput} />
               </View>
               <View>
                    <Text style={styleBoxDetalhes.titleInput}>
                        Volume do tubete:
                    </Text>
                    <TextInput placeholder="1.8mg" keyboardType='numeric' style={styleBoxDetalhes.input} onChangeText={setTubeteInput} value={tubeteInput}/>
               </View>
            </View>
            <View style={styleBoxDetalhes.checkboxView}>
                <CheckBox checked={checkboxMarcado} title="Alterar cálculo padrão" size={32} checkedColor='#5BBCAF' uncheckedColor='red' required onPress={marcarCheckbox}/>
            </View>
            <TouchableOpacity style={styleBoxDetalhes.buttonTabelaAnestesicos}>
                    <Text style={styleBoxDetalhes.buttonTabelaAnestesicosText}>
                        Tabela de anestésicos
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>childToParent(dataChildToParent)} style={styles.buttonDetalhes}>
                <Text style={styles.buttonDetalhesText}>
                    Finalizar
                </Text>
            </TouchableOpacity>
        </View>        
    )
}