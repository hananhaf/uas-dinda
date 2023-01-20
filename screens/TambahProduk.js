import * as React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TambahProduk = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tambahproduk}>
      <View
        style={[
          styles.tambahprodukInner,
          styles.groupPosition1,
          styles.rectangleGroupLayout,
        ]}
      >
        <View
          style={[
            styles.groupWrapper,
            styles.groupLayout,
            styles.groupPosition1,
          ]}
        >
          <View
            style={[
              styles.groupWrapper,
              styles.groupLayout,
              styles.groupPosition1,
            ]}
          >
            <View
              style={[
                styles.groupChild,
                styles.groupLayout,
                styles.groupPosition1,
              ]}
            />
            <Image
              style={[styles.frameIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
            <Text style={[styles.order, styles.orderFlexBox]}>ORDER</Text>
            <Text style={[styles.profile, styles.profileTypo]}>PROFILE</Text>
            <Text
              style={[
                styles.history,
                styles.vectorPosition,
                styles.profileTypo,
              ]}
            >
              History
            </Text>
            <Pressable
              style={[styles.vector, styles.vectorPosition]}
              onPress={() => navigation.navigate("History")}
            >
              <Image
                style={[styles.iconLayout, styles.groupLayout]}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
            </Pressable>
            <Pressable
              style={styles.vector1}
              onPress={() => navigation.navigate("ProfileKasir")}
            >
              <Image
                style={styles.groupLayout}
                resizeMode="cover"
                source={require("../assets/vector1.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.rectangleGroup,
          styles.groupPosition1,
          styles.rectangleGroupLayout,
        ]}
      >
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Pressable
          style={[styles.vector2, styles.vector2Position]}
          onPress={() => navigation.navigate("ProfileKasir")}
        >
          <Image
            style={styles.groupLayout}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Text style={[styles.toko, styles.tambahTypo, styles.tokoTypo]}>
          TOKO
        </Text>
        <Text style={[styles.tambahProduk, styles.tambahTypo, styles.tokoTypo]}>
          Tambah Produk
        </Text>
        <Image
          style={[
            styles.iconoutlineshoppingCart,
            styles.vector2Position,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconoutlineshoppingcart.png")}
        />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
      </View>
      <Image
        style={styles.whatsappImage20230111At1}
        resizeMode="cover"
        source={require("../assets/whatsapp-image-20230111-at-1021-1.png")}
      />
      <View style={[styles.groupParent, styles.inputGroupLayout]}>
        <View style={[styles.inputParent, styles.inputGroupLayout]}>
          <View style={[styles.input, styles.inputLayout]}>
            <View style={[styles.inputChild, styles.inputLayout]} />
          </View>
          <Text style={[styles.namaProduk, styles.orderFlexBox]}>
            Nama Produk
          </Text>
        </View>
        <View style={[styles.inputGroup, styles.inputGroupLayout]}>
          <View style={[styles.input, styles.inputLayout]}>
            <View style={[styles.inputChild, styles.inputLayout]} />
          </View>
          <Text style={[styles.namaProduk, styles.orderFlexBox]}>
            Harga Bisnis
          </Text>
        </View>
        <View style={[styles.inputContainer, styles.inputGroupLayout]}>
          <View style={[styles.input, styles.inputLayout]}>
            <View style={[styles.inputChild, styles.inputLayout]} />
          </View>
          <Text style={[styles.namaProduk, styles.orderFlexBox]}>
            Jenis Pruduk
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.btnPrimary, styles.btnLayout]}
        onPress={() => navigation.navigate("ListProduk")}
      >
        <View style={[styles.btnPrimaryChild, styles.btnLayout]} />
        <Text style={[styles.tambah, styles.tambahTypo]}>Tambah</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition1: {
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  rectangleGroupLayout: {
    width: "100%",
    right: "0%",
  },
  groupLayout: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  orderFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  profileTypo: {
    opacity: 0.5,
    textAlign: "left",
    color: Color.color,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
    height: "8.37%",
  },
  vectorPosition: {
    left: "78.33%",
    position: "absolute",
  },
  groupPosition: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.turquoise,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  vector2Position: {
    bottom: "56.58%",
    position: "absolute",
  },
  tambahTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    color: Color.color,
    position: "absolute",
  },
  tokoTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  inputGroupLayout: {
    width: 319,
    position: "absolute",
  },
  inputLayout: {
    height: 35,
    left: 0,
    width: 319,
    position: "absolute",
  },
  btnLayout: {
    width: 254,
    height: 35,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.teal_100,
    top: "0%",
    bottom: "0%",
  },
  frameIcon: {
    width: "7.85%",
    top: "20.37%",
    right: "47.15%",
    bottom: "24.98%",
    left: "45%",
    height: "54.65%",
    position: "absolute",
  },
  order: {
    left: "45.56%",
    color: Color.color,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
    height: "8.37%",
    textAlign: "left",
    top: "79.63%",
    width: "13.22%",
  },
  profile: {
    width: "13.73%",
    left: "13.06%",
    top: "79.63%",
    opacity: 0.5,
    position: "absolute",
  },
  history: {
    top: "75.93%",
    opacity: 0.5,
    width: "13.22%",
    left: "78.33%",
  },
  vector: {
    top: "14.81%",
    right: "14.1%",
    bottom: "30.53%",
    width: "7.56%",
    height: "54.65%",
  },
  vector1: {
    left: "13.61%",
    top: "25.93%",
    right: "79.99%",
    bottom: "26.87%",
    width: "6.4%",
    height: "47.2%",
    position: "absolute",
  },
  groupWrapper: {
    top: "0%",
    bottom: "0%",
  },
  tambahprodukInner: {
    height: "8.44%",
    top: "91.56%",
    bottom: "0%",
  },
  groupItem: {
    height: "65.79%",
    bottom: "34.21%",
    borderColor: "#c3fffb",
    top: "0%",
  },
  groupInner: {
    height: "43.42%",
    top: "56.58%",
    borderColor: "#68d7d0",
    bottom: "0%",
  },
  vector2: {
    left: "5.28%",
    top: "23.68%",
    right: "88.47%",
    width: "6.25%",
    height: "19.74%",
  },
  toko: {
    top: "19.74%",
    left: "17.22%",
  },
  tambahProduk: {
    top: "63.16%",
    left: "5.56%",
  },
  iconoutlineshoppingCart: {
    height: "31.58%",
    width: "6.67%",
    top: "11.84%",
    right: "5.56%",
    left: "87.78%",
  },
  groupIcon: {
    height: "17.11%",
    width: "3.61%",
    top: "69.74%",
    right: "3.33%",
    bottom: "13.16%",
    left: "93.06%",
    position: "absolute",
  },
  rectangleGroup: {
    height: "11.88%",
    bottom: "88.13%",
    top: "0%",
  },
  whatsappImage20230111At1: {
    top: 114,
    left: 142,
    width: 75,
    height: 53,
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
  namaProduk: {
    left: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.inter,
    color: Color.gray_300,
    top: 0,
  },
  inputParent: {
    left: 0,
    top: 0,
    height: 53,
  },
  inputGroup: {
    top: 63,
    left: 0,
    height: 53,
  },
  inputContainer: {
    top: 126,
    left: 0,
    height: 53,
  },
  groupParent: {
    top: 178,
    left: 20,
    height: 179,
  },
  btnPrimaryChild: {
    borderRadius: Border.br_md,
    left: 0,
    top: 0,
    backgroundColor: Color.teal_100,
  },
  tambah: {
    top: 9,
    left: 14,
    fontSize: FontSize.size_sm,
    width: 227,
    height: 17,
  },
  btnPrimary: {
    top: 407,
    left: 52,
  },
  tambahproduk: {
    backgroundColor: Color.color,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default TambahProduk;
