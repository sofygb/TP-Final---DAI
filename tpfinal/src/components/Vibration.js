import { Button, Platform, Text, Vibration, View, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider'


export default function Vibration({ navigation }) {
    const [segundos, setSegundos] = useState(0)
    const handleSegundos = value => setSegundos(value)

    const Separator = () => <View style={Platform.OS === 'android' ? styles.separator : null} />

    return (
        <SafeAreaView style={styles.container}>
            <Text style={[styles.header, styles.paragraph]}>Vibración 😎</Text>
            <View>
                <Button title="Vibrar" onPress={() => Vibration.vibrate()} />
            </View>

            <Separator />
            <Text>Elegir los segundos a vibrar: (de 1 a 5)</Text>
            <Slider
                style={{ width: 200, height: 40, width: '100%' }}
                minimumValue={1}
                maximumValue={5}
                step={1}
                value={segundos}
                onValueChange={handleSegundos}
            />

            <Button title="Vibrar Por segundos elegidos" onPress={() => Vibration.vibrate(segundos * 1000)} />

            <Separator />

            <Button title="Cancelar vibracao" onPress={() => Vibration.cancel()} color="#FF0000" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
        gap: 20
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    paragraph: {
        margin: 24,
        textAlign: 'center',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
})