import {StyleSheet} from 'react-native'
const styles=StyleSheet.create(
    {   
        telaDefault:{
            flex: 1,
            justifyContent: 'center',
        },
        header:{
            backgroundColor: '#F2F2F2', //#D9D9D9
            width: '100%',
            marginTop:35,
            marginBottom:15,
            paddingRight:20,
            paddingLeft:20,
            paddingTop:10
        },
        titulo:{
            color:'#04BFAD',
            fontWeight:'bold',
            textTransform:'uppercase'
        },
        botao:{
            marginLeft:'auto',
            marginRight:'auto',
            backgroundColor:'#6AD9CE',
            width:'100%',
            alignItems:'center',
            padding:15,
            borderRadius:8,
            marginTop:10,
            marginBottom:15,
        },
        botaoTexto:{
            fontWeight:'bold'
        },  
        content:{
            backgroundColor:'#FFF',
            alignItems: 'center',
            justifyContent:'center',
            marginTop:20,
            height:'50%'
        },
        contentBoxCalc:{
            backgroundColor:'#FFF',
            justifyContent:'center',
            marginTop:20,
            height:'50%',
        },
        moreDetails:{
            marginLeft:'auto',
            marginRight:25
        },
        moreDetailsText:{
            color:'#04BFAD',
            fontSize:18
        },
        textoProvisorio:{
            backgroundColor:'#F2F2F2',
            padding:15,
            borderRadius:10,
        },
        limparTelaCalc:{
            alignItems:'center',
            marginTop:10,
            backgroundColor:'#F2F2F2',
            marginRight:'auto',
            marginLeft:'auto',
            borderRadius:10,
        },
        limparTelaCalcText:{
            fontSize:15,
            padding:10,
        },
        buttonDetalhes:{
            backgroundColor:'#478A8B',
            padding:15,
            border:'none',
        },
        buttonDetalhesText:{
            fontSize:20,
            textAlign:'center',
            color:'#F2F2F2',
            fontWeight:'bold'
        }
    }
);
export default styles;