import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: '1', name: 'Item 1', description: 'Descrição do Item 1' },
  { id: '2', name: 'Item 2', description: 'Descrição do Item 2' },
  { id: '3', name: 'Item 3', description: 'Descrição do Item 3' },
  // Adicione mais dados conforme necessário
];

const Table = () => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={[styles.cell, styles.headerCell]}>ID</Text>
        <Text style={[styles.cell, styles.headerCell]}>Nome</Text>
        <Text style={[styles.cell, styles.headerCell]}>Descrição</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    padding: 10,
  },
  headerCell: {
    fontWeight: 'bold',
  },
});

export default Table;
