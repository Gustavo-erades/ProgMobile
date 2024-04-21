import {StyleSheet} from 'react-native';
const styles=StyleSheet.create({
    buttonArea:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:10,
        backgroundColor:'#FFF',
    },
    button:{
        padding:10,
        borderBottomColor:'#6AD9CE',
        borderBottomWidth:3,
        
    },
    buttonInativo:{
        padding:10,
        //borderBottomColor:'#8c8c8c',
        //borderBottomWidth:3,
    },
    botaoTexto:{
        color:'#6AD9CE',
        fontWeight:'bold',
        fontSize:15
    },
    botaoTextoInativo:{
        color:'#8c8c8c',
        fontSize:15
    }
})
export default styles;