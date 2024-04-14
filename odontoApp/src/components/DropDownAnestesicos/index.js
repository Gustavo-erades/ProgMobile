import React, { useState } from 'react';
import stylesDropDown from '../../style/styleDropDown';
import { Dropdown } from 'react-native-element-dropdown';

  export default function DropdownComponent(
    {childToParent2}
  ){
    const data = [
      { label: 'Prilocaína 3%', value: 'Prilocaína 3%' },
      { label: 'Mepivacaína 2%', value: 'Mepivacaína 2%' },
      { label: 'Mepivacaína 3%', value: 'Mepivacaína 3%' },
      { label: 'Articaína 4%', value: 'Articaína 4%' },
      { label: 'Lidocaína 2%', value: 'Lidocaína 2%' },
      { label: 'Lidocaína 3%', value: 'Lidocaína 3%' },
      { label: 'Bupivacaína 0.5%', value: 'Bupivacaína 0.5%' },
    ];
    const [value, setValue] = useState(null);
    childToParent2(value)
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
        valueField="value"
        placeholder="Selecionar anestésico"
        searchPlaceholder="Pesquisar anestésico"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    );
  };