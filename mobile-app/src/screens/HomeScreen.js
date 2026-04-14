import React from "react";
import { Image, RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { InfoCard } from "../components/InfoCard";
import { PillRow } from "../components/PillRow";
import { SectionHeader } from "../components/SectionHeader";
import { useContent } from "../context/ContentContext";
import { theme } from "../theme";
import { openLink, sendEmail } from "../utils";

export function HomeScreen() {
  const { content, refreshing, refresh, isRemote } = useContent();
  const { company, resources, services, trustSignals } = content;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} tintColor={theme.colors.accent} />}
    >
      <View style={styles.hero}>
        <View style={styles.brandRow}>
          <Image
            source={{ uri: "https://harmonicshub.com/images/logo.png" }}
            style={styles.logo}
          />
          <View style={styles.brandText}>
            <Text style={styles.brandName}>{company.name}</Text>
            <Text style={styles.brandSub}>Build, Train, Support</Text>
          </View>
        </View>

        <SectionHeader eyebrow="Creative technology company" title={company.heroTitle} body={company.heroText} />
        <Text style={styles.liveMeta}>{isRemote ? "Live content connected" : "Using built-in fallback content"}</Text>

        <View style={styles.actionStack}>
          <ActionButton label="Visit Website" onPress={() => openLink(company.website)} />
          <ActionButton
            label="Email Our Team"
            variant="secondary"
            onPress={() => sendEmail(company.contactEmail)}
          />
        </View>
      </View>

      <View style={styles.section}>
        <SectionHeader
          eyebrow="Trust Signals"
          title="A mobile snapshot of what clients can expect."
          body="The same business positioning from the website, translated into a faster app format."
        />
        <View style={styles.cardStack}>
          {trustSignals.map((item) => (
            <InfoCard key={item.title} title={item.title} body={item.body} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <SectionHeader
          eyebrow="About Us"
          title={company.mission}
          body={company.about}
        />
        <PillRow
          items={[
            "Branding",
            "Software Projects",
            "Training Programs",
            "Operations Support"
          ]}
        />
      </View>

      <View style={styles.section}>
        <SectionHeader
          eyebrow="Core Capabilities"
          title="One partner for design, product, training, and support."
        />
        <View style={styles.cardStack}>
          {services.slice(0, 2).map((service) => (
            <InfoCard
              key={service.tag}
              tag={service.tag}
              title={service.title}
              body={service.body}
              accent
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <SectionHeader
          eyebrow="Resources"
          title="Useful downloads and support-ready packages."
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
            />
          ))}
        </View>
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
    gap: 28,
    paddingBottom: 44
  },
  hero: {
    gap: 22,
    padding: 22,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.panel,
    borderWidth: 1,
    borderColor: theme.colors.line,
    ...theme.shadows.card
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14
  },
  logo: {
    width: 62,
    height: 62,
    borderRadius: 20,
    backgroundColor: "#fff"
  },
  brandText: {
    gap: 4
  },
  brandName: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: "800"
  },
  brandSub: {
    color: theme.colors.accent,
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.6
  },
  liveMeta: {
    color: theme.colors.muted,
    fontSize: 13
  },
  actionStack: {
    gap: 12
  },
  section: {
    gap: 16
  },
  cardStack: {
    gap: 14
  }
});
