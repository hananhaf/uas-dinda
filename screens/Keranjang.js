import * as React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Keranjang = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.keranjang}>
      <View style={styles.keranjangInner}>
        <View style={[styles.groupChildPosition, styles.groupPosition]}>
          <View style={styles.groupPosition}>
            <View
              style={[
                styles.groupChild,
                styles.groupChildPosition,
                styles.groupPosition,
              ]}
            />
            <Pressable
              style={styles.frame}
              onPress={() => navigation.navigate("ListProduk")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
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
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
            </Pressable>
            <Pressable
              style={styles.vector1}
              onPress={() => navigation.navigate("ProfileKasir")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/vector1.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.keranjangChild,
          styles.keranjangLayout,
          styles.groupChildPosition,
        ]}
      />
      <Pressable
        style={styles.vector2}
        onPress={() => navigation.navigate("ProfileKasir")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Text style={[styles.toko, styles.tokoTypo]}>TOKO</Text>
      <Text style={[styles.menu, styles.tokoTypo]}>MENU</Text>
      <View style={[styles.keranjangItem, styles.keranjangLayout]} />
      <Text style={[styles.order1, styles.textTypo, styles.orderFlexBox]}>
        Order
      </Text>
      <Text style={styles.macchiato}>Macchiato</Text>
      <Text style={styles.rp25000}>Rp 25.000</Text>
      <View style={[styles.groupContainer, styles.groupFlexBox]}>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group18.png")}
        />
      </View>
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group19.png")}
      />
      <Text style={[styles.text, styles.textClr, styles.textTypo]}>1</Text>
      <Image
        style={styles.image12Icon}
        resizeMode="cover"
        source={require("../assets/image-121.png")}
      />
      <Text style={[styles.milkshake, styles.rp20000Typo]}>Milkshake</Text>
      <Text style={[styles.rp20000, styles.rp20000Typo]}>Rp 20.000</Text>
      <View style={[styles.groupFrame, styles.groupFlexBox]}>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group18.png")}
        />
      </View>
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group19.png")}
      />
      <Text style={[styles.text1, styles.textClr, styles.textTypo]}>1</Text>
      <View style={styles.totalParent}>
        <Text style={[styles.total, styles.totalPosition, styles.textClr]}>
          TOTAL
        </Text>
        <Text style={[styles.rp45000, styles.textClr]}>Rp 45.000</Text>
      </View>
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Pressable
        style={[styles.btnPrimary, styles.btnLayout]}
        onPress={() => navigation.navigate("PrintNota")}
      >
        <View
          style={[
            styles.btnPrimaryChild,
            styles.btnLayout,
            styles.totalPosition,
          ]}
        />
        <Text style={[styles.bayar, styles.tokoTypo]}>BAYAR</Text>
      </Pressable>
      <Image
        style={styles.image3Icon}
        resizeMode="cover"
        source={require("../assets/image-32.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChildPosition: {
    top: "0%",
    left: "0%",
    right: "0%",
  },
  orderFlexBox: {
    textAlign: "left",
    color: Color.color,
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
  keranjangLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.turquoise,
    position: "absolute",
    width: "100%",
  },
  tokoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    color: Color.color,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.nunito,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  groupFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_lg,
    flexDirection: "row",
    width: 30,
    backgroundColor: Color.beige,
    borderRadius: Border.br_xs,
    height: 30,
    position: "absolute",
  },
  groupIconLayout: {
    width: "3.61%",
    height: "2.03%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textClr: {
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  rp20000Typo: {
    left: 124,
    color: Color.gray_500,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    textAlign: "left",
    position: "absolute",
  },
  totalPosition: {
    top: 0,
    left: 0,
  },
  btnLayout: {
    height: 35,
    width: 254,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.teal_100,
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frame: {
    left: "45%",
    top: "20.37%",
    right: "47.15%",
    bottom: "24.98%",
    width: "7.85%",
    height: "54.65%",
    position: "absolute",
  },
  order: {
    left: "45.56%",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
    height: "8.37%",
    textAlign: "left",
    color: Color.color,
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
    top: "77.78%",
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
  keranjangInner: {
    height: "8.44%",
    top: "91.56%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  keranjangChild: {
    height: "7.81%",
    bottom: "92.19%",
    borderColor: "#c3fffb",
  },
  vector2: {
    left: "5.28%",
    top: "2.81%",
    right: "88.47%",
    bottom: "94.84%",
    width: "6.25%",
    height: "2.34%",
    position: "absolute",
  },
  toko: {
    top: "2.34%",
    left: "17.22%",
    fontSize: FontSize.size_base,
  },
  menu: {
    top: "7.34%",
    left: "4.44%",
    fontSize: FontSize.size_base,
  },
  keranjangItem: {
    height: "5.16%",
    top: "7.81%",
    right: "-0.28%",
    bottom: "87.03%",
    left: "0.28%",
    borderColor: "#68d7d0",
  },
  order1: {
    top: 49,
    left: 16,
    letterSpacing: 0.4,
    lineHeight: 32,
  },
  macchiato: {
    top: 196,
    fontFamily: FontFamily.allerta,
    color: Color.gray_400,
    fontSize: FontSize.size_xl,
    left: 113,
    textAlign: "left",
    position: "absolute",
  },
  rp25000: {
    top: 222,
    color: Color.gray_500,
    left: 113,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  groupIcon: {
    width: 13,
    height: 2,
  },
  groupContainer: {
    top: 209,
    left: 251,
  },
  groupIcon1: {
    top: "33.98%",
    right: "7.92%",
    bottom: "63.98%",
    left: "88.47%",
  },
  text: {
    top: 212,
    left: 290,
  },
  image12Icon: {
    top: 145,
    width: 120,
    height: 120,
    left: 0,
    position: "absolute",
  },
  milkshake: {
    top: 305,
    fontSize: FontSize.size_xl,
  },
  rp20000: {
    top: 332,
    fontSize: FontSize.size_base,
  },
  groupFrame: {
    top: 317,
    left: 252,
  },
  groupIcon3: {
    top: "50.86%",
    right: "7.64%",
    bottom: "47.11%",
    left: "88.75%",
  },
  text1: {
    top: 320,
    left: 291,
  },
  total: {
    fontWeight: "700",
    width: 68,
    height: 30,
    top: 0,
    color: Color.black,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.roboto,
  },
  rp45000: {
    top: 1,
    left: 160,
    width: 94,
    height: 18,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.roboto,
  },
  totalParent: {
    top: 444,
    left: 65,
    width: 254,
    height: 30,
    position: "absolute",
  },
  lineIcon: {
    top: 421,
    left: 52,
    width: 280,
    height: 3,
    position: "absolute",
  },
  btnPrimaryChild: {
    borderRadius: Border.br_md,
    backgroundColor: Color.teal_100,
  },
  bayar: {
    top: 10,
    left: 13,
    fontSize: FontSize.size_sm,
    width: 227,
    height: 17,
  },
  btnPrimary: {
    top: 513,
    left: 54,
  },
  image3Icon: {
    top: 295,
    left: 20,
    width: 65,
    height: 87,
    position: "absolute",
  },
  keranjang: {
    backgroundColor: Color.color,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Keranjang;
