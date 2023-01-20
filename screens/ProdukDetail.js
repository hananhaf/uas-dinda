import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ProdukDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.produkDetail}>
      <Image
        style={[styles.iconbackAlt, styles.iconbackPosition]}
        resizeMode="cover"
        source={require("../assets/iconbackalt.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("ProfileKasir")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Text style={styles.toko}>TOKO</Text>
      </View>
      <Pressable
        style={styles.iconbackPosition}
        onPress={() => navigation.navigate("ListProduk")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/iconbackalt1.png")}
        />
      </Pressable>
      <View style={styles.macchiatoParent}>
        <Text style={styles.macchiato}>Macchiato</Text>
        <Text style={[styles.description, styles.rp25000Typo]}>
          Description
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector5.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector6.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Image
          style={styles.wpflikeIcon}
          resizeMode="cover"
          source={require("../assets/wpflike.png")}
        />
        <Text style={styles.aMacchiato1}>
          A Macchiato 1 shots of espresso with 1 teaspoons of steamed milk and a
          little foam on top.
        </Text>
      </View>
      <ImageBackground
        style={styles.image12Icon}
        resizeMode="cover"
        source={require("../assets/image12.png")}
      />
      <Text style={[styles.rp25000, styles.rp25000Typo]}>Rp 25.000</Text>
      <Pressable
        style={[styles.rectangleGroup, styles.frameChildLayout]}
        onPress={() => navigation.navigate("Keranjang")}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={styles.buy}>Buy</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconbackPosition: {
    height: 18,
    width: 25,
    left: "50%",
    top: "50%",
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
  rp25000Typo: {
    color: Color.gray_500,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "69.83%",
    top: "23.75%",
    width: "5.57%",
    height: "6.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameChildLayout: {
    width: 149,
    height: 53,
    position: "absolute",
  },
  iconbackAlt: {
    marginTop: -301,
    marginLeft: -168.3,
  },
  groupChild: {
    height: "65.79%",
    bottom: "34.21%",
    borderColor: "#c3fffb",
    top: "0%",
    borderStyle: "solid",
    backgroundColor: Color.turquoise,
  },
  groupItem: {
    height: "43.42%",
    top: "56.58%",
    bottom: "0%",
    borderColor: "#68d7d0",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "5.28%",
    top: "23.68%",
    right: "88.47%",
    bottom: "56.58%",
    width: "6.25%",
    height: "19.74%",
    position: "absolute",
  },
  toko: {
    top: "19.74%",
    left: "17.22%",
    fontWeight: "500",
    textAlign: "center",
    color: Color.color,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleParent: {
    height: "11.88%",
    bottom: "88.13%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  icon1: {
    marginTop: -271,
    marginLeft: -167,
    height: "100%",
    width: "100%",
  },
  macchiato: {
    top: 110,
    fontSize: 25,
    fontFamily: FontFamily.allerta,
    color: Color.gray_400,
    width: 234,
    height: 53,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  description: {
    top: 173,
    left: 6,
    width: 186,
    height: 26,
  },
  vectorIcon: {
    right: "23.86%",
    left: "70.57%",
  },
  vectorIcon1: {
    right: "9.54%",
    left: "84.89%",
  },
  vectorIcon2: {
    right: "16.7%",
    left: "77.73%",
  },
  vectorIcon3: {
    right: "2.39%",
    left: "92.05%",
  },
  groupInner: {
    left: 275,
    width: 61,
    height: 74,
    top: 0,
    position: "absolute",
  },
  wpflikeIcon: {
    top: 14,
    left: 291,
    width: 30,
    height: 37,
    position: "absolute",
    overflow: "hidden",
  },
  aMacchiato1: {
    top: 210,
    left: 5,
    color: "rgba(10, 9, 11, 0.5)",
    width: 317,
    height: 132,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  macchiatoParent: {
    top: 263,
    left: 17,
    width: 332,
    height: 342,
    position: "absolute",
  },
  image12Icon: {
    top: 65,
    left: 12,
    width: 225,
    height: 258,
    position: "absolute",
  },
  rp25000: {
    top: 292,
    left: 209,
    width: 94,
    height: 35,
  },
  frameChild: {
    borderRadius: 10,
    backgroundColor: "#e0a86a",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    top: 0,
    left: 0,
    width: 149,
  },
  buy: {
    top: 15,
    left: 59,
    fontWeight: "600",
    textAlign: "left",
    color: Color.color,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleGroup: {
    top: 559,
    left: 200,
  },
  produkDetail: {
    backgroundColor: Color.color,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProdukDetail;
