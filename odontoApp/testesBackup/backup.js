<View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.botaoTexto}>
            Calcular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonInativo} onPress={()=>{Alert.alert("Falta fazer!","vai para a tela 2")}}>
          <Text style={styles.botaoTextoInativo}>
            Editar
          </Text>
        </TouchableOpacity>
      </View>