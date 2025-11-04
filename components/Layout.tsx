import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Layout = () => {

    return (
        <View style={styles.container}>
            <View style={styles.section1}>

            </View>
            <View style={styles.section2}>

            </View>
            
        </View>
    );
}

export default Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
    },

    section1: {
        flex: 1,
        backgroundColor: '#2a87a6ff',
    },
    section2: {
        flex: 1,
        backgroundColor: 'lightgreen',
    },
}
)