import React, { useState } from 'react';
  import stylesDropDown from './src/style/styleDropDown'
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
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
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={stylesDropDown.icon} color="black" name="Safety" size={20} />
        )}
      />
    );
  };

  export default DropdownComponent;