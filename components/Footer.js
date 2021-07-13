import React from "react";
import styled from "styled-components/native";

const Footer = () => {
    return (
        <Container>
            <Text>Footer</Text>
        </Container>
    );
};

const Container = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: red;
`;

const Text = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;

export default Footer;
