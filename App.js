import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Card from "./components/Card";
import images from "./assets/images";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Constants from "expo-constants";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor="#ADD8E6" />
            <Header />
            <FlatList
                data={images}
                renderItem={({ item }) => <Card item={item} />}
                keyExtractor={(_, index) => index.toString()}
                pagingEnabled={true}
                decelerationRate={"fast"}
            />
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
