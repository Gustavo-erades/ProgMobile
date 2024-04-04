import { Text, View, Modal } from 'react-native';
import {useState} from 'react';
import styleBoxDetalhes from '../../style/styleBoxDetalhes';
import { Button, CheckBox, Divider } from 'react-native-elements';
const BoxDetalhes=()=>{
    const [visibilidadeModal, setVisibilidadeModal]=useState(null);
    const fecharModalDetalhes=()=>{
        {setVisibilidadeModal(false)}
    }
    return(
        <View>
            <View style={styleBoxDetalhes.header}>
                <Text style={styleBoxDetalhes.headerText}>Adicionar variáveis ao cálculo</Text>
            </View>
            <View style={styleBoxDetalhes.modal}>
                <View style={styleBoxDetalhes.checkboxWrapper}>
                    <CheckBox required={true} style={styleBoxDetalhes.CheckBox}/>
                    <Text style={styleBoxDetalhes.checkboxText}>variável 1</Text>
                </View>
                <View style={styleBoxDetalhes.checkboxWrapper}>
                    <CheckBox required={true} style={styleBoxDetalhes.CheckBox}/>
                    <Text style={styleBoxDetalhes.checkboxText}>variável 2</Text>
                </View>
                <View style={styleBoxDetalhes.checkboxWrapper}>
                    <CheckBox required={true} style={styleBoxDetalhes.CheckBox}/>
                    <Text style={styleBoxDetalhes.checkboxText}>variável 3</Text>
                </View>
                <View style={styleBoxDetalhes.checkboxWrapper}>
                    <CheckBox required={true} style={styleBoxDetalhes.CheckBox}/>
                    <Text style={styleBoxDetalhes.checkboxText}>variável 4</Text>
                </View>
            </View>
           
        </View>
       
        
    )
}
export default BoxDetalhes