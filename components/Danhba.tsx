import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert
} from "react-native";

type Contact = {
  name: string;
  phone: string;
};

const Danhba = () => {

    const [contacts, setContacts] = useState<Contact[]>([
        { name: "Linh", phone: "0889333444" },
        { name: "Hùng", phone: "0889322542" },
        { name: "Thanh", phone: "0905352526" },
    ]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAddContact = () => {
    if (!name.trim() || !phone.trim()) return;

    if (editingIndex !== null) {
      const updated = [...contacts];
      updated[editingIndex] = { name, phone };
      setContacts(updated);
      setEditingIndex(null);
    } else {
      setContacts([...contacts, { name, phone }]);
    }

    setName("");
    setPhone("");
  };

  const handleDelete = (index: number) => {
    const contactName = contacts[index].name;
    Alert.alert(
      "Xác nhận xóa",
      `Bạn có chắc muốn xóa liên hệ "${contactName}" không?`,
      [
        {
          text: "Hủy",
          style: "cancel",
        },
        {
          text: "Xóa",
          style: "destructive",
          onPress: () => {
            const updated = contacts.filter((_, i) => i !== index);
            setContacts(updated);
          },
        },
      ]
    );
  };

  const handleEdit = (index: number) => {
    setName(contacts[index].name);
    setPhone(contacts[index].phone);
    setEditingIndex(index);
  };

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

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
        placeholder="📱 Nhập số điện thoại"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity style={styles.addBtt} onPress={handleAddContact}>
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

      <FlatList
        data={filteredContacts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.contactItem}>
            <Text style={styles.contactText}>
              {item.name} - {item.phone}
            </Text>

            <View style={styles.actionButtons}>
              <TouchableOpacity onPress={() => handleEdit(index)}>
                <Text style={styles.editText}>✏ Sửa</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleDelete(index)}>
                <Text style={styles.deleteText}>🗑 Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

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
    width: "100%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
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
    width: "100%",
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
    borderWidth: 1,
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  contactText: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },

  actionButtons: {
    flexDirection: "row",
    gap: 10,
  },

  editText: {
    color: "#007bff",
    marginRight: 10,
  },

  deleteText: {
    color: "#ff0000",
  },
});
