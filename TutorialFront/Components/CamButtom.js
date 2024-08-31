import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const CamButtom = ({ onPress, imageSource, size }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image source={imageSource} style={{ width: size, height: size }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width:70, // Ajusta el tamaño del botón según sea necesario
    height: 70, // Ajusta el tamaño del botón según sea necesario
    borderRadius: 20, // Hacer que el botón sea circular
    backgroundColor: '#000', // Ajusta el color de fondo según sea necesario
    overflow: 'hidden',
    borderColor: '#000',
    borderBottomColor: '#000',
    borderStyle: 'solid',
    borderWidth: 2,
  },
});

export default CamButtom;