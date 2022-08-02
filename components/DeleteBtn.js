import React from "react";
import { Pressable, Text, View } from "react-native";
import styled from "styled-components/native";
import { useStore } from "../store";

export const GoalContainer = styled(View)`
  background-color: #4bdede;
  padding: 10px;
  border-radius: 6px;
  margin-top: 10px;
  position: relative;
  z-index: 1;
`;
const DeleteBtn = styled(Pressable)`
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 25px;
  border-radius: 100px;
  background-color: blue;
`;
const ViewStyled = styled(View)`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 2;
`;
function DeleteButton({ id }) {
  const removeItem = useStore((state) => state.removeItem);
  return (
    <ViewStyled>
      <DeleteBtn
        onPress={() => {
          removeItem(id);
        }}
      >
        {({ pressed }) => (
          <Text style={{ color: pressed ? "red" : "white", fontWeight: "700" }}>
            X
          </Text>
        )}
      </DeleteBtn>
    </ViewStyled>
  );
}

export default DeleteButton;
