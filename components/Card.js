import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Constants from "expo-constants";

const Card = ({ item }) => {
    return (
        <Container>
            <ImageBackground source={item.image} resizeMode="cover">
                {/* Name */}
                <NameContainer>
                    <HeadingText>Name: </HeadingText>
                    <Text>{item.title}</Text>
                </NameContainer>
                {/* Description */}
                <DescriptionContainer>
                    <HeadingText>Description: </HeadingText>
                    <Text>{item.description}</Text>
                </DescriptionContainer>
            </ImageBackground>
        </Container>
    );
};

export default Card;

const Container = styled.View``;

const ImageBackground = styled.ImageBackground`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
`;

ImageBackground.defaultProps = {
    height: windowHeight - Constants.statusBarHeight - 75,
    width: windowWidth,
};

const NameContainer = styled.View`
    flex-direction: row;
    margin: 20px;
`;

const DescriptionContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    margin: 20px;
`;

const HeadingText = styled.Text`
    color: grey;
    font-weight: bold;
`;

const Text = styled.Text`
    color: white;
`;
