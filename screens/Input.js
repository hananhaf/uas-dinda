import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Input = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.input}>
      <View style={[styles.inputInner, styles.inputInnerLayout]}>
        <View style={[styles.btnPrimaryChildPosition, styles.inputInnerLayout]}>
          <Text style={styles.informasiBisnis}>Informasi Bisnis</Text>
          <Text style={[styles.isiInformasiBisnis, styles.bisnisTypo]}>
            Isi informasi bisnis anda
          </Text>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.inputParent, styles.inputLayout1]}>
          <View style={[styles.input1, styles.inputLayout]}>
            <View style={[styles.inputChild, styles.inputLayout]} />
          </View>
          <Text style={[styles.namaBisnis, styles.bisnisTypo]}>
            Nama Bisnis
          </Text>
        </View>
        <View style={[styles.inputGroup, styles.inputLayout1]}>
          <View style={[styles.input1, styles.inputLayout]}>
            <View style={[styles.inputChild, styles.inputLayout]} />
          </View>
          <Text style={[styles.namaBisnis, styles.bisnisTypo]}>
            Jenis Bisnis
          </Text>
        </View>
        <View style={[styles.inputContainer, styles.inputLayout1]}>
          <View style={[styles.input1, styles.inputLayout]}>
            <View style={[styles.inputChild, styles.inputLayout]} />
          </View>
          <Text style={[styles.namaBisnis, styles.bisnisTypo]}>
            Lokasi Bisnis
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.btnPrimary, styles.btnLayout]}
        onPress={() => navigation.navigate("TambahProduk")}
      >
        <View
          style={[
            styles.btnPrimaryChild,
            styles.btnLayout,
            styles.btnPrimaryChildPosition,
          ]}
        />
        <Text style={styles.lanjut}>Lanjut</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputInnerLayout: {
    height: 45,
    width: 217,
    position: "absolute",
  },
  bisnisTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  inputLayout1: {
    height: 53,
    width: 319,
    left: 0,
    position: "absolute",
  },
  inputLayout: {
    height: 35,
    width: 319,
    left: 0,
    position: "absolute",
  },
  btnLayout: {
    width: 254,
    height: 35,
    position: "absolute",
  },
  btnPrimaryChildPosition: {
    left: 0,
    top: 0,
  },
  informasiBisnis: {
    fontSize: FontSize.size_xl,
    height: 36,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppins,
    left: 0,
    top: 0,
    width: 217,
    position: "absolute",
  },
  isiInformasiBisnis: {
    top: 27,
    color: Color.black,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppins,
    left: 0,
  },
  inputInner: {
    top: 38,
    left: 37,
  },
  inputChild: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.gray_200,
    top: 0,
  },
  input1: {
    top: 17,
  },
  namaBisnis: {
    left: 16,
    fontFamily: FontFamily.inter,
    color: Color.gray_300,
    top: 0,
  },
  inputParent: {
    top: 0,
  },
  inputGroup: {
    top: 63,
  },
  inputContainer: {
    top: 126,
  },
  groupParent: {
    top: 141,
    left: 21,
    height: 179,
    width: 319,
    position: "absolute",
  },
  btnPrimaryChild: {
    borderRadius: Border.br_md,
    backgroundColor: Color.teal_100,
  },
  lanjut: {
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
    top: 501,
    left: 55,
  },
  input: {
    backgroundColor: Color.color,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Input;
