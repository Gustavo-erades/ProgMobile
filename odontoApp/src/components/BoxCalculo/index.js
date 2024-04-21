import { Text, View, TouchableOpacity, Alert } from 'react-native';
import stylesBoxCalc from '../../style/styleBoxCalc';
import {fetchBoxCalculo} from '../../services/api.js';
import React, { useState, useEffect } from "react";
export default function  BoxCalculo({dadosAnestesico}){
    function chamaModal(){
        Alert.alert("Falta fazer!",'modal com todo o passo a passo do calculo feito');
    }
    porcentagem=dadosAnestesico[3].replace(/[^0-9]/g, '')
    mlPorTubete=porcentagem*10*dadosAnestesico[2]
    maxDosePorPeso=dadosAnestesico[1]*dadosAnestesico[0]
    quantTubete=(maxDosePorPeso/mlPorTubete).toFixed(1)

    //consumindo a API
    const [anestesiaCalculo, setAnestesiaCalculo] = useState([]);

    useEffect(() => {
      async function loadAnestesiaCalculo() {
        try {
          const response = await fetchBoxCalculo();
          setAnestesiaCalculo(response);
        } catch (error) {
          console.log('Erro ao buscar os dados na API (BoxCalculo)', error);
        }
      }
      loadAnestesiaCalculo();
    }, []);  
    
    return (
        <View style={stylesBoxCalc.container}>
            <View style={stylesBoxCalc.card}>
                <Text style={stylesBoxCalc.cardTitle}> 
                    {dadosAnestesico[3]}
                </Text>
                <View style={stylesBoxCalc.cardContainer}>
                    <View style={stylesBoxCalc.cardTextBox}>
                        <Text style={stylesBoxCalc.cardText}>
                            Máximo de Tubetes: {anestesiaCalculo['quantTubete']}
                        </Text>
                        <Text style={stylesBoxCalc.cardText}>
                            Máximo de mg: API mg</Text>
                        <Text style={stylesBoxCalc.cardText}>
                            Miligrama por Tubetes: {anestesiaCalculo['mlPorTubete']}mg
                        </Text>
                        <Text style={stylesBoxCalc.cardText}>
                            Máximo de mg para o peso: {anestesiaCalculo['maxDosePorPeso']}mg
                            </Text>
                    </View>
                    <View style={stylesBoxCalc.cardInto}>
                        <Text style={stylesBoxCalc.cardIntoText}>*Tubete com {dadosAnestesico[2]}mg</Text>
                        <Text style={stylesBoxCalc.cardIntoText}>*Paciente de {dadosAnestesico[0]}kg</Text>
                    </View>
                </View>
                <View style={stylesBoxCalc.cardButtonsFooter}>
                    <TouchableOpacity style={stylesBoxCalc.cardButton} onPress={()=>{
                        Alert.alert("Falta fazer!","faz um SELECT e retorna os dados atualizados das tabelas") 
                    }}>
                        <Text style={stylesBoxCalc.cardButtonText}>
                            Recarregar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesBoxCalc.cardButton} onPress={chamaModal}>
                        <Text style={stylesBoxCalc.cardButtonText}>
                            Exibir cálculo
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
