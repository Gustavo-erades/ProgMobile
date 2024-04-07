import { Text, View,TextInput} from 'react-native';
import {useState} from 'react';
import styleBoxDetalhes from '../../style/styleBoxDetalhes';
import { CheckBox, Button } from 'react-native-elements';
const BoxDetalhes=()=>{
    const [checkboxMarcado, setCheckboxMarcado]=useState(false);
    marcarCheckbox=()=>setCheckboxMarcado(!checkboxMarcado)
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
                    <TextInput placeholder="60Kg" keyboardType='numeric' style={styleBoxDetalhes.input}/>
               </View>
               <View>
                    <Text style={styleBoxDetalhes.titleInput}>
                        Dose máxima por Kg:
                    </Text>
                    <TextInput placeholder="Consulte a tebela de anestésicos" keyboardType='numeric' style={styleBoxDetalhes.input} />
               </View>
               <View>
                    <Text style={styleBoxDetalhes.titleInput}>
                        Volume do tubete:
                    </Text>
                    <TextInput placeholder="1.8mg" keyboardType='numeric' style={styleBoxDetalhes.input} />
               </View>
            </View>
            <View style={styleBoxDetalhes.checkboxView}>
                <CheckBox checked={checkboxMarcado} title="Alterar cálculo padrão" size={32} checkedColor='#5BBCAF' uncheckedColor='red' required onPress={marcarCheckbox}/>
            </View>
        </View>        
    )
}
export default BoxDetalhes