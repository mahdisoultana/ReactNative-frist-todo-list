import React from "react";
import { Button, View } from "react-native";
import styled from "styled-components/native";
import { useModel } from "../store";
function AddButton({
  text,
  m = "",
  p = "",
  onSubmit = () => {
    console.log("no handler passed");
  },
  ...rest
}) {
  const setOpen = useModel((s) => s.setOpen);

  return (
    <ButtonContainer m={m} p={p}>
      <Button
        title={text || "Add New Goal"}
        color="#243DC9"
        onPress={onSubmit}
        {...rest}
      />
    </ButtonContainer>
  );
}
export const ButtonContainer = styled(View)`
  border-bottom-width: 1px;
  border-bottom-color: white;
  border-bottom-style: solid;
  padding: ${(p) => p.p || "20px 0px"};
  margin: ${(p) => p.m || "20px 0px"};
`;

export default AddButton;
