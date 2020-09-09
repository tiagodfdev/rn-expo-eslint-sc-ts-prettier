import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

function Home() {
  return (
    <StyledView>
      <Text>ploc</Text>
    </StyledView>
  );
}

const StyledView = styled.View`
  flex: 1;
  background-color: #bbf;
`;

export default Home;