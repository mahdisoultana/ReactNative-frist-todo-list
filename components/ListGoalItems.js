import React from "react";
import { FlatList } from "react-native";
import { useStore } from "../store";
import GoalItem from "./GoalContainer";

function ListGoalItems() {
  const data = useStore((state) => state.data) || [];
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <GoalItem {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ListGoalItems;
