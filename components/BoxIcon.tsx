import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";

export type BoxIconProps = {
  name: typeof Ionicons.defaultProps.name;
  backgroundColor: string;
};

const BoxIcon = ({ name, backgroundColor }: BoxIconProps) => {
  return (
    <View style={{ backgroundColor, padding: 4, borderRadius: 6 }}>
      <Ionicons name={name} size={22} color="white" />
    </View>
  );
};

export default BoxIcon;

const styles = StyleSheet.create({});
