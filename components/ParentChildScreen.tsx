import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

type ChildProps = {
  parentName: string;
  setParentName: (name: string) => void;
  parentAge: string;
  setParentAge: (age: string) => void;
};

// Component Cha
const ParentChildScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cha nhập tại đây:</Text>

      <TextInput
        style={styles.input}
        placeholder="Tin nhắn của cha"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Tuổi của cha"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      {/* Truyền xuống con */}
      <Child
        parentName={name}
        setParentName={setName}
        parentAge={age}
        setParentAge={setAge}
      />
    </View>
  );
};

function Child(props: ChildProps) {
    const { parentName, setParentName, parentAge, setParentAge } = props;
  return (
    <View style={styles.childContainer}>
      <Text style={styles.label}>Con nhập tại đây:</Text>

      <TextInput
        style={styles.input}
        placeholder="Tin nhắn của con"
        value={parentName}
        onChangeText={setParentName}
      />

      <TextInput
        style={styles.input}
        placeholder="Tuổi của con"
        value={parentAge}
        onChangeText={setParentAge} 
        keyboardType="numeric"
      />
    </View>
  );
};

export default ParentChildScreen;

// 🎨 Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  childContainer: {
    marginTop: 30,
    padding: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#AAA',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
});
