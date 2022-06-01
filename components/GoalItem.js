import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    backgroundColor: "#4d5bc4",
    borderRadius: 8,
    marginVertical: 3,
  },
  goalText: {
    color: "white",
  },
});
