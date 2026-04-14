import React from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { InfoCard } from "../components/InfoCard";
import { SectionHeader } from "../components/SectionHeader";
import { useContent } from "../context/ContentContext";
import { theme } from "../theme";
import { openLink } from "../utils";

export function ResourcesScreen() {
  const { content, refreshing, refresh } = useContent();
  const { resources } = content;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} tintColor={theme.colors.accent} />}
    >
      <SectionHeader
        eyebrow="Resources"
        title="Download planning assets and request support-ready packages."
        body="This mobile view keeps the lead magnets and service packages accessible without losing the website's conversion intent."
      />

      <View style={styles.cardStack}>
        {resources.map((item) => (
          <InfoCard
            key={item.title}
            tag={item.badge}
            title={item.title}
            body={item.description}
            cta="Open resource"
            onPress={() => openLink(item.url)}
            accent
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  content: {
    padding: 20,
    gap: 18,
    paddingBottom: 44
  },
  cardStack: {
    gap: 14
  }
});
