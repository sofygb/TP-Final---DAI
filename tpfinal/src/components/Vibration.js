import { StyleSheet, ScrollView, Text, View, SafeAreaView, TouchableOpacity, FlatList, Vibration, Button  } from "react-native";
import React, { useState, useEffect} from "react";

export default function VibracionScreen() {
    const ONE_SECOND_IN_MS = 1000;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)} style={styles.boton}>
                <Text style={styles.texto}>Vibrar</Text>
            </TouchableOpacity>
        </View>
    );
}

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