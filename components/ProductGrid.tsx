import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageSourcePropType } from "react-native";

type Product = {
  id: string;
  name: string;
  price: string;
  image: ImageSourcePropType;
};

// Component con nhận props
const ProductBox = ({ item }: {item: Product}) => {
  return (
    <View style={[styles.box, { backgroundColor: "grey" }]}>
      <Image source={ item.image } style={styles.img} />
      <View style={styles.info}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.price}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mua ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const products: Product[] = [
    {
      id: "1",
      name: "Bomber Jacket",
      price: "$20",
      image: require("../assets/products_images/bomber_jacket.jpg"),
    },
    {
      id: "2",
      name: "Sneaker AIR",
      price: "$100",
      image: require("../assets/products_images/bomber_jacket.jpg"),
    },
    {
      id: "3",
      name: "Sneaker Nike",
      price: "$200",
      image: require("../assets/products_images/bomber_jacket.jpg"),
    },
    {
      id: "4",
      name: "Sneaker Nike",
      price: "$200",
      image: require("../assets/products_images/bomber_jacket.jpg"),
    },
    {
      id: "5",
      name: "Sneaker Nike",
      price: "$200",
      image: require("../assets/products_images/bomber_jacket.jpg"),
    },
    {
      id: "6",
      name: "Sneaker Nike",
      price: "$200",
      image: require("../assets/products_images/bomber_jacket.jpg"),
    },
  ];

// Component chính
const ProductGrid = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.header, { backgroundColor: "#2a87a6" }]}>
        <Text style={styles.text}>Header</Text>
      </View>

      <View style={styles.row}>
        {products.map((item) => (
          <ProductBox key={item.id} item={item} />
        ))}
      </View>

      <View style={[styles.footer, { backgroundColor: "#9b5de5" }]}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </ScrollView>
  );
};

export default ProductGrid;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    width: "45%",
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: 120,
  },
  info: {
    paddingVertical: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ff6f61",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});


