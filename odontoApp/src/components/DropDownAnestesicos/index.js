import React, { useState } from 'react';
  import stylesDropDown from '../../style/styleDropDown'
  import { Dropdown } from 'react-native-element-dropdown';

  const data = [
    { label: 'Prilocaína 3%', value: '1' },
    { label: 'Mepivacaína 2%', value: '2' },
    { label: 'Mepivacaína 3%', value: '3' },
    { label: 'Articaína 4%', value: '4' },
    { label: 'Lidocaína 2%', value: '5' },
    { label: 'Lidocaína 3%', value: '6' },
    { label: 'Bupivacaína 0.5%', value: '7' },
  ];

  const DropdownComponent = () => {
    const [value, setValue] = useState(null);

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

  export default DropdownComponent;