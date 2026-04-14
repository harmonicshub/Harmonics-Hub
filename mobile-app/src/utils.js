import { Alert, Linking } from "react-native";

export async function openLink(url) {
  try {
    const supported = await Linking.canOpenURL(url);
    if (!supported) {
      Alert.alert("Unable to open link", "This link could not be opened on the device.");
      return;
    }
    await Linking.openURL(url);
  } catch (error) {
    Alert.alert("Unable to open link", "Something went wrong while opening the link.");
  }
}

export async function sendEmail(email) {
  return openLink(`mailto:${email}`);
}
