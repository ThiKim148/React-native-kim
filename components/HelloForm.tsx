// components/HelloForm.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const HelloForm = ({ name }: { name: string }) => {
  const [age, setAge] = useState('');

  const handleSubmit = () => {
    alert(`Xin chào ${name}, bạn ${age} tuổi!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nhập tuổi của bạn:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Tuổi của bạn"
        keyboardType="numeric"
      />
      <Button title="Gửi" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 18, marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 4,
  },
});

export default HelloForm;