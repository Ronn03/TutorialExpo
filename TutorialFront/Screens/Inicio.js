import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,Linking, Button, onPress } from 'react-native';
import CamButtom from '../Components/CamButtom';
const Inicio = () => {
   
    return (
    
      <View style={styles.container}>    
        <Text style={styles.text1}>Bienvenido, Usuario</Text>   
        <StatusBar style="auto" />   
        <Image
        style={styles.image}
        source={require('../assets/giphy.gif')}
      />
    <CamButtom style={styles.button}
        onPress={() => Linking.openURL('www.linkedin.com/in/ronny-cusin-911651112')}
        imageSource={require('../assets/linkedin.jpg')} // Ruta a tu imagen
        size={150} // Tamaño de la imagen dentro del botón
      />
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      borderColor: '#000',
      borderWidth: 2,
     
    },
    text1: {
    fontSize: 30,
      color: '#000',
      fontWeight: 'bold',    
      marginTop: 100,
      
  
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 30,
        marginLeft: 0,
        borderRadius: 30,
        overflow: 'hidden',  
      },
       
  });

  export default Inicio