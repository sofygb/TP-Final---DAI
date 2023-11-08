import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ClipBoard from './src/components/ClipBoard.jsx';
import FileSystem from './src/components/FileSystem.jsx';
import Vibration from './src/components/Vibration.jsx';


export default function App() {
  return (
    <View style={styles.container}>
        <FileSystem />
       <ClipBoard />
       <Vibration></Vibration>
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
});
