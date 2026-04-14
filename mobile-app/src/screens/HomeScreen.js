import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { InfoCard } from "../components/InfoCard";
import { PillRow } from "../components/PillRow";
import { ScreenScroll } from "../components/ScreenScroll";
import { SectionHeader } from "../components/SectionHeader";
import { useContent } from "../context/ContentContext";
import { theme } from "../theme";
import { openLink, sendEmail } from "../utils";

export function HomeScreen() {
  const { content, refreshing, refresh, isRemote } = useContent();
  const { company, resources, services, trustSignals } = content;

  return (
    <ScreenScroll refreshing={refreshing} onRefresh={refresh}>
      <View style={styles.hero}>
        <View style={styles.heroGlow} />
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
        <View style={styles.livePill}>
          <Text style={styles.liveMeta}>{isRemote ? "Live content connected" : "Using built-in fallback content"}</Text>
        </View>

        <View style={styles.actionStack}>
          <ActionButton label="Visit Website" onPress={() => openLink(company.website)} />
          <ActionButton
            label="Email Our Team"
            variant="secondary"
            onPress={() => sendEmail(company.contactEmail)}
          />
        </View>

        <View style={styles.heroBand}>
          {trustSignals.map((item) => (
            <View key={item.title} style={styles.heroBandItem}>
              <Text style={styles.heroBandTitle}>{item.title}</Text>
              <Text style={styles.heroBandText}>{item.body}</Text>
            </View>
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
          body="This first-pass app keeps the brand promise tight and action-focused on mobile."
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
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  hero: {
    gap: 22,
    padding: 22,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.poster,
    borderWidth: 1,
    borderColor: theme.colors.line,
    overflow: "hidden",
    ...theme.shadows.card
  },
  heroGlow: {
    position: "absolute",
    top: -40,
    right: -30,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(109, 242, 207, 0.14)"
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
  livePill: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: theme.radius.pill,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderWidth: 1,
    borderColor: theme.colors.line
  },
  liveMeta: {
    color: theme.colors.muted,
    fontSize: 12,
    fontWeight: "700"
  },
  actionStack: {
    gap: 12
  },
  heroBand: {
    gap: 14,
    paddingTop: 8
  },
  heroBandItem: {
    gap: 6,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.06)"
  },
  heroBandTitle: {
    color: theme.colors.text,
    fontSize: 15,
    fontWeight: "800"
  },
  heroBandText: {
    color: theme.colors.muted,
    fontSize: 14,
    lineHeight: 22
  },
  section: {
    gap: 16
  },
  cardStack: {
    gap: 14
  }
});
