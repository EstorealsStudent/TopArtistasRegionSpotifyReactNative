import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button,Alert } from 'react-native';

//Importar Firebase
import appFirebase  from '../Credenciales'
import { getFirestore,collection,addDoc,getDocs,doc,deleteDoc,getDoc,setDoc } from 'firebase/firestore';

const db=getFirestore(appFirebase)

export default function CreateArtist(props) {
  const initialState = {
    Nombre: '',
    Pais: '',
    Edad:'',
    Top:''
  };
  const [state, setState] = useState(initialState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveArtist = async() => {
    try{
        await addDoc(collection(db,'Artistas'),{
          ...state       }
      )
      Alert.alert('Alerta','Guardado con exito')
      props.navigation.navigate('List')
    }
    catch{
      console.error(error)
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Crear Artista</Text>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder='Nombre'
          onChangeText={(value) => handleChangeText(value, 'Nombre')}
          value={state.Nombre}
        />
      </View>
    
      <View style={styles.inputGroup}>
        <TextInput
          placeholder='Pais'
          onChangeText={(value) => handleChangeText(value, 'Pais')}
          value={state.Pais}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder='Edad'
          onChangeText={(value) => handleChangeText(value, 'Edad')}
          value={state.Edad}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder='Top'
          onChangeText={(value) => handleChangeText(value, 'Top')}
          value={state.Top}
        />
      </View>

      <View>
        <Button title='Guardar Artista' onPress={saveArtist} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 12,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});
