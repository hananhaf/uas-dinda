import * as React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PrintNota = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.printnota}>
      <View
        style={[
          styles.printnotaInner,
          styles.groupPosition1,
          styles.printnotaInnerLayout,
        ]}
      >
        <View
          style={[
            styles.rectangleParent,
            styles.iconLayout1,
            styles.groupPosition1,
          ]}
        >
          <View
            style={[
              styles.groupChild,
              styles.iconLayout1,
              styles.groupPosition1,
            ]}
          />
          <Image
            style={[styles.frameIcon, styles.iconLayout, styles.vectorLayout]}
            resizeMode="cover"
            source={require("../assets/frame.png")}
          />
          <Text style={[styles.order, styles.orderFlexBox]}>ORDER</Text>
          <Text style={[styles.profile, styles.profileTypo]}>PROFILE</Text>
          <Text style={[styles.history, styles.profileTypo]}>History</Text>
          <Pressable
            style={[styles.vector, styles.vectorLayout]}
            onPress={() => navigation.navigate("History")}
          >
            <Image
              style={[styles.iconLayout, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </Pressable>
          <Pressable
            style={styles.vector1}
            onPress={() => navigation.navigate("ProfileKasir")}
          >
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
          </Pressable>
        </View>
      </View>
      <View
        style={[
          styles.rectangleGroup,
          styles.groupPosition1,
          styles.printnotaInnerLayout,
        ]}
      >
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Pressable
          style={styles.vector2}
          onPress={() => navigation.navigate("ProfileKasir")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Text style={[styles.toko, styles.tokoTypo]}>TOKO</Text>
        <Text style={[styles.struk, styles.tokoTypo]}>Struk</Text>
      </View>
      <View style={[styles.groupParent, styles.parentLayout1]}>
        <View style={[styles.coffeShopKuParent, styles.parentLayout1]}>
          <Text style={[styles.coffeShopKu, styles.text1Typo]}>
            Coffe Shop KU
          </Text>
          <Text style={[styles.hub08132919943, styles.text1Typo]}>
            hub. 08132919943
          </Text>
          <Image
            style={[styles.lineIcon, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={[styles.groupChild2, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>2023-01-09</Text>
          <Text style={[styles.text1, styles.text1Typo]}>09:00</Text>
          <Text
            style={[styles.kasirDinda, styles.textTypo]}
          >{`Kasir : Dinda `}</Text>
          <Text style={[styles.macchiato, styles.orderFlexBox]}>Macchiato</Text>
          <Text style={[styles.milkshake, styles.rp25000Typo]}>Milkshake</Text>
          <View style={[styles.rp25000Wrapper, styles.wrapperLayout]}>
            <Text
              style={[styles.rp25000, styles.rp25000Typo, styles.rp25000Typo1]}
            >
              Rp 25.000
            </Text>
          </View>
          <View style={[styles.rp25000Parent, styles.parentLayout]}>
            <Text
              style={[styles.rp250001, styles.rp25000Typo, styles.rp25000Typo1]}
            >
              Rp 25.000
            </Text>
            <Text style={[styles.x1, styles.x1Typo]}>x 1</Text>
          </View>
          <View style={[styles.rp20000Wrapper, styles.wrapperLayout]}>
            <Text
              style={[styles.rp25000, styles.rp25000Typo, styles.rp25000Typo1]}
            >
              Rp 20.000
            </Text>
          </View>
          <View style={[styles.rp20000Container, styles.wrapperLayout]}>
            <Text
              style={[styles.rp25000, styles.rp25000Typo, styles.rp25000Typo1]}
            >
              Rp 20.000
            </Text>
          </View>
          <View style={styles.rp50000Parent}>
            <Text
              style={[styles.rp25000, styles.rp25000Typo, styles.rp25000Typo1]}
            >
              Rp 50.000
            </Text>
            <Text
              style={[styles.rp30000, styles.rp25000Typo, styles.rp25000Typo1]}
            >
              Rp 30.000
            </Text>
          </View>
          <View style={[styles.rp20000Parent, styles.parentLayout]}>
            <Text
              style={[styles.rp250001, styles.rp25000Typo, styles.rp25000Typo1]}
            >
              Rp 20.000
            </Text>
            <Text style={[styles.x11, styles.x1Typo]}>x 1</Text>
          </View>
        </View>
        <View style={styles.totalParent}>
          <Text style={[styles.x11, styles.x1Typo]}>Total</Text>
          <Text style={[styles.bayar, styles.x1Typo]}>Bayar</Text>
          <Text style={[styles.kembali, styles.x1Typo]}>Kembali</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition1: {
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  printnotaInnerLayout: {
    width: "100%",
    right: "0%",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorLayout: {
    height: "54.65%",
    position: "absolute",
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
    top: "79.63%",
    height: "8.37%",
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
  tokoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    color: Color.color,
    position: "absolute",
  },
  parentLayout1: {
    width: 280,
    position: "absolute",
  },
  text1Typo: {
    color: Color.black,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 3,
    left: 0,
    width: 280,
    position: "absolute",
  },
  textTypo: {
    top: 75,
    color: Color.black,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  rp25000Typo: {
    color: Color.gray_500,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    textAlign: "left",
    position: "absolute",
  },
  wrapperLayout: {
    width: 80,
    height: 24,
    left: 198,
    position: "absolute",
  },
  rp25000Typo1: {
    fontSize: FontSize.size_base,
    color: Color.gray_500,
  },
  parentLayout: {
    width: 126,
    position: "absolute",
  },
  x1Typo: {
    fontWeight: "600",
    color: Color.black,
    left: 0,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    textAlign: "left",
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
  },
  order: {
    left: "45.56%",
    color: Color.color,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
    top: "79.63%",
    height: "8.37%",
    textAlign: "left",
    width: "13.22%",
  },
  profile: {
    width: "13.73%",
    left: "13.06%",
  },
  history: {
    left: "76.39%",
    width: "13.22%",
    opacity: 0.5,
  },
  vector: {
    left: "78.33%",
    top: "14.81%",
    right: "14.1%",
    bottom: "30.53%",
    width: "7.56%",
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
  rectangleParent: {
    top: "0%",
    bottom: "0%",
  },
  printnotaInner: {
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
    bottom: "56.58%",
    width: "6.25%",
    height: "19.74%",
    position: "absolute",
  },
  toko: {
    top: "19.74%",
    left: "17.22%",
  },
  struk: {
    top: "63.16%",
    left: "3.33%",
  },
  rectangleGroup: {
    height: "11.88%",
    bottom: "88.13%",
    top: "0%",
  },
  coffeShopKu: {
    left: 67,
    top: 0,
  },
  hub08132919943: {
    top: 18,
    left: 53,
  },
  lineIcon: {
    top: 72,
  },
  groupChild1: {
    top: 119,
  },
  groupChild2: {
    top: 278,
  },
  text: {
    left: 12,
  },
  text1: {
    top: 97,
    left: 13,
  },
  kasirDinda: {
    left: 178,
  },
  macchiato: {
    top: 128,
    fontFamily: FontFamily.allerta,
    color: Color.gray_400,
    fontSize: FontSize.size_xl,
    left: 7,
  },
  milkshake: {
    top: 194,
    left: 9,
    fontSize: FontSize.size_xl,
  },
  rp25000: {
    left: 0,
    top: 0,
  },
  rp25000Wrapper: {
    top: 141,
    height: 24,
  },
  rp250001: {
    left: 46,
    top: 0,
  },
  x1: {
    top: 1,
  },
  rp25000Parent: {
    top: 154,
    left: 10,
    height: 25,
  },
  rp20000Wrapper: {
    top: 209,
    height: 24,
  },
  rp20000Container: {
    top: 293,
    height: 24,
  },
  rp30000: {
    top: 28,
    left: 0,
  },
  rp50000Parent: {
    top: 320,
    width: 81,
    height: 52,
    left: 198,
    position: "absolute",
  },
  x11: {
    top: 0,
  },
  rp20000Parent: {
    top: 221,
    height: 24,
    left: 7,
  },
  coffeShopKuParent: {
    height: 372,
    left: 0,
    top: 0,
  },
  bayar: {
    top: 33,
  },
  kembali: {
    top: 66,
  },
  totalParent: {
    top: 287,
    width: 68,
    height: 90,
    left: 9,
    position: "absolute",
  },
  groupParent: {
    top: 135,
    left: 40,
    height: 377,
  },
  printnota: {
    backgroundColor: Color.color,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default PrintNota;
