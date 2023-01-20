import * as React from "react";
import { Image, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Splashscreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splashscreen}
      onPress={() => navigation.navigate("Homepage")}
    >
      <Pressable
        style={styles.abstractBankCardLogo1}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/abstract-bank-card-logo-1.png")}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  abstractBankCardLogo1: {
    position: "absolute",
    left: 26,
    top: 113,
    width: 308,
    height: 413,
  },
  splashscreen: {
    backgroundColor: Color.color,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Splashscreen;
