import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

type operation = 'add' | 'subtract' | 'multiply' | 'divide';
interface RadioOption {
    label: string;
    value: operation;
}

const Calculator = () => {
    const[a, setA] = useState<string>('');
    const[b, setB] = useState<string>('');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState<string>('');

    const calculator = () => {
        const numA = parseFloat(a);
        const numB = parseFloat(b);

        if (isNaN(numA) || isNaN(numB)) {
            setA('');
            setB('');
            setResult('nhập số hợp lệ.');
            return;
        }
        return { numA, numB };
      };

      const handleCalculation = () => {
        const values = calculator();
        if (!values || !operation) return;

        const { numA, numB } = values;
        let res = '';

        switch (operation) {
            case 'add':
                res = `${numA + numB}`;
                break;
            case 'subtract':
                res = `${numA - numB}`;
                break;
            case 'multiply':
                res = `${numA * numB}`;
                break;
            case 'divide':
                if (numB === 0) {
                    return setResult('không thể chia cho 0.');
                }
                res = `${numA / numB}`;
                break;
            case 'comepare':
              res = numA > numB ? `so lon hon la: ${numA}` 
              : numA < numB ? `so lon hon la: ${numB}` 
              : `hai so bang nhau`;
              break;
            default:
                return setResult('vui lòng chọn phép tính.');
            }
            setResult(`Kết quả: ${res}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Máy tính đơn giản</Text>

            <TextInput 
                style = {styles.input}
                placeholder="Nhap so a"
                keyboardType="numeric"
                value={a}
                onChangeText={setA}
            />
            <TextInput
                style = {styles.input}
                placeholder="Nhap so b"
                keyboardType="numeric"
                value={b}
                onChangeText={setB}
            />

            {/* Radio buttons */}
            <Text style={styles.title}>Chọn phép tính:</Text>
            <View style={styles.radioGroup}>
                {[
                    {label: 'Cộng', value: 'add'}, 
                    {label: 'Trừ', value: 'subtract'},
                    {label: 'Nhân', value: 'multiply'},
                    {label: 'Chia', value: 'divide'},
                    {label: 'So sánh', value: 'comepare'},
                ].map((option) => (
                    <TouchableOpacity
                        key={option.value}
                        style={styles.radioContainer}
                        onPress={() => setOperation(option.value)}
                    >
                        <View style={styles.radioCircle}>
                            {operation === option.value && <View style = {styles.radioSelected} />}
                        </View>
                        <Text style={styles.radioLabel}>{option.label}</Text>
                    </TouchableOpacity>
                ))}
                </View>

            <TouchableOpacity style={styles.button} onPress={handleCalculation}>
                <Text style={styles.buttonText}>Tính</Text>
            </TouchableOpacity>

            <Text style = {styles.result}>{result}</Text>
        </View>
    );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
    color: '#29529dff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 6,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginRight: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  radioLabel: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 5,
    marginRight:55,
    marginLeft: 55,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  result: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
});