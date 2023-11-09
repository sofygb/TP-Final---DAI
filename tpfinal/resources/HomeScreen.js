import React from 'react';
import { View, Button, Image, ScrollView, Text } from 'react-native';

export default function HomeScreen({ photos, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {photos.map((photo, index) => (
          <Image key={index} source={{ uri: photo }} style={{ width: 200, height: 200 }} />
        ))}
      </ScrollView>
      <Button title="Take New Photo" onPress={() => navigation.navigate('Camera')} />
    </View>
  );
}
