import { StyleSheet } from "react-native";
const stylesModalCalc=StyleSheet.create(
    {
        boxTitulo:{
            backgroundColor:'#008F8C',
            padding:10,
            marginTop:10,
        },  
        textoTitulo:{
            color:'#C7FFED',
            fontWeight:'bold',
            textTransform:'uppercase',
            textAlign: 'center',
        },
        boxCalculoModal:{
            borderColor:'red',
            borderWidth:5,
        },
        calculoModal:{
            textAlign:'center',
            fontWeight:'bold',
            color:'#C7FFED',
            marginTop:8
        },
        botao:{
            backgroundColor:'#008F8C',
            padding:14,
            display:'inline',
            marginLeft:'auto',
            marginRight:'auto',
            marginTop:30,
            borderRadius:6,
            
        },
        cardIntoText:{
            marginLeft:'auto',
            marginRight:'auto',
            fontWeight:'bold',
            textTransform:'uppercase'
        },
        cardButtonText:{
            fontWeight:'bold',
            textTransform:'capitalize',
        }
    }
)
export default stylesModalCalc;