import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

function Home() {
  return (
    <Container>
      <Text>Hello World</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #bbf;
  align-items: center;
  justify-content: center;
`;

export default Home;
