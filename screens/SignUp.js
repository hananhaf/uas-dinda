import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signup}>
      <View style={styles.groupParent}>
        <View style={[styles.inputParent, styles.groupLayout]}>
          <View style={[styles.input, styles.inputLayout]}>
            <View style={[styles.inputChild, styles.inputLayout]} />
          </View>
          <Text style={[styles.namaLengkap, styles.namaLengkapTypo]}>
            Nama Lengkap
          </Text>
        </View>
        <View style={[styles.inputGroup, styles.groupLayout]}>
          <View style={[styles.input, styles.inputLayout]}>
            <View style={[styles.inputChild, styles.inputLayout]} />
          </View>
          <Text style={[styles.namaLengkap, styles.namaLengkapTypo]}>
            Email
          </Text>
        </View>
        <View style={[styles.inputContainer, styles.groupLayout]}>
          <View style={[styles.input, styles.inputLayout]}>
            <View style={[styles.inputChild, styles.inputLayout]} />
          </View>
          <Text style={[styles.namaLengkap, styles.namaLengkapTypo]}>
            No. telepon
          </Text>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.input, styles.inputLayout]}>
            <View style={[styles.inputChild, styles.inputLayout]} />
          </View>
          <Text style={[styles.namaLengkap, styles.namaLengkapTypo]}>
            Password
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.btnPrimary, styles.btnLayout]}
        onPress={() => navigation.navigate("Input")}
      >
        <View style={[styles.btnPrimaryChild, styles.btnLayout]} />
        <Text style={[styles.buatAkun, styles.akunTypo, styles.buatAkunTypo]}>
          Buat Akun
        </Text>
      </Pressable>
      <Pressable style={styles.suahPunyaAkunKasirKuParent}>
        <Text style={[styles.suahPunyaAkun, styles.akunClr, styles.akunTypo]}>
          suah punya akun kasir KU ?
        </Text>
        <Pressable
          style={styles.masukDiSiniContainer}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={[styles.masukDiSini, styles.akunTypo, styles.buatAkunTypo]}
          >
            masuk di sini
          </Text>
        </Pressable>
      </Pressable>
      <View style={[styles.daftarAkunParent, styles.daftarLayout]}>
        <Text style={[styles.daftarAkun, styles.daftarLayout, styles.akunClr]}>
          Daftar Akun
        </Text>
        <Text
          style={[
            styles.lengkapiDataDiri,
            styles.akunClr,
            styles.namaLengkapTypo,
          ]}
        >
          Lengkapi data diri dibawah ini
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 53,
    left: 0,
    width: 319,
    position: "absolute",
  },
  inputLayout: {
    height: 35,
    left: 0,
    width: 319,
    position: "absolute",
  },
  namaLengkapTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  btnLayout: {
    width: 254,
    height: 35,
    position: "absolute",
  },
  akunTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  buatAkunTypo: {
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  akunClr: {
    color: Color.black,
    fontFamily: FontFamily.poppins,
    left: 0,
  },
  daftarLayout: {
    width: 217,
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
  namaLengkap: {
    left: 16,
    fontFamily: FontFamily.inter,
    color: Color.gray_300,
    textAlign: "left",
    top: 0,
  },
  inputParent: {
    top: 0,
  },
  inputGroup: {
    top: 66,
  },
  inputContainer: {
    top: 132,
  },
  groupView: {
    top: 198,
  },
  groupParent: {
    top: 142,
    left: 21,
    height: 251,
    width: 319,
    position: "absolute",
  },
  btnPrimaryChild: {
    borderRadius: Border.br_md,
    backgroundColor: Color.teal_100,
    left: 0,
    width: 254,
    top: 0,
  },
  buatAkun: {
    top: 9,
    left: 14,
    fontWeight: "500",
    color: Color.color,
    width: 227,
    height: 17,
    position: "absolute",
  },
  btnPrimary: {
    top: 506,
    left: 53,
  },
  suahPunyaAkun: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
    color: Color.black,
    top: 0,
    position: "absolute",
  },
  masukDiSini: {
    color: Color.teal_200,
  },
  masukDiSiniContainer: {
    left: 45,
    top: 29,
    position: "absolute",
  },
  suahPunyaAkunKasirKuParent: {
    top: 576,
    left: 84,
    width: 191,
    height: 50,
    position: "absolute",
  },
  daftarAkun: {
    fontSize: FontSize.size_xl,
    height: 36,
    textAlign: "left",
    top: 0,
  },
  lengkapiDataDiri: {
    top: 27,
    textAlign: "left",
  },
  daftarAkunParent: {
    top: 35,
    left: 37,
    height: 45,
  },
  signup: {
    backgroundColor: Color.color,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default SignUp;
