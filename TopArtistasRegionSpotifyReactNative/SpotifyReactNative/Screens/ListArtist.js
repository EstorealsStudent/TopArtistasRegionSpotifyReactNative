import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

// Import Firebase
import appFirebase from '../Credenciales';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
const db = getFirestore(appFirebase);

export default function ListArtist(props) {
  const [Lista, setLista] = useState([])

  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Artistas'))
        const docs = [];
        querySnapshot.forEach((doc) => {
          const { Nombre, Pais, Edad, Top } = doc.data();
          docs.push({
            id: doc.id,
            Nombre,
            Pais,
            Edad,
            Top,
          });
        });
        
        setLista(docs);
      } catch (error) {
        console.log(error)
      }
    };
    getLista()
  }, [Lista])
  

  return (
    <ScrollView>
      <TouchableOpacity style={styles.Boton} onPress={() => props.navigation.navigate('Create')}>
        <Text style={styles.TextoBoton}>Agregar Artistas</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.TextoTitulo}>Lista de los Artistas</Text>
      </View>

      <View>
        {Lista.map((List) => (
          <TouchableOpacity key={List.id} style={styles.BotonLista}
          onPress={()=>props.navigation.navigate('Show',{ArtistaID:List.id})}>
            <Text style={styles.TextoNombre}>-{List.Nombre}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Boton: {
    backgroundColor: '#1A384C',
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
  },
  TextoTitulo: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 22,
  },
  TextoNombre: {
    fontSize: 16,
  },
  BotonLista: {
    backgroundColor: '#DDDDD0',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 3,
    padding: 5,
  },
});
