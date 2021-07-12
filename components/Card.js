import React from "react";
import { StyleSheet, Text, View, Dimensions, ImageBackground } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Constants from "expo-constants";

const Card = ({ item }) => {
    const image = item?.image;
    const title = item?.title;
    const description = item?.description;
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={image} style={styles.container} resizeMode="cover">
                {/* Name */}
                <View style={styles.nameContainer}>
                    <Text style={styles.heading}>Name: </Text>
                    <Text style={styles.text}>{title}</Text>
                </View>
                {/* Description */}
                <View style={styles.descriptionContainer}>
                    <Text style={styles.heading}>Description: </Text>
                    <Text style={styles.text}>{description}</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth,
        height: windowHeight - Constants.statusBarHeight - 75,
    },
    nameContainer: {
        flexDirection: "row",
        margin: 20,
    },
    descriptionContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        margin: 20,
    },
    heading: {
        color: "grey",
        fontWeight: "bold",
    },
    text: {
        color: "white",
    },
});
