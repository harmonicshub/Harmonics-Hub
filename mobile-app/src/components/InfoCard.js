import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { theme } from "../theme";

export function InfoCard({ tag, title, body, cta, onPress, accent = false }) {
  return (
    <Pressable
      disabled={!onPress}
      onPress={onPress}
      style={[styles.card, accent ? styles.cardAccent : null]}
    >
      {tag ? <Text style={styles.tag}>{tag}</Text> : null}
      <Text style={styles.title}>{title}</Text>
      {body ? <Text style={styles.body}>{body}</Text> : null}
      {cta ? <Text style={styles.cta}>{cta}</Text> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.panel,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.line,
    padding: theme.spacing.lg,
    gap: 10,
    ...theme.shadows.card
  },
  cardAccent: {
    backgroundColor: theme.colors.panelAlt
  },
  tag: {
    color: theme.colors.accent,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.4
  },
  title: {
    color: theme.colors.text,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "800"
  },
  body: {
    color: theme.colors.muted,
    fontSize: 15,
    lineHeight: 24
  },
  cta: {
    color: theme.colors.accentDeep,
    fontSize: 14,
    fontWeight: "700"
  }
});
