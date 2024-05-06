import { Text, View, TouchableOpacity, Alert, Modal } from 'react-native';
import stylesBoxCalc from '../../style/styleBoxCalc';
import stylesModalCalc from '../../style/stylesModalCalc.js';
import {fetchBoxCalculo, fetchDadosBd} from '../../services/api.js';
import React, { useState, useEffect } from "react";
export default function  BoxCalculo(){
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
    //modal com os detalhes do cálculo de anestesia
    const [visibilidadeModal, setVisibilidadeModal]=useState(false);
    function chamaModal(){
        setVisibilidadeModal(!visibilidadeModal);
    }
    const numSal=parseFloat(anestesiaBd['porcentagem'])
    const numMgSal=(numSal*1000)/100;
    const doseMaxSal=(parseFloat(anestesiaCalculo['pesoPaciente'])*parseFloat(anestesiaCalculo['maxPorKg']?anestesiaCalculo['maxPorKg']:anestesiaBd['doseMaxima'])).toFixed(1);
    const mgPorTubete=(numMgSal*parseFloat(anestesiaCalculo['volTubetePaciente'])).toFixed(1)
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
                            Máximo de mg: {anestesiaCalculo['maxPorKg']?anestesiaCalculo['maxPorKg']:anestesiaBd['doseMaxima']} mg</Text>
                        <Text style={stylesBoxCalc.cardText}>
                            Miligrama por Tubetes: {anestesiaCalculo['mlPorTubete']}mg
                        </Text>
                        <Text style={stylesBoxCalc.cardText}>
                            Máximo de mg para o peso: {anestesiaCalculo['maxDosePorPeso']}mg
                            </Text>
                    </View>
                    <View style={stylesBoxCalc.cardInto}>
                        <Text style={stylesBoxCalc.cardIntoText}>*Tubete com {anestesiaCalculo['volTubetePaciente']}mg</Text>
                        <Text style={stylesBoxCalc.cardIntoText}>*Paciente de {anestesiaCalculo['pesoPaciente']}kg</Text>
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
                <Modal
                    animationType='none'
                    transparent={false}
                    visible={visibilidadeModal}
                    onRequestClose={()=>{
                        setVisibilidadeModal(!visibilidadeModal)
                    }}
                    style={stylesModalCalc.modal}
                >
                    <View styles={stylesModalCalc.boxTitulo}>
                        <Text styles={stylesModalCalc.textoTitulo}>Detalhes do cálculo</Text>
                        <Text styles={stylesModalCalc.textoTitulo}>Solução de {anestesiaBd['anestesicoLocal']}</Text>
                    </View>
                    <View style={stylesModalCalc.boxTexto}>
                        <Text style={stylesModalCalc.texto}>
                            Contém {numSal}g do sal em 100ml de solução = {numMgSal}mg/mL
                        </Text>
                        <Text style={stylesModalCalc.texto}>
                            {numMgSal}mg X {anestesiaCalculo['volTubetePaciente']}mL (volume contido em 1 tubete) = {mgPorTubete}mg
                        </Text>
                        <Text style={stylesModalCalc.texto}>
                            A dose máxima de {anestesiaBd['anestesicoLocal']} por peso corporal é de {anestesiaBd['doseMaxima']}, portanto:
                        </Text>
                        <Text style={stylesModalCalc.texto}>
                            {anestesiaCalculo['pesoPaciente']}kg X {anestesiaBd['doseMaxima']}mg/kg = {doseMaxSal}mg
                        </Text>
                        <Text style={stylesModalCalc.texto}>
                            {doseMaxSal}mg / {mgPorTubete}mg = {(doseMaxSal/mgPorTubete).toFixed(1)} tubetes
                        </Text>
                    </View>
                    <TouchableOpacity onPress={chamaModal} style={stylesBoxCalc.botao}>
                        <Text>
                            Fechar
                        </Text>
                    </TouchableOpacity>
                </Modal>
            </View>
        </View>
    );
};
