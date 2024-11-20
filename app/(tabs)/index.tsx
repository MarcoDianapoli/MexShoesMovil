import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';
import axios from 'axios';

export default function Index() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => { 
    try {
        const response = await axios.post('http://10.0.2.2:3000/server', { email, password });
        if (response.data.success) {
            // Navega a la página de inicio o guarda el token de usuario
            console.log('Login successful');
        } else {
            Alert.alert('Error', 'Correo electrónico o contraseña incorrectos');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        Alert.alert('Error', 'Ocurrió un error durante el inicio de sesión');
    }
};


  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/images/img/LogoMexshoes.png')}
        style={styles.image}
      />
      <Text style={styles.titulo}> Bienvenido</Text>
      <Text style={styles.subtitulo}>Inicie sesión</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Correo electrónico" 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address" 
        autoCapitalize="none" 
        autoCorrect={false} /> 
      <TextInput 
        style={styles.input} 
        placeholder="Contraseña" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
        autoCapitalize="none" 
        autoCorrect={false} />
      
      <TouchableOpacity 
        style={styles.button}
        onPress={handleLogin}>
          <Link href="/home" style={styles.buttonText}>
          <Text style={styles.buttonText}>
          Iniciar Sesion
        </Text>
      </Link>
        
      </TouchableOpacity>
      <Link href="/signup" style={styles.buttonText}>
        Aún no tienes cuenta?
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#34434D'
  },
  subtitulo: {
    fontSize: 25,
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    paddingStart: 50,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
  },
  forgotPassword: {
    fontSize: 14,
    color: 'black',
    marginTop: 20,
    fontWeight: 'normal'
  },
  button:{
    backgroundColor:'#D3D3D3',
    marginTop: 20,
    padding:10,
    paddingStart:10,
    borderRadius:10,
  },
  buttonText:{
    color:'#00000',
    fontSize:18,
    fontWeight:'bold',
  }
});
