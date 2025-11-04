import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const LayoutProduct = () => {

    return (
        <View style={styles.container}>
            <View style={[styles.header, { backgroundColor: "#2a87a6" }]}>
                <Text style={styles.text}>Header</Text>
            </View>
            <View style={styles.row}>
                <View style={[styles.box, { backgroundColor: "grey" }]}> 
                    <Image source={{uri: 'https://bizweb.dktcdn.net/100/287/440/products/ao-khoac-varsity-nam-nu-ni-den-phoi-tay-do-hinh-thue-full-2-mat-bo-chun-nut-bam-8.jpg?v=1734334675447'}} style={styles.img} />
                    <View style = {styles.info}>
                        <Text style={styles.text}>Bomber Jacket</Text>
                        <Text style={styles.text}>$20</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Mua ngay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.box, { backgroundColor: "grey" }]}>
                    <Image source={{uri: 'https://ca-times.brightspotcdn.com/dims4/default/821ddbe/2147483647/strip/true/crop/6122x4081+0+1/resize/1440x960!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9b%2F7e%2F1f266c44478083aee69c36942a1d%2F1351750-fi-sneaker-buyer-coolkicks-jlc-16180-017.jpg'}} style={styles.img} />
                    <View style = {styles.info}>
                        <Text style={styles.text}>Sneaker AIR</Text>
                        <Text style={styles.text}>$100</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Mua ngay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.box, { backgroundColor: "grey" }]}> 
                    <Image source={{uri: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_3.0/h_300,c_limit/a0fe0763-acef-4dd2-99b7-896c6f1a3589/air-max-97-by-you-custom-womens-shoes-RZzTww.png'}} style={styles.img} />
                    <View style = {styles.info}>
                        <Text style={styles.text}>Sneaker Nike</Text>
                        <Text style={styles.text}>$200</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Mua ngay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[styles.footer, { backgroundColor: "#9b5de5" }]}>
                <Text style={styles.text}>Footer</Text>
            </View>
        </View>
    );
}
export default LayoutProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 60, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        flex: 1,
        height: '50%',
        margin: 5,
        borderRadius: 10,
    },
    img: {
        borderRadius: 10,
        width: '100%',
        height: '50%',
    },
    info: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#ff6f61',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    }
})