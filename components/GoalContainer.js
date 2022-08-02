import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import DeleteButton from "./DeleteBtn";

function GoalItem({ id, text = "Lrean React Native" }) {
  return (
    <GoalContainer>
      <DeleteButton id={id} />
      <Text
        style={{
          color: "#203198",
          fontWeight: "800",
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </GoalContainer>
  );
}

export const GoalContainer = styled(View)`
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  margin-top: 10px;
  position: relative;
  z-index: 1;
`;
export default GoalItem;
