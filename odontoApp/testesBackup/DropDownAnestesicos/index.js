// O DROPDOWN USADO ESTÁ NA PÁGINA DE HOME, ESSE SERVE APENAS PARA BACKUP
import React, { useState, useEffect } from 'react';
import stylesDropDown from '../../style/styleDropDown';
import { Dropdown } from 'react-native-element-dropdown';
import { handleSubmitNome, fetchNomesDropdown} from '../../services/api';
  export default function DropdownComponent(
    {dataChildToParent}
  ){
    /*const data = [
    { label: 'Prilocaína 3%' },
    { label: 'Mepivacaína 2%'},
    { label: 'Mepivacaína 3%'},
    { label: 'Articaína 4%' },
    { label: 'Lidocaína 2%'},
    { label: 'Lidocaína 3%'},
    { label: 'Bupivacaína 0.5%'}];*/
    useEffect(() => {
      async function loadAnestesiaCalculo() {
        try {
          const responseCalculoAPI = await fetchNomesDropdown();
          data.push(responseCalculoAPI)
        } catch (error) {
          console.log('Erro ao buscar os dados na API (teste no dropdown)', error);
        }
      }
      loadAnestesiaCalculo();
    }, []); 
    
    //envia os dados para a API php
    const [dataNome, setData] = useState({
      nomeAnestesico: '',
    });
    if(dataNome.nomeAnestesico!=''){
      dataChildToParent(dataNome.nomeAnestesico);
    }
    return (
      <Dropdown
        style={stylesDropDown.dropdown}
        placeholderStyle={stylesDropDown.placeholderStyle}
        selectedTextStyle={stylesDropDown.selectedTextStyle}
        inputSearchStyle={stylesDropDown.inputSearchStyle}
        iconStyle={stylesDropDown.iconStyle}
        data={data2}
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
    );
  };