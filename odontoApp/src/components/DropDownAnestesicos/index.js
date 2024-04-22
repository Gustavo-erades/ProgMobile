import React, { useState } from 'react';
import stylesDropDown from '../../style/styleDropDown';
import { Dropdown } from 'react-native-element-dropdown';
import { handleSubmitNome } from '../../services/api';
  export default function DropdownComponent(
    {childToParent}
  ){
    const data = [
      { label: 'Prilocaína 3%' },
      { label: 'Mepivacaína 2%'},
      { label: 'Mepivacaína 3%'},
      { label: 'Articaína 4%' },
      { label: 'Lidocaína 2%'},
      { label: 'Lidocaína 3%'},
      { label: 'Bupivacaína 0.5%'},
    ];
    childToParent(dataNome)
    //envia os dados para a API php
    const [dataNome, setData] = useState({
      nomeAnestesico: '',
    });
    return (
      <Dropdown
        style={stylesDropDown.dropdown}
        placeholderStyle={stylesDropDown.placeholderStyle}
        selectedTextStyle={stylesDropDown.selectedTextStyle}
        inputSearchStyle={stylesDropDown.inputSearchStyle}
        iconStyle={stylesDropDown.iconStyle}
        data={data}
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