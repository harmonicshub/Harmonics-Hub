import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { submitForm } from "../api";
import { ActionButton } from "../components/ActionButton";
import { Field } from "../components/Field";
import { PillRow } from "../components/PillRow";
import { ScreenScroll } from "../components/ScreenScroll";
import { SectionHeader } from "../components/SectionHeader";
import { SelectChipGroup } from "../components/SelectChipGroup";
import { useContent } from "../context/ContentContext";
import { theme } from "../theme";
import { openLink, sendEmail } from "../utils";

const initialInquiry = {
  firstname: "",
  lastname: "",
  email: "",
  mobilenumber: "",
  service: "",
  message: ""
};

const initialRegistration = {
  firstname: "",
  lastname: "",
  email: "",
  mobilenumber: "",
  course: "",
  level: "",
  format: "",
  cohort: "",
  message: ""
};

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactScreen() {
  const { content, refreshing, refresh } = useContent();
  const { academyOptions, company, contactServices } = content;
  const [mode, setMode] = useState("inquiry");
  const [sending, setSending] = useState(false);
  const [inquiry, setInquiry] = useState(initialInquiry);
  const [registration, setRegistration] = useState(initialRegistration);

  async function handleSubmitInquiry() {
    const required = [
      inquiry.firstname,
      inquiry.lastname,
      inquiry.email,
      inquiry.mobilenumber,
      inquiry.service,
      inquiry.message
    ];

    if (required.some((field) => !field.trim())) {
      Alert.alert("Missing fields", "Please complete all inquiry fields.");
      return;
    }

    if (!isEmailValid(inquiry.email)) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return;
    }

    setSending(true);
    try {
      const result = await submitForm({
        form_type: "inquiry",
        source_page: "mobile-app",
        company_website: "",
        ...inquiry
      });
      Alert.alert("Inquiry sent", result.message || "Your inquiry has been submitted successfully.");
      setInquiry(initialInquiry);
    } catch (error) {
      Alert.alert("Submission failed", error.message);
    } finally {
      setSending(false);
    }
  }

  async function handleSubmitRegistration() {
    const required = [
      registration.firstname,
      registration.lastname,
      registration.email,
      registration.mobilenumber,
      registration.course,
      registration.level,
      registration.format,
      registration.cohort,
      registration.message
    ];

    if (required.some((field) => !field.trim())) {
      Alert.alert("Missing fields", "Please complete all academy registration fields.");
      return;
    }

    if (!isEmailValid(registration.email)) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return;
    }

    setSending(true);
    try {
      const result = await submitForm({
        form_type: "academy-registration",
        source_page: "mobile-app",
        company_website: "",
        ...registration
      });
      Alert.alert(
        "Registration sent",
        result.message || "Your academy registration has been submitted successfully."
      );
      setRegistration(initialRegistration);
    } catch (error) {
      Alert.alert("Submission failed", error.message);
    } finally {
      setSending(false);
    }
  }

  return (
    <ScreenScroll refreshing={refreshing} onRefresh={refresh}>
      <SectionHeader
        eyebrow="Contact"
        title="Tell us what you want to build, improve, or support."
        body="This mobile screen keeps both business inquiry and academy registration pathways available from one place."
      />

      <View style={styles.contactPanel}>
        <Text style={styles.panelTitle}>Reach us directly</Text>
        <PillRow items={["Brand Identity", "Website Projects", "Custom Software", "Tech Training", "IT Support"]} />
        <Text style={styles.meta}>Email: {company.contactEmail}</Text>
        <Text style={styles.meta}>Response window: {company.responseWindow}</Text>
        <View style={styles.inlineActions}>
          <View style={styles.flexAction}>
            <ActionButton label="Email" variant="secondary" onPress={() => sendEmail(company.contactEmail)} />
          </View>
          <View style={styles.flexAction}>
            <ActionButton label="Open Website" variant="secondary" onPress={() => openLink(company.website)} />
          </View>
        </View>
      </View>

      <View style={styles.toggleRow}>
        <View style={styles.flexAction}>
          <ActionButton
            label="Business Inquiry"
            variant={mode === "inquiry" ? "primary" : "secondary"}
            onPress={() => setMode("inquiry")}
          />
        </View>
        <View style={styles.flexAction}>
          <ActionButton
            label="Academy Registration"
            variant={mode === "registration" ? "primary" : "secondary"}
            onPress={() => setMode("registration")}
          />
        </View>
      </View>

      {mode === "inquiry" ? (
        <View style={styles.formPanel}>
          <Field
            label="First name"
            value={inquiry.firstname}
            onChangeText={(value) => setInquiry((current) => ({ ...current, firstname: value }))}
            placeholder="Ada"
          />
          <Field
            label="Last name"
            value={inquiry.lastname}
            onChangeText={(value) => setInquiry((current) => ({ ...current, lastname: value }))}
            placeholder="Okafor"
          />
          <Field
            label="Email address"
            value={inquiry.email}
            onChangeText={(value) => setInquiry((current) => ({ ...current, email: value }))}
            placeholder="you@company.com"
            keyboardType="email-address"
          />
          <Field
            label="Mobile number"
            value={inquiry.mobilenumber}
            onChangeText={(value) => setInquiry((current) => ({ ...current, mobilenumber: value }))}
            placeholder="+234 800 000 0000"
            keyboardType="phone-pad"
          />
          <SelectChipGroup
            label="Service needed"
            value={inquiry.service}
            options={contactServices}
            onChange={(value) => setInquiry((current) => ({ ...current, service: value }))}
          />
          <Field
            label="Project details"
            value={inquiry.message}
            onChangeText={(value) => setInquiry((current) => ({ ...current, message: value }))}
            placeholder="Tell us about your business, goal, timeline, or support need."
            multiline
          />
          <ActionButton
            label={sending ? "Sending..." : "Send Inquiry"}
            onPress={handleSubmitInquiry}
            disabled={sending}
          />
        </View>
      ) : (
        <View style={styles.formPanel}>
          <Field
            label="First name"
            value={registration.firstname}
            onChangeText={(value) =>
              setRegistration((current) => ({ ...current, firstname: value }))
            }
            placeholder="Ada"
          />
          <Field
            label="Last name"
            value={registration.lastname}
            onChangeText={(value) =>
              setRegistration((current) => ({ ...current, lastname: value }))
            }
            placeholder="Okafor"
          />
          <Field
            label="Email address"
            value={registration.email}
            onChangeText={(value) =>
              setRegistration((current) => ({ ...current, email: value }))
            }
            placeholder="you@example.com"
            keyboardType="email-address"
          />
          <Field
            label="Mobile number"
            value={registration.mobilenumber}
            onChangeText={(value) =>
              setRegistration((current) => ({ ...current, mobilenumber: value }))
            }
            placeholder="+234 800 000 0000"
            keyboardType="phone-pad"
          />
          <SelectChipGroup
            label="Preferred course"
            value={registration.course}
            options={academyOptions.courses}
            onChange={(value) =>
              setRegistration((current) => ({ ...current, course: value }))
            }
          />
          <SelectChipGroup
            label="Experience level"
            value={registration.level}
            options={academyOptions.levels}
            onChange={(value) =>
              setRegistration((current) => ({ ...current, level: value }))
            }
          />
          <SelectChipGroup
            label="Learning format"
            value={registration.format}
            options={academyOptions.formats}
            onChange={(value) =>
              setRegistration((current) => ({ ...current, format: value }))
            }
          />
          <SelectChipGroup
            label="Preferred cohort"
            value={registration.cohort}
            options={academyOptions.cohorts}
            onChange={(value) =>
              setRegistration((current) => ({ ...current, cohort: value }))
            }
          />
          <Field
            label="Learning goals"
            value={registration.message}
            onChangeText={(value) =>
              setRegistration((current) => ({ ...current, message: value }))
            }
            placeholder="Tell us what you want to learn, build, or achieve."
            multiline
          />
          <ActionButton
            label={sending ? "Sending..." : "Submit Registration"}
            onPress={handleSubmitRegistration}
            disabled={sending}
          />
        </View>
      )}
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  contactPanel: {
    backgroundColor: theme.colors.panel,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.line,
    padding: theme.spacing.lg,
    gap: 14
  },
  panelTitle: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: "800"
  },
  meta: {
    color: theme.colors.muted,
    fontSize: 14,
    lineHeight: 22
  },
  inlineActions: {
    flexDirection: "row",
    gap: 12
  },
  toggleRow: {
    flexDirection: "row",
    gap: 12
  },
  flexAction: {
    flex: 1
  },
  formPanel: {
    backgroundColor: theme.colors.panelMuted,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.line,
    padding: theme.spacing.lg,
    gap: 16
  }
});
