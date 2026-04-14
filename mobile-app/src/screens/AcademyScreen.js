import React from "react";
import { StyleSheet, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { InfoCard } from "../components/InfoCard";
import { PillRow } from "../components/PillRow";
import { ScreenScroll } from "../components/ScreenScroll";
import { SectionHeader } from "../components/SectionHeader";
import { useContent } from "../context/ContentContext";
import { openLink } from "../utils";

export function AcademyScreen() {
  const { content, refreshing, refresh } = useContent();
  const { academyFormats, academyTracks, company } = content;

  return (
    <ScreenScroll refreshing={refreshing} onRefresh={refresh}>
      <SectionHeader
        eyebrow="Academy"
        title="Practical tech training tracks for learners, professionals, and teams."
        body="Our academy is built around employable skills, guided projects, mentor feedback, and business-relevant learning outcomes."
      />

      <PillRow items={["Live classes", "Project portfolio", "Mentor support", "Flexible cohorts"]} />

      <View style={styles.cardStack}>
        {academyTracks.map((track, index) => (
          <InfoCard
            key={track.title}
            tag={`Track ${String(index + 1).padStart(2, "0")}`}
            title={track.title}
            body={track.description}
          />
        ))}
      </View>

      <SectionHeader
        eyebrow="Training Formats"
        title="Learning options for individuals, schools, and organizations."
      />

      <View style={styles.cardStack}>
        {academyFormats.map((format, index) => (
          <InfoCard
            key={format.title}
            tag={index === 1 ? "Featured" : "Format"}
            title={format.title}
            body={`${format.subtitle}. ${format.detail}`}
            accent={index === 1}
          />
        ))}
      </View>

      <ActionButton
        label="Open Registration"
        onPress={() => openLink(`${company.website}academy-registration.html`)}
      />
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  cardStack: {
    gap: 14
  }
});
