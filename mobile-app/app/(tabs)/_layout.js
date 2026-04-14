import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "../../src/theme";

const iconMap = {
  index: "home-outline",
  services: "grid-outline",
  academy: "school-outline",
  insights: "newspaper-outline",
  resources: "folder-open-outline",
  contact: "chatbox-ellipses-outline"
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.accent,
        tabBarInactiveTintColor: theme.colors.muted,
        tabBarStyle: {
          backgroundColor: "#081b25",
          borderTopColor: theme.colors.line,
          height: 72,
          paddingTop: 8,
          paddingBottom: 10
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "700"
        },
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name={iconMap[route.name] || "ellipse-outline"}
            color={color}
            size={size}
          />
        )
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="services" options={{ title: "Services" }} />
      <Tabs.Screen name="academy" options={{ title: "Academy" }} />
      <Tabs.Screen name="insights" options={{ title: "Insights" }} />
      <Tabs.Screen name="resources" options={{ title: "Resources" }} />
      <Tabs.Screen name="contact" options={{ title: "Contact" }} />
    </Tabs>
  );
}
