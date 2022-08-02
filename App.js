import React from "react";
import AddButton from "./components/AddButton";
import ListGoalItems from "./components/ListGoalItems";
import ModelAddGoals from "./components/ModelAddGoals";
import { Container } from "./components/styled";
import { useModel } from "./store";

const App = () => {
  const setOpen = useModel((s) => s.setOpen);
  return (
    <Container>
      <AddButton onSubmit={() => setOpen()} />
      <ListGoalItems />
      <ModelAddGoals />
    </Container>
  );
};

export default App;
