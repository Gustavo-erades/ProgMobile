import {StyleSheet} from 'react-native'
const styleBoxDetalhes=StyleSheet.create({
    header:{
        padding:20,
        backgroundColor:'#5BBCAF',
        borderColor:'#293A3F'
    },
    headerText:{
        textTransform:'uppercase',
        fontWeight:'bold',
        color:'#F2F2F2',
        textAlign:'center',
    },
    areaInputs:{
        marginTop:30,
        marginBottom:30
    }, 
    titleInput:{
        fontSize:18,
        fontWeight:'bold',
        paddingLeft:10,
        marginTop:20
    },
    input:{
        marginLeft:10,
        marginRight:10,
        marginTop:5,
        fontSize:18,
        fontWeight:'bold',
        borderWidth:1,
        borderColor:'#F2F2F2',
        height:50,
        borderRadius:20,
        textAlign:'center',
    },
    checkboxView:{
        alignItems:'left',
        marginBottom:10,
        marginTop:10
    },
    buttonTabelaAnestesicos:{
        marginTop:2,
        marginBottom:30,
        borderColor:'#BFBFBF',
        borderWidth:0.8,
        padding:18,
        marginLeft:'auto',
        marginRight:'auto',
        width:'95%',
        borderRadius:3,
        backgroundColor:'#F2F2F2',
    },
    buttonTabelaAnestesicosText:{
        fontWeight:'bold',
        color:'#545759',
        textAlign:'center'
    }
})
export default styleBoxDetalhes