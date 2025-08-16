import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

export default function Button({ children, onPress, mode, style }) {
  return (
    <View style={[styles.outerContainer + style]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          mode === "flat" && styles.flat, // flat variant
          pressed && styles.pressed,
        ]}
        android_ripple={{ color: GlobalStyles.colors.primary200 }}
      >
        <Text
          style={[
            styles.text,
            mode === "flat" && styles.flatText, // flat variant text
          ]}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 8,
    overflow: "hidden",
    margin: 6,
  },
  button: {
    backgroundColor: GlobalStyles.colors.primary500,
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  flat: {
    backgroundColor: "transparent",
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  flatText: {
    color: GlobalStyles.colors.primary500,
  },
  pressed: {
    opacity: 0.85,
  },
});
