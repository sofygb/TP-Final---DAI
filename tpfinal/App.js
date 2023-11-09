import { StyleSheet, SafeAreaView } from 'react-native';
import MainStack from './src/components/navigation/MainStack.js';

export default function App() {
  return (
    <SafeAreaView style= {{ flex: 1 }}>
        <MainStack />
      </SafeAreaView>
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
