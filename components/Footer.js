import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Footer</Text>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 50,
        backgroundColor: "red",
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
    },
});
