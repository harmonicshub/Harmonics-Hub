import React from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { theme } from "../theme";

export function ScreenScroll({ children, refreshing, onRefresh, contentContainerStyle }) {
  return (
    <View style={styles.shell}>
      <View style={styles.glowTop} pointerEvents="none" />
      <View style={styles.glowSide} pointerEvents="none" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.content, contentContainerStyle]}
        refreshControl={
          <RefreshControl
            refreshing={Boolean(refreshing)}
            onRefresh={onRefresh}
            tintColor={theme.colors.accent}
          />
        }
      >
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: theme.colors.bg
  },
  scroll: {
    flex: 1
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 44,
    gap: 26
  },
  glowTop: {
    position: "absolute",
    top: -120,
    right: -60,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "rgba(109, 242, 207, 0.12)"
  },
  glowSide: {
    position: "absolute",
    top: 180,
    left: -90,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(255, 158, 79, 0.08)"
  }
});
