import React from "react";
import { FlatList, Text, View } from "react-native";

const data = [
  { id: "1", name: "Áo thun" },
  { id: "2", name: "Quần jeans" },
  { id: "3", name: "Giày sneaker" },
];

const vidu = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
};

export default vidu;