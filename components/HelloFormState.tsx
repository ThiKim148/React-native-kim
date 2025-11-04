import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

type HelloFormProps = {
  name: string;
};

export default function HelloForm({ name }: HelloFormProps) {
  const [age, setAge] = useState('');

  const handlePress = () => {
    Alert.alert(`Hello ${name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Xin chào {name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tuổi của bạn"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      {age ? (
        <View style={styles.center}>
          <Text style={styles.greeting}>Hello {name}, {age} tuổi</Text>
          <Button title="Chào bạn" onPress={handlePress} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  center: {
    alignItems: 'center',
    marginTop: 20,
  },
  greeting: {
    fontSize: 24,
    marginBottom: 10,
  },
});