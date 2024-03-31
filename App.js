import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const AlcoolGasolinaApp = () => {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularVantagem = () => {
    const valorAlcool = parseFloat(precoAlcool.replace(',', '.'));
    const valorGasolina = parseFloat(precoGasolina.replace(',', '.'));

    const resultadoCalculo = valorAlcool / valorGasolina;

    if (resultadoCalculo < 0.7) {
      setResultado('O derivado da cana-de-açucar é o melhor para abastecer!');
    } else {
      setResultado('A gasolina é melhor!');
    } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Álcool ou Gasolina</Text>
      <Image
        source={require('./assets/ag.jpg')}
        style={styles.imagem}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        onChangeText={(text) => setPrecoAlcool(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        onChangeText={(text) => setPrecoGasolina(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.botao} onPress={calcularVantagem}>
        <Text style={styles.textoBotao}>Verificar</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagem: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBotao: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
});

export default AlcoolGasolinaApp;
