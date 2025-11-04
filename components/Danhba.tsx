import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from "react-native";

const Danhba = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [contact, setContact] = useState([]);
    const [search, setSearch] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>📗 Danh Bạ Cute</Text>

            <TextInput
                style={styles.input}
                placeholder="🌼 Nhập tên"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="📱Nhập số điện thoại"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />

            <TouchableOpacity style={styles.addBtt}>
                <Text style={styles.addBttText}>
                    {editingIndex !== null ? "🗃️ Lưu" : "➕ Thêm"}
                </Text>
            </TouchableOpacity>

            <TextInput
                style={styles.search}
                placeholder="🔍 Tìm kiếm..."
                value={search}
                onChangeText={setSearch}
            />
        </View>
    );
}

export default Danhba;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffeaf1",
        alignItems: "center",
        paddingTop: 30,
    },

    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#e91e63",
        marginBottom: 10,
    },

    input: {
        backgroundColor: "#fff",
        width: "80%",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ffc1d6",
    },

    addBtt: {
        backgroundColor: "#ff69b4",
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 10,
        marginBottom: 15,
    },

    addBttText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },

    search: {
        width: "85%",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ffc1d6",
    },

    contactItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF0F5",
        padding: 10,
        borderRadius: 10,
        width: "85%",
        justifyContent: "space-between",
        marginBottom: 10,
    },

    contactText: {
        flex: 1,
        marginHorizontal: 10,
        fontSize: 16,
    },
})