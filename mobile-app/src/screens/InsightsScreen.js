import React from "react";
import { StyleSheet, View } from "react-native";
import { InfoCard } from "../components/InfoCard";
import { ScreenScroll } from "../components/ScreenScroll";
import { SectionHeader } from "../components/SectionHeader";
import { useContent } from "../context/ContentContext";
import { openLink } from "../utils";

export function InsightsScreen() {
  const { content, refreshing, refresh } = useContent();
  const { insights } = content;

  return (
    <ScreenScroll refreshing={refreshing} onRefresh={refresh}>
      <SectionHeader
        eyebrow="Insights"
        title="Ideas, frameworks, and practical lessons from our work in tech."
        body="This section mirrors the website article hub with mobile-friendly previews and direct links to the full articles."
      />

      <View style={styles.cardStack}>
        {insights.map((article) => (
          <InfoCard
            key={article.title}
            tag={article.category}
            title={article.title}
            body={article.summary}
            cta="Read article"
            onPress={() => openLink(article.url)}
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
