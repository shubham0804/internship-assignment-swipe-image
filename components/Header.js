import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Header</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 50,
        backgroundColor: "teal",
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
    },
});
