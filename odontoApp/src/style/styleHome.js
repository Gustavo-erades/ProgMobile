import {StyleSheet} from 'react-native'
const styles=StyleSheet.create(
    {
        
        header:{
            backgroundColor: '#F2F2F2', //#D9D9D9
            width: '100%',
            height: '100%',
            marginTop:30,
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
            marginTop:10
        },
        botaoTexto:{
            fontWeight:'bold'
        },  
        content:{
            backgroundColor:'#FFF',
            alignItems: 'center',
            justifyContent:'center',
            flex:1
        }
    }
);
export default styles;