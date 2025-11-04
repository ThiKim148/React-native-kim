import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const CalculatorBMI = () => {
    const [weight, setWeight] = useState<string>('');
    const [height, setHeight] = useState<string>('');
    const [bmi, setBMI] = useState<number |null>(null);
    const [category, setCategory] = useState<string>('');
    const [heightError, setHeightError] = useState('');
    const [weightError, setWeightError] = useState('');

    const calculatorBMI = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height) / 100;

        let valid = true;

            if (isNaN(h) || h === 0) {
                setHeightError('Vui lòng nhập chiều cao hợp lệ');
                valid = false;
            } else {
                setHeightError('');
            }
            if (isNaN(w) || w === 0) {
                setWeightError('Vui lòng nhập cân nặng hợp lệ');
                valid = false;
            } else {
                setWeightError('');
            }
            if (!valid) {
                setBMI(null);
                setCategory('');
                return;
            }

            const heightInMeters = h;
            const bmiValue = w / (heightInMeters * heightInMeters);
            setBMI(parseFloat(bmiValue.toFixed(1)));
            classifyBMI(bmiValue);
        };

    const classifyBMI = (bmi: number) => {
        if (bmi < 18.5) {
            setCategory('Underweight');
        }else if (bmi >= 18.5 && bmi < 24.9) {
            setCategory('Normal weight');
        } else if (bmi >= 25 && bmi < 29.9) {
            setCategory ('Overweight');
        }else {
            setCategory ('Obese');
        }
    };

    const reset = () => {
        setWeight('');
        setHeight('');
        setBMI(null);
        setCategory('');
        setWeightError('');
        setHeightError('');
    };

    const getColor = () => {
        switch (category) {
            case 'Underweight':
                return 'blue';
            case 'Normal weight':
                return 'green';
            case 'Overweight':
                return 'orange';
            case 'Obese':
                return 'red';
            default:
                return 'black';
        }
    };


    return (
        <View style = {styles.containers}>
        <KeyboardAvoidingView behavior = {Platform.OS === 'ios' ? 'padding' : undefined} style ={styles.container} >
        <Text style = {styles.title} >Tính BMI 📱</Text>

        <TextInput 
            style = {styles.input}
            placeholder = "Chiều cao (cm)"
            keyboardType="numeric"
            value = {height}
            onChangeText={setHeight}
        />
        {heightError !== '' && <Text style={styles.errorText}>{heightError}</Text>}
        <TextInput
            style = {styles.input}
            placeholder = "Cân nặng ()kg"
            keyboardType="numeric"
            value = {weight}
            onChangeText = {setWeight}
        />
        {weightError !== '' && <Text style={styles.errorText}>{weightError}</Text>}

        <View style = {styles.buttonContainer}>
            <TouchableOpacity style = {styles.button} onPress={calculatorBMI}>
                <Text style = {styles.buttonText}>Tính</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.button, styles.resetButton]} onPress = {reset}>
                <Text style = {styles.buttonText}>Reset</Text>
            </TouchableOpacity>
        </View>

        {bmi !== null && (
            <View style = {[styles.resultContainer, {backgroundColor: getColor()}]}>
                <Text style = {styles.resultText}>BMI của bạn là: {bmi}</Text>
                <Text style = {styles.resultText}>Category: {category}</Text>
            </View>
        )}
        </KeyboardAvoidingView>
        </View>
    );
};


export default CalculatorBMI;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },

    containers: {
        flex: 1,
        backgroundColor: '#8ba1a7ff',
        borderWidth: 5,
        borderColor: '#ddd',
        borderRadius: 10,
        margin: 10,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
        color: '#2268e0ff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 12,
        marginBottom: 15,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        backgroundColor: '#3182ce',
        padding: 12,
        borderRadius: 8,
        flex: 1,
        marginRight: 10,
    },

    resetButton: {
        backgroundColor: '#a0aec0',
        marginRight: 0,
        marginLeft: 10,
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    resultContainer: {
        marginTop: 30,
        padding: 20,
        borderRadius: 10,
    },

    resultText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },

    errorText: {
        color: '#E53E3E',
        fontSize: 14,
        marginBottom: 8,
        marginLeft: 4,
    }
});