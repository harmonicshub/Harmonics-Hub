import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";

export function SectionHeader({ eyebrow, title, body }) {
  return (
    <View style={styles.wrap}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text style={styles.title}>{title}</Text>
      {body ? <Text style={styles.body}>{body}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 8
  },
  eyebrow: {
    color: theme.colors.accentDeep,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  title: {
    color: theme.colors.text,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "800"
  },
  body: {
    color: theme.colors.muted,
    fontSize: 15,
    lineHeight: 25
  }
});
