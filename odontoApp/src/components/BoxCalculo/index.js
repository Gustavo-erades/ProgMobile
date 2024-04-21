import { Text, View, TouchableOpacity, Alert } from 'react-native';
import stylesBoxCalc from '../../style/styleBoxCalc';
import {fetchBoxCalculo, fetchDadosBd} from '../../services/api.js';
import React, { useState, useEffect } from "react";
export default function  BoxCalculo(){
    function chamaModal(){
        Alert.alert("Falta fazer!",'modal com todo o passo a passo do calculo feito');
    }
    //consumindo a API que retorna os dados do boxCalculo
    const [anestesiaCalculo, setAnestesiaCalculo] = useState([]);
    const [anestesiaBd, setAnestesiaBd] = useState([]);
    useEffect(() => {
      async function loadAnestesiaCalculo() {
        try {
          const responseCalculoAPI = await fetchBoxCalculo();
          setAnestesiaCalculo(responseCalculoAPI);
          const responseAnestesiaBd=await fetchDadosBd();
          setAnestesiaBd(responseAnestesiaBd);
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
                    {anestesiaBd['anestesicoLocal']}
                </Text>
                <View style={stylesBoxCalc.cardContainer}>
                    <View style={stylesBoxCalc.cardTextBox}>
                        <Text style={stylesBoxCalc.cardText}>
                            Máximo de Tubetes: {anestesiaCalculo['quantTubete']}
                        </Text>
                        <Text style={stylesBoxCalc.cardText}>
                            Máximo de mg: {anestesiaBd['doseMaxima']} mg</Text>
                        <Text style={stylesBoxCalc.cardText}>
                            Miligrama por Tubetes: {anestesiaCalculo['mlPorTubete']}mg
                        </Text>
                        <Text style={stylesBoxCalc.cardText}>
                            Máximo de mg para o peso: {anestesiaCalculo['maxDosePorPeso']}mg
                            </Text>
                    </View>
                    <View style={stylesBoxCalc.cardInto}>
                        <Text style={stylesBoxCalc.cardIntoText}>*Tubete com {1.8}mg</Text>
                        <Text style={stylesBoxCalc.cardIntoText}>*Paciente de {60}kg</Text>
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
