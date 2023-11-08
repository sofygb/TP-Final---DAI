import React, { useState } from 'react';
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';

const App = () => {
  const [files, setFiles] = useState([]);
  const [newFileName, setNewFileName] = useState('');

  const handleWriteFile = async () => {
    const directory = FileSystem.documentDirectory;
    const filePath = `${directory}/${newFileName}`;
    const fileContent = 'Contenido del nuevo archivo.';

    try {
      await FileSystem.writeAsStringAsync(filePath, fileContent);
      console.log('Archivo guardado con éxito.');
      setNewFileName(''); // Limpia el nombre del nuevo archivo
      setFiles([...files, { name: newFileName }]);
    } catch (error) {
      console.error('Error al guardar el archivo:', error);
    }
  };

  const handleDeleteFile = async (fileName) => {
    const directory = FileSystem.documentDirectory;
    const filePath = `${directory}/${fileName}`;

    try {
      await FileSystem.deleteAsync(filePath, { idempotent: true });
      console.log('Archivo eliminado con éxito.');
      setFiles(files.filter((file) => file.name !== fileName)); // Actualiza la lista de archivos
    } catch (error) {
      console.error('Error al eliminar el archivo:', error);
    }
  };

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        placeholder="Nombre del nuevo archivo"
        value={newFileName}
        onChangeText={(text) => setNewFileName(text)}
      />
      <Button title="Escribir archivo" onPress={handleWriteFile} />
      {files.length > 0 && (
        <Text>
          Los archivos de la carpeta son: {files.map((file) => (
            <Text key={file.name}>
              {file.name} <Button title="Eliminar" onPress={() => handleDeleteFile(file.name)} />
            </Text>
          ))}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    padding: 5,
  },
});

export default App;