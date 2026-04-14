import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";

export function PillRow({ items }) {
  return (
    <View style={styles.row}>
      {items.map((item) => (
        <View key={item} style={styles.pill}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: theme.radius.pill,
    backgroundColor: "rgba(109, 242, 207, 0.12)",
    borderWidth: 1,
    borderColor: theme.colors.line
  },
  text: {
    color: theme.colors.text,
    fontSize: 13,
    fontWeight: "600"
  }
});
