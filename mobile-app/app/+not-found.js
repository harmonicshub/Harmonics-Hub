import React from "react";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../src/theme";

export default function NotFoundScreen() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.kicker}>Not Found</Text>
      <Text style={styles.title}>That screen does not exist in the app yet.</Text>
      <Text style={styles.body}>
        Use the main tabs to return to the core HARMONICS HUB experience.
      </Text>
      <Link href="/" asChild>
        <Pressable style={styles.buttonWrap}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: theme.colors.bg,
    gap: 14
  },
  kicker: {
    color: theme.colors.warm,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.8
  },
  title: {
    color: theme.colors.text,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "800"
  },
  body: {
    color: theme.colors.muted,
    fontSize: 15,
    lineHeight: 24
  },
  buttonWrap: {
    marginTop: 8,
    backgroundColor: theme.colors.accent,
    borderRadius: theme.radius.pill,
    paddingHorizontal: 18,
    paddingVertical: 14,
    alignItems: "center"
  },
  buttonText: {
    color: "#04222a",
    fontSize: 15,
    fontWeight: "800"
  }
});
