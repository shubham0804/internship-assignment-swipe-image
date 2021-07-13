import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import images from "./assets/images";
import { Card, Header, Footer } from "./components";
import Constants from "expo-constants";

export default function App() {
    return (
        <Container>
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
        </Container>
    );
}

const Container = styled.View`
    margin-top: ${(props) => props.marginTop}px;
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

Container.defaultProps = {
    marginTop: Constants.statusBarHeight,
};
