import React from "react";
import { Alert, Modal, Text, TextInput, View } from "react-native";
import { useModel, useStore } from "../store";
function ModelAddGoals() {
  const open = useModel((s) => s.open);
  const setOpen = useModel((s) => s.setOpen);
  const addGoal = useStore((s) => s.addGoal);
  const [goal, setGoal] = React.useState("");
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => {
        setOpen();
      }}
    >
      <ModelBg>
        <Text style={{ color: "white", fontSize: 30, textAlign: "center" }}>
          Hello 👋
        </Text>
        <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
          Please add you goal below
        </Text>
        <InputContainer>
          <TextInputStyled
            onChangeText={(e) => {
              setGoal(e);
            }}
          />
          <AddButton
            text="add Goal"
            p="0 10px"
            m="0"
            onSubmit={() => {
              if (goal.trim().length) {
                Alert.alert("You goal is Added successfully");
                setOpen();
                addGoal({ id: Math.random().toString(), text: goal });
              } else {
                Alert.alert(
                  "Please you need to fill your goal before submiting",
                );
              }
            }}
          />
        </InputContainer>
      </ModelBg>
    </Modal>
  );
}

import styled from "styled-components";
import AddButton from "./AddButton";
export const ModelBg = styled(View)`
  height: 100%;
  background-color: black;
  padding-top: 30px;
`;
export const InputContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50%;
  margin-left: 10px;
`;
export const TextInputStyled = styled(TextInput)`
  background-color: #fff;
  flex-grow: 1;

  padding: 5px;
`;

export default ModelAddGoals;
