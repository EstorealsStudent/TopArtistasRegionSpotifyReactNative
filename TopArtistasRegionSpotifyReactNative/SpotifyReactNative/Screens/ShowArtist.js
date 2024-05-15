import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,Alert } from 'react-native';

// Import Firebase
import appFirebase from '../Credenciales';
import { getFirestore, doc, getDoc, deleteDoc } from 'firebase/firestore';

const db = getFirestore(appFirebase);

export default function ShowArtist(props) {
  const [Artista, setArtista] = useState({});

  const getOneArtista = async (id) => {
    try {
      const docRef = doc(db, 'Artistas', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setArtista(docSnap.data());
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOneArtista(props.route.params.ArtistaID);
  }, []);

  const deleteartist = async (id) => {
    try {
      await deleteDoc(doc(db, 'Artistas', id));
      Alert.alert('Éxito', 'Artista eliminado');
      props.navigation.navigate('List'); // Corrección aquí
    } catch (error) {
      console.error('Error al eliminar el artista:', error);
      Alert.alert('Error', 'Hubo un error al eliminar el artista. Por favor, inténtalo de nuevo más tarde.');
    }
  };
  
  


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalles Artista</Text>

      <Text style={styles.sub}>Nombre: {Artista.Nombre}</Text>
      <Text style={styles.sub}>Pais: {Artista.Pais}</Text>
      <Text style={styles.sub}>Edad: {Artista.Edad}</Text>
      <Text style={styles.sub}>Top: {Artista.Top}</Text>

      <TouchableOpacity style={styles.Boton} onPress={() => deleteartist(props.route.params.ArtistaID)}>
        <Text style={styles.TextoBoton}>Eliminar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  sub: {
    fontSize: 16,
  },
  Boton: {
    backgroundColor: 'red',
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  TextoBoton: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  }
});
