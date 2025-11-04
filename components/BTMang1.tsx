import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

type SinhVien = {
  id: number;
  name: string;
  age: number;
  grade: number;
};

const BTMang1 = () => {
    
  const [students, setStudents] = useState<SinhVien[]>([
    { id: 1, name: "An", age: 18, grade: 9 },
    { id: 2, name: "Bình", age: 19, grade: 8.7 },
    { id: 3, name: "Cường", age: 21, grade: 6.5 },
    { id: 4, name: "Dũng", age: 22, grade: 5.5 },
    { id: 5, name: "Em", age: 19, grade: 7 },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  // ✅ Thêm hoặc Cập nhật sinh viên
  const handleAddOrUpdate = () => {
    if (!name || !age || !grade) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const newStudent: SinhVien = {
      id: editId ? editId : students.length + 1,
      name,
      age: Number(age),
      grade: Number(grade),
    };

    if (editId) {
      // Cập nhật
      const updated = students.map((s) =>
        s.id === editId ? newStudent : s
      );
      setStudents(updated);
      setEditId(null);
    } else {
      // Thêm mới
      setStudents([...students, newStudent]);
    }

    setName("");
    setAge("");
    setGrade("");
  };

  // ✅ Sửa sinh viên
  const handleEdit = (id: number) => {
    const sv = students.find((s) => s.id === id);
    if (sv) {
      setEditId(id);
      setName(sv.name);
      setAge(sv.age.toString());
      setGrade(sv.grade.toString());
    }
  };

  // ✅ Xóa sinh viên
  const handleDelete = (id: number) => {
    Alert.alert("Xác nhận", "Bạn có chắc muốn xóa sinh viên này?", [
      {
        text: "Hủy",
        style: "cancel",
      },
      {
        text: "Xóa",
        style: "destructive",
        onPress: () =>
          setStudents(students.filter((s) => s.id !== id)),
      },
    ]);
  };

  // ✅ Sắp xếp theo điểm (cao → thấp)
  const handleSort = () => {
    const sorted = [...students].sort((a, b) => b.grade - a.grade);
    setStudents(sorted);
  };

  // ✅ Lọc sinh viên có điểm >= 8
  const handleFilter = () => {
    const filtered = students.filter((s) => s.grade >= 8);
    setStudents(filtered);
  };

  // ✅ Tìm kiếm theo tên
  const handleSearch = () => {
    const filtered = students.filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase())
    );
    setStudents(filtered);
  };

  // ✅ Reset danh sách
  const handleReset = () => {
    setStudents([
      { id: 1, name: "An", age: 18, grade: 9 },
      { id: 2, name: "Bình", age: 19, grade: 8.7 },
      { id: 3, name: "Cường", age: 21, grade: 6.5 },
      { id: 4, name: "Dũng", age: 22, grade: 5.5 },
      { id: 5, name: "Em", age: 19, grade: 7 },
    ]);
    setSearch("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QUẢN LÝ SINH VIÊN</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập tên sinh viên"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập tuổi"
          value={age}
          keyboardType="numeric"
          onChangeText={setAge}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập điểm"
          value={grade}
          keyboardType="numeric"
          onChangeText={setGrade}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddOrUpdate}
        >
          <Text style={styles.buttonText}>
            {editId ? "Cập nhật sinh viên" : "Thêm sinh viên"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Tìm kiếm theo tên..."
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity style={styles.smallButton} onPress={handleSearch}>
          <Text style={styles.smallButtonText}>Tìm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton} onPress={handleReset}>
          <Text style={styles.smallButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSort}>
          <Text style={styles.buttonText}>Sắp xếp theo điểm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleFilter}>
          <Text style={styles.buttonText}>Lọc điểm ≥ 8</Text>
        </TouchableOpacity>
      </View>

      {/* --- Danh sách sinh viên --- */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.stt}>{index + 1}.</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>Tên: {item.name}</Text>
              <Text>Tuổi: {item.age}</Text>
              <Text>Điểm: {item.grade}</Text>
            </View>

            <TouchableOpacity
              style={[styles.btnAction, { backgroundColor: "blue" }]}
              onPress={() => handleEdit(item.id)}
            >
              <Text style={{ color: "white" }}>Sửa</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btnAction, { backgroundColor: "red" }]}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={{ color: "white" }}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default BTMang1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    gap: 8,
  },
  smallButton: {
    backgroundColor: "gray",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  smallButtonText: {
    color: "white",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  stt: {
    width: 25,
    fontWeight: "bold",
  },
  name: {
    fontWeight: "bold",
  },
  btnAction: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
});
