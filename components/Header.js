import React from "react";
import styled from "styled-components/native";

const Header = () => {
    return (
        <Container>
            <Text>Header</Text>
        </Container>
    );
};

export default Header;

const Container = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: teal;
`;

const Text = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;
