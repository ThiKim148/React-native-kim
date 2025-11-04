import { StyleSheet, Text, View, Image, ImageSourcePropType, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

type Product= {
        id:string,
        name: string;
        price: number;
        image: ImageSourcePropType;
    }

const Card = ({name, price, image}: Product) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.boxImg}></Image>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Mua Ngay</Text>
            </TouchableOpacity>
        </View>
    )
}

const products: Product[] = [
        {
            id: '1',
            name: "Bomber Jacket",  
            price: 20,
            image: require("../assets/products_images/bomber_jacket.jpg")
        },
         {
            id: '2',
            name: "Bomber Jacket",  
            price: 20,
            image: require("../assets/products_images/bomber_jacket.jpg")    
                
        },
         {
            id: '3',
            name: "Bomber Jacket",  
            price: 20,
            image: require("../assets/products_images/bomber_jacket.jpg"),
        },
         {
            id: '4',
            name: "Bomber Jacket",  
            price: 20,
            image: require("../assets/products_images/bomber_jacket.jpg"),
        },
         {
            id: '5',
            name: "Bomber Jacket",  
            price: 20,
            image: require("../assets/products_images/bomber_jacket.jpg"),
        },
         {
            id: '6',
            name: "Bomber Jacket",  
            price: 20,
            image: require("../assets/products_images/bomber_jacket.jpg"),

        },
         {
            id: '7',
            name: "Bomber Jacket",  
            price: 20,
            image: require("../assets/products_images/bomber_jacket.jpg"),
        },
         {
            id: '8',
            name: "Bomber Jacket",  
            price: 20,
            image: require("../assets/products_images/bomber_jacket.jpg"),
        },
         {
            id: '9',
            name: "Bomber Jacket",  
            price: 20,
            image: require("../assets/products_images/bomber_jacket.jpg"),
        },
    ];

const ProductFlatList = () => {
    
    return (
        <FlatList
            data={products}     
            numColumns={3}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Card name={item.name} price={item.price} image={item.image} id={item.id} />
            )}
        />
    );

}

export default ProductFlatList;

const styles = StyleSheet.create({
    container: {
    width: '30%',
    marginTop: 20,
    margin: 5,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  boxImg: {
    width: 100,
    height: 70,
    borderRadius: 8,
    marginBottom: 6,
  },

  productList: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
  },

  button: {
    backgroundColor: '#B7A3E3',
    width: 80,
    height: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },

  text: {
    fontSize: 14,
    color: '#FFF1CB',
    fontWeight: 'bold',
  },
  name: {
    color: '#FF8F8F',
    fontSize: 14,
    marginBottom: 2,
  },
  price: {
    color: '#CD2C58',
    fontSize: 13,
  },
})