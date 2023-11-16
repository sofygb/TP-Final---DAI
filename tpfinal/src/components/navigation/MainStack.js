import Home from '../../../Home.js'
import Notes from '../Notes.js'
import Files from '../Files.js'
import Camara from '../Camara.js'
import MisSaves from '../MisSaves.js'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                <>
                    <Stack.Screen
                        name='Home'
                        component={Home}
                    />

                    <Stack.Screen
                        name='Notes'
                        component={Notes}
                    />

                    <Stack.Screen
                        name='Files'
                        component={Files}
                    />

                    <Stack.Screen
                        name='Camara'
                        component={Camara}
                    />

                    <Stack.Screen
                        name='MisSaves'
                        component={MisSaves}
                    />
                </>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack
