import * as React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Pressable
        style={styles.btnPrimary}
        onPress={() => navigation.navigate("Input")}
      >
        <View style={[styles.btnPrimaryChild, styles.inputChildPosition]} />
        <Text style={styles.masuk}>Masuk</Text>
      </Pressable>
      <View style={[styles.groupParent, styles.inputLayout1]}>
        <View style={[styles.inputParent, styles.inputLayout]}>
          <View
            style={[
              styles.input,
              styles.inputLayout1,
              styles.inputChildPosition,
            ]}
          >
            <View
              style={[
                styles.inputChild,
                styles.inputLayout1,
                styles.inputChildPosition,
              ]}
            />
          </View>
          <Text style={styles.email}>Email</Text>
        </View>
        <View style={[styles.inputGroup, styles.inputLayout]}>
          <View
            style={[
              styles.input,
              styles.inputLayout1,
              styles.inputChildPosition,
            ]}
          >
            <View
              style={[
                styles.inputChild,
                styles.inputLayout1,
                styles.inputChildPosition,
              ]}
            />
          </View>
          <Text style={styles.email}>Password</Text>
        </View>
      </View>
      <View style={styles.selamatDatangParent}>
        <Text style={[styles.selamatDatang, styles.selamatDatangTypo]}>
          Selamat Datang
        </Text>
        <Text style={[styles.masukkanEmailAnda, styles.selamatDatangTypo]}>
          Masukkan email anda
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputChildPosition: {
    left: 0,
    height: 35,
  },
  inputLayout1: {
    width: 319,
    position: "absolute",
  },
  inputLayout: {
    height: 53,
    width: 319,
    left: 0,
    position: "absolute",
  },
  selamatDatangTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: 0,
    position: "absolute",
  },
  btnPrimaryChild: {
    borderRadius: Border.br_md,
    backgroundColor: Color.teal_100,
    top: 0,
    width: 254,
    left: 0,
    position: "absolute",
  },
  masuk: {
    top: 9,
    left: 14,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    color: Color.color,
    textAlign: "center",
    width: 227,
    height: 17,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  btnPrimary: {
    top: 506,
    left: 53,
    height: 35,
    width: 254,
    position: "absolute",
  },
  inputChild: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.gray_200,
    top: 0,
  },
  input: {
    top: 17,
  },
  email: {
    left: 16,
    fontFamily: FontFamily.inter,
    color: Color.gray_300,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  inputParent: {
    top: 0,
  },
  inputGroup: {
    top: 63,
  },
  groupParent: {
    top: 139,
    left: 21,
    height: 116,
  },
  selamatDatang: {
    fontSize: FontSize.size_xl,
    height: 36,
    width: 217,
    top: 0,
  },
  masukkanEmailAnda: {
    top: 27,
    fontSize: FontSize.size_xs,
    color: Color.black,
  },
  selamatDatangParent: {
    top: 36,
    left: 37,
    height: 45,
    width: 217,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.color,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Login;
