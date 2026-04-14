import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";

export function InfoCard({ tag, title, body, cta, onPress, accent = false }) {
  return (
    <Pressable
      android_ripple={{ color: "rgba(255,255,255,0.06)" }}
      disabled={!onPress}
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        accent ? styles.cardAccent : null,
        pressed ? styles.cardPressed : null
      ]}
    >
      <View style={styles.rule} />
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
    gap: 12,
    ...theme.shadows.card
  },
  cardAccent: {
    backgroundColor: theme.colors.panelAlt
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.995 }]
  },
  rule: {
    width: 42,
    height: 4,
    borderRadius: 999,
    backgroundColor: theme.colors.accent
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
    fontSize: 21,
    lineHeight: 29,
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
