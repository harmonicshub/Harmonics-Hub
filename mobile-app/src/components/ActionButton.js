import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { theme } from "../theme";

export function ActionButton({ label, onPress, variant = "primary", disabled = false }) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.base,
        variant === "secondary" ? styles.secondary : styles.primary,
        disabled ? styles.disabled : null
      ]}
    >
      <Text style={[styles.label, variant === "secondary" ? styles.secondaryLabel : null]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: theme.radius.pill,
    alignItems: "center",
    justifyContent: "center"
  },
  primary: {
    backgroundColor: theme.colors.accent
  },
  secondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: theme.colors.line
  },
  disabled: {
    opacity: 0.6
  },
  label: {
    fontSize: 15,
    fontWeight: "800",
    color: "#04222a"
  },
  secondaryLabel: {
    color: theme.colors.text
  }
});
