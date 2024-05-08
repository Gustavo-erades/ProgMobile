import { Text, View, TouchableOpacity, Alert, Modal } from 'react-native';
import stylesBoxCalc from '../../style/styleBoxCalc';
import stylesModalCalc from '../../style/stylesModalCalc';
import {fetchBoxCalculo, fetchDadosBd, handleSubmitDetalhes} from '../../services/api.js';
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
    //fução assincrona para ser usada ao recarregar a página
    const [executarFuncao, setExecutarFuncao] = useState(false);
    useEffect(() => {
        const loadAnestesiaCalculo2=async ()=>{
          try {
            handleSubmitDetalhes({peso:anestesiaCalculo['pesoPaciente'],quant:anestesiaCalculo['maxPorKg'],vol:anestesiaCalculo['volTubetePaciente']})
            const responseCalculoAPI = await fetchBoxCalculo();
            setAnestesiaCalculo(responseCalculoAPI);
            const responseAnestesiaBd=await fetchDadosBd();
            setAnestesiaBd(responseAnestesiaBd);
          } catch (error) {
            console.log('Erro ao buscar os dados na API (BoxCalculo)', error);
          }
        }
        if (executarFuncao) {
            loadAnestesiaCalculo2();
            setExecutarFuncao(false);
          }
      }, [executarFuncao]);
      const recarregar=()=>{
        setExecutarFuncao(true);
      }
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
                            Máximo de Tubetes: {(doseMaxSal/mgPorTubete).toFixed(0)}
                        </Text>
                        <Text style={stylesBoxCalc.cardText}>
                            Máximo de mg: {anestesiaCalculo['maxPorKg']?anestesiaCalculo['maxPorKg']:anestesiaBd['doseMaxima']} mg</Text>
                        <Text style={stylesBoxCalc.cardText}>
                            Miligrama por Tubetes: {mgPorTubete} mg
                        </Text>
                        <Text style={stylesBoxCalc.cardText}>
                            Máximo de mg para o peso: {anestesiaCalculo['maxDosePorPeso']} mg
                            </Text>
                    </View>
                    <View style={stylesBoxCalc.cardInto}>
                        <Text style={stylesBoxCalc.cardIntoText}>*Tubete com {anestesiaCalculo['volTubetePaciente']} mg</Text>
                        <Text style={stylesBoxCalc.cardIntoText}>*Paciente de {anestesiaCalculo['pesoPaciente']} kg</Text>
                    </View>
                </View>
                <View style={stylesBoxCalc.cardButtonsFooter}>
                    <TouchableOpacity style={stylesBoxCalc.cardButton} onPress={recarregar}>
                        <Text style={stylesModalCalc.cardButtonText}>
                            Recarregar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesBoxCalc.cardButton} onPress={chamaModal}>
                        <Text style={stylesModalCalc.cardButtonText}>
                            Exibir cálculo
                        </Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType='none'
                    transparent={true}
                    visible={visibilidadeModal}
                    onRequestClose={()=>{
                        setVisibilidadeModal(!visibilidadeModal)
                    }}
                >
                    <TouchableOpacity onPress={chamaModal}>
                        <View style={{backgroundColor:'rgba(0,0,0,0.4);',height:'100%', justifyContent:'center'}}>
                            <View style={stylesBoxCalc.card}>
                                <Text style={stylesBoxCalc.cardTitle}>Solução de {anestesiaBd['anestesicoLocal']}</Text>
                                <View style={stylesBoxCalc.cardContainer}>
                                    <View style={stylesModalCalc.cardInto}>
                                        <Text style={stylesBoxCalc.cardText}>
                                            Contém {numSal}g do sal em 100ml de solução = {numMgSal} mg/mL
                                        </Text>
                                        <Text style={stylesBoxCalc.cardText}>
                                            {numMgSal}mg X {anestesiaCalculo['volTubetePaciente']} mL (volume contido em 1 tubete) = {mgPorTubete} mg
                                        </Text>
                                        <Text style={stylesBoxCalc.cardText}>
                                            A dose máxima de {anestesiaBd['anestesicoLocal']} por peso corporal é de {anestesiaCalculo['maxPorKg']?anestesiaCalculo['maxPorKg']:anestesiaBd['doseMaxima']}:
                                        </Text>
                                        <Text style={stylesBoxCalc.cardText}>
                                            {anestesiaCalculo['pesoPaciente']}kg X {anestesiaCalculo['maxPorKg']?anestesiaCalculo['maxPorKg']:anestesiaBd['doseMaxima']} mg/kg = {doseMaxSal} mg
                                        </Text>
                                        <Text style={stylesBoxCalc.cardText}>
                                            {doseMaxSal} mg / {mgPorTubete} mg = {(doseMaxSal/mgPorTubete).toFixed(1)} tubetes
                                        </Text>
                                    </View>
                                </View>
                                <View style={stylesBoxCalc.cardButtonsFooter}>
                                    <TouchableOpacity onPress={chamaModal} style={stylesBoxCalc.cardButton}>
                                        <Text style={stylesModalCalc.cardIntoText}>
                                            Fechar
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        </View>
    );
};
