import React from "react";
import { StyleSheet, View } from "react-native";
import { InfoCard } from "../components/InfoCard";
import { ScreenScroll } from "../components/ScreenScroll";
import { SectionHeader } from "../components/SectionHeader";
import { useContent } from "../context/ContentContext";
import { openLink } from "../utils";

export function ResourcesScreen() {
  const { content, refreshing, refresh } = useContent();
  const { resources } = content;

  return (
    <ScreenScroll refreshing={refreshing} onRefresh={refresh}>
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
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  cardStack: {
    gap: 14
  }
});
