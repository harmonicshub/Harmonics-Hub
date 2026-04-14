import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";

export function SelectChipGroup({ label, value, options, onChange }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {options.map((option) => {
          const selected = value === option;
          return (
            <Pressable
              key={option}
              onPress={() => onChange(option)}
              style={[styles.chip, selected ? styles.chipSelected : null]}
            >
              <Text style={[styles.chipText, selected ? styles.chipTextSelected : null]}>
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 10
  },
  label: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: "700"
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    borderColor: theme.colors.line,
    backgroundColor: theme.colors.panelMuted
  },
  chipSelected: {
    backgroundColor: theme.colors.accentDeep,
    borderColor: theme.colors.accentDeep
  },
  chipText: {
    color: theme.colors.text,
    fontSize: 13,
    fontWeight: "600"
  },
  chipTextSelected: {
    color: "#0b1820"
  }
});
