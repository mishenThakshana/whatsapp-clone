import { View, StyleSheet, Image, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const Welcome = () => {
  const openLink = () => Linking.openURL("https://ribluma.com");

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/welcome.png")} style={styles.welcomeImg} />
      <Text style={styles.headline}>Welcome to WhatsApp</Text>
      <Text style={styles.description}>
        Read our{" "}
        <Text style={styles.link} onPress={openLink}>
          Privacy Policy
        </Text>
        . {`Tap "Agree and continue" to accept the `}
        <Text style={styles.link} onPress={openLink}>
          Terms of Service
        </Text>
        .
      </Text>

      <Link href={`/otp`} replace asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Agree & Continue</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcomeImg: {
    width: "100%",
    height: 300,
    marginBottom: 80,
  },
  headline: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 80,
    color: Colors.gray,
  },
  link: {
    color: Colors.primary,
  },
  btn: {
    width: "100%",
    alignItems: "center",
  },
  btnTxt: {
    fontSize: 22,
    color: Colors.primary,
    fontWeight: "bold",
  },
});
