import React, { use, useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native";

type Sinhvien = {
    id: number;
    name: string;
    age: number;
    grade: number;
}

const data = [
    { id: 1, name: 'A', age: 18, grade: 9 },
    { id: 2, name: 'B', age: 19, grade: 8.7 },
    { id: 3, name: 'C', age: 21, grade: 6.5 },
    { id: 4, name: 'D', age: 22, grade: 5.5 },
    { id: 5, name: 'E', age: 19, grade: 7 },
];


const Danhsach = ({ id, name, age, grade, index, onEdit, onDelete }: any) => {
    return (
        <View style={styles.containerDS}>
            <Text>STT: {index + 1}</Text>
            <Text style={styles.name}>Ten: {name}</Text>
            <Text style={styles.age}>Tuoi: {age}</Text>
            <Text style={styles.grade}>Diem: {grade}</Text>

            <View style={styles.itemButtons}>
                <TouchableOpacity onPress={() => onEdit(id)}>
                    <Text style={styles.edit}>Sửa</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onDelete(id)}>
                    <Text style={styles.delete}>Xóa</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const BTMang = () => {

    const [student, setStudents] = useState<Sinhvien[]>([])
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [grade, setGrade] = useState('');
    const [search, setSearch] = useState('');
    const [editId, setEditId] = useState<number | null>(null);

    const handleAddStudent = () => {
        if(!name || !age || !grade) {
            Alert.alert("Loi", "Vui long nhap day du thong tin");
            return;
        }

        const newStudent: Sinhvien = {
            id: student.length + 1,
            name,
            age: Number(age),
            grade: Number(grade),
        };

        setStudents([...student, newStudent]);
        setName('');
        setAge('');
        setGrade('');

    };

    const handleEditStudent = (id: number) => {
        const student = data.find(s => s.id === id);
        if(student) {
            setName(student.name);
            setAge(student.age.toString());
            setGrade(student.grade.toString());
            setEditId(student.id);
        }
    };

    const handleUpdateStudent = () => {
        const updated = data.map(s => s.id === editId ? {...s, name, age: Number(s.age), grade: Number(grade)} : s);
        setStudents(updated);
        setEditId(null);
        setName('');
        setAge('');
        setGrade('');
    };

    const handleDeleteStudent = (id: number) => {
        Alert.alert("Xac nhan", "Ban co muon xoa sinh vien nay?", [
            {text:"Huy", style:"cancel"},
            {text:"Xoa", onPress: () => setStudents(data.filter(s => s.id !== id))},
        ]);
    };

    const sortByGrade = () => {
        const sorted =[...data].sort((a, b) => a.age - b.age);
        setStudents(sorted);
    };

    const filterByGrade = () => {
        const filtered = student.filter(s => s.grade >= 8);
        setStudents(filtered);
    };

    const handleSearch = () => {
        const filtered = data.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));
        setStudents(filtered);
    }

    return (
        <View style={styles.container}>

            <Text>Quan ly sinh vien</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nhap ten sinh vien"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nhap tuoi sinh vien"
                    value={age}
                    keyboardType="numeric"
                    onChangeText={setAge}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nhap diem sinh vien"
                    value={grade}
                    keyboardType="numeric"
                    onChangeText={setGrade}
                />
                <TouchableOpacity style={styles.button} onPress={editId ? handleUpdateStudent : handleAddStudent}>
                    <Text style={styles.buttonText}>{editId ? "Cap nhat sin vien" : "Them Sinh Vien"}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.inputSearch}
                    placeholder="Tim kiem theo ten"
                    value={search}
                    onChangeText={setSearch}
                />

            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                    <Text style={styles.buttonText}>Tim Kiem</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.button} onPress={sortByGrade}>
                    <Text style={styles.buttonText}>Sap xep theo diem</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={filterByGrade}>
                    <Text style={styles.buttonText}> Loc theo diem </Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item, index}) => (
                    <Danhsach id={item.id} name={item.name} age={item.age} grade={item.grade} 
                    index={index} onEdit={handleEditStudent} onDelete={handleDeleteStudent}
                    />
                )}
            />
        </View>
    )
}

export default BTMang;

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    inputContainer: {
        flexDirection: 'column',
        marginBottom: 30,
        gap: 10
    },
    searchContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        gap: 10
    },
    inputSearch: {
        width: 300,
        borderWidth: 1,
        borderRadius: 10,
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        padding: 8,
        width: '100%',
        marginBottom: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonSearch: {
        
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1
    },
    itemButtons: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 5,
        justifyContent: 'flex-start'
    },
    containerDS: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    name: {
        fontSize: 16,
    },
    age: {
        fontSize: 14,
    },
    grade: {
        fontSize: 14,
    },
    edit: {
        color: 'white',
        backgroundColor: 'blue',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginRight: 10,
    },
    delete: {
        color: 'white',
        backgroundColor: 'red',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },

})