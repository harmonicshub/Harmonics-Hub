import React from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { InfoCard } from "../components/InfoCard";
import { SectionHeader } from "../components/SectionHeader";
import { useContent } from "../context/ContentContext";
import { theme } from "../theme";
import { openLink } from "../utils";

export function ServicesScreen() {
  const { content, refreshing, refresh } = useContent();
  const { company, services } = content;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} tintColor={theme.colors.accent} />}
    >
      <SectionHeader
        eyebrow="Services"
        title="Creative, technical, and operational services shaped around business growth."
        body="We support brands from strategy through execution, with services designed to work together instead of in silos."
      />

      <View style={styles.cardStack}>
        {services.map((service, index) => (
          <InfoCard
            key={service.tag}
            tag={service.tag}
            title={service.title}
            body={service.body}
            accent={index % 2 === 0}
          />
        ))}
      </View>

      <ActionButton
        label="Request a Consultation"
        onPress={() => openLink(`${company.website}contactus.html`)}
      />
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
