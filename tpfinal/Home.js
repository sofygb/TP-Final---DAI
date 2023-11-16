import * as React from "react";
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centrar}>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Camara")}>
                    <Text style={styles.texto}>Abrir camara</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
/*              <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Files")}>
                    <Text style={styles.texto}>Seleccionar foto o video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Notes")}>
                    <Text style={styles.texto}>Block de Notas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("MisSaves")}>
                    <Text style={styles.texto}>Mis Archivos</Text>
                </TouchableOpacity>
*/


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: 'white',
    },
    boton: {
        borderRadius: 15,
        borderColor: '#58CBC0',
        backgroundColor: '#58CBC0',
        minHeight: 50,
        minWidth: 200,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        display: 'flex',
        color: 'white',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 18,
    },
    centrar: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
