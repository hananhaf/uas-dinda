import * as React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const History1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.history}>
      <View
        style={[
          styles.historyInner,
          styles.groupPosition1,
          styles.historyInnerLayout,
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
            <Pressable
              style={[styles.frame, styles.frameLayout]}
              onPress={() => navigation.navigate("ListProduk")}
            >
              <Image
                style={[styles.iconLayout, styles.groupLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <Text style={styles.order}>ORDER</Text>
            <Text style={[styles.profile, styles.profileTypo]}>PROFILE</Text>
            <Text style={[styles.history1, styles.profileTypo]}>History</Text>
            <Image
              style={[styles.vectorIcon, styles.iconLayout, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
            <Pressable
              style={styles.vector}
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
      <Image
        style={styles.iconbackAlt}
        resizeMode="cover"
        source={require("../assets/iconbackalt.png")}
      />
      <View
        style={[
          styles.rectangleGroup,
          styles.groupPosition1,
          styles.historyInnerLayout,
        ]}
      >
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Text style={styles.historyTransaction}>History Transaction</Text>
        <Pressable
          style={styles.vector1}
          onPress={() => navigation.navigate("ProfileKasir")}
        >
          <Image
            style={styles.groupLayout}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Text style={styles.toko}>TOKO</Text>
      </View>
      <View
        style={[
          styles.groupParent,
          styles.groupParentLayout,
          styles.groupParentPosition,
        ]}
      >
        <View
          style={[
            styles.rectangleContainer,
            styles.tunaiPosition,
            styles.groupParentLayout,
          ]}
        >
          <View style={[styles.rectangleView, styles.groupChildLayout]} />
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
        </View>
        <View style={[styles.tunaiParent, styles.parentPosition]}>
          <Text style={[styles.tunai, styles.tunaiTypo, styles.tunaiPosition]}>
            Tunai
          </Text>
          <Text style={[styles.text, styles.amTypo]}>50.000</Text>
        </View>
        <View style={[styles.statusParent, styles.parentPosition]}>
          <Text
            style={[styles.status, styles.statusTypo, styles.tunaiPosition]}
          >
            Status
          </Text>
          <Text style={[styles.sukses, styles.amTypo]}>Sukses</Text>
        </View>
        <View style={styles.sabtuParent}>
          <Text style={[styles.sabtu, styles.sabtuTypo, styles.tunaiPosition]}>
            Sabtu
          </Text>
          <Text style={[styles.am, styles.amTypo]}>11:00 am</Text>
        </View>
      </View>
      <View
        style={[
          styles.groupView,
          styles.groupParentLayout,
          styles.groupParentPosition,
        ]}
      >
        <View style={[styles.rectangleView, styles.groupChildLayout]} />
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <Text style={[styles.tunai1, styles.tunaiTypo]}>Tunai</Text>
        <Text style={[styles.text1, styles.am1Typo]}>60.000</Text>
        <Text style={[styles.status1, styles.statusTypo]}>Status</Text>
        <Text style={[styles.sukses1, styles.am1Typo]}>Sukses</Text>
        <Text style={[styles.sabtu1, styles.sabtuTypo]}>Sabtu</Text>
        <Text style={[styles.am1, styles.am1Typo]}>11:20 am</Text>
      </View>
      <View
        style={[
          styles.rectangleParent1,
          styles.groupParentLayout,
          styles.groupParentPosition,
        ]}
      >
        <View style={[styles.rectangleView, styles.groupChildLayout]} />
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <Text style={[styles.tunai1, styles.tunaiTypo]}>Tunai</Text>
        <Text style={[styles.text1, styles.am1Typo]}>45.000</Text>
        <Text style={[styles.status1, styles.statusTypo]}>Status</Text>
        <Text style={[styles.sukses1, styles.am1Typo]}>Sukses</Text>
        <Text style={[styles.sabtu1, styles.sabtuTypo]}>Sabtu</Text>
        <Text style={[styles.am1, styles.am1Typo]}>11:30 am</Text>
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
  historyInnerLayout: {
    width: "100%",
    right: "0%",
  },
  groupLayout: {
    height: "100%",
    width: "100%",
  },
  frameLayout: {
    height: "54.65%",
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  groupParentLayout: {
    height: 74,
    width: 341,
    position: "absolute",
  },
  groupParentPosition: {
    left: 9,
    width: 341,
  },
  tunaiPosition: {
    top: 0,
    left: 0,
  },
  groupChildLayout: {
    width: 114,
    backgroundColor: Color.gray_100,
    top: 0,
    height: 74,
    position: "absolute",
  },
  parentPosition: {
    height: 57,
    top: 8,
    position: "absolute",
  },
  tunaiTypo: {
    height: 23,
    width: 70,
    color: Color.black,
    fontFamily: FontFamily.nunito,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  amTypo: {
    height: 25,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    top: 32,
    color: Color.black,
    left: 0,
    fontFamily: FontFamily.nunito,
    textAlign: "left",
    position: "absolute",
  },
  statusTypo: {
    width: 80,
    height: 23,
    color: Color.black,
    fontFamily: FontFamily.nunito,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  sabtuTypo: {
    height: 24,
    width: 80,
    color: Color.black,
    fontFamily: FontFamily.nunito,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  am1Typo: {
    top: 40,
    height: 25,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    color: Color.black,
    fontFamily: FontFamily.nunito,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.teal_100,
    top: "0%",
    bottom: "0%",
  },
  frame: {
    left: "45%",
    top: "20.37%",
    right: "47.15%",
    bottom: "24.98%",
    width: "7.85%",
  },
  order: {
    left: "45.56%",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
    top: "79.63%",
    height: "8.37%",
    color: Color.color,
    width: "13.22%",
    position: "absolute",
  },
  profile: {
    width: "13.73%",
    left: "13.06%",
  },
  history1: {
    left: "76.39%",
    width: "13.22%",
    opacity: 0.5,
  },
  vectorIcon: {
    width: "7.56%",
    top: "14.81%",
    right: "14.1%",
    bottom: "30.53%",
    left: "78.33%",
  },
  vector: {
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
  historyInner: {
    height: "8.44%",
    top: "91.56%",
    bottom: "0%",
  },
  iconbackAlt: {
    marginTop: -301,
    marginLeft: -168.3,
    top: "50%",
    left: "50%",
    width: 25,
    height: 18,
    position: "absolute",
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
  historyTransaction: {
    top: 43,
    left: 14,
    letterSpacing: 0.4,
    lineHeight: 32,
    width: 295,
    fontFamily: FontFamily.nunito,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.color,
    position: "absolute",
  },
  vector1: {
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
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    color: Color.color,
    position: "absolute",
  },
  rectangleGroup: {
    height: "11.88%",
    bottom: "88.13%",
    top: "0%",
  },
  rectangleView: {
    left: 0,
  },
  groupChild1: {
    left: 114,
  },
  groupChild2: {
    left: 227,
  },
  rectangleContainer: {
    left: 0,
  },
  tunai: {
    left: 0,
  },
  text: {
    width: 101,
  },
  tunaiParent: {
    width: 101,
    left: 13,
  },
  status: {
    left: 0,
  },
  sukses: {
    width: 100,
  },
  statusParent: {
    width: 100,
    left: 127,
  },
  sabtu: {
    left: 0,
  },
  am: {
    width: 93,
  },
  sabtuParent: {
    height: 58,
    width: 93,
    left: 248,
    top: 8,
    position: "absolute",
  },
  groupParent: {
    top: 83,
  },
  tunai1: {
    left: 13,
    top: 8,
  },
  text1: {
    width: 101,
    left: 13,
  },
  status1: {
    left: 127,
    top: 8,
  },
  sukses1: {
    width: 100,
    left: 127,
  },
  sabtu1: {
    left: 248,
    top: 8,
  },
  am1: {
    width: 93,
    left: 248,
  },
  groupView: {
    top: 174,
  },
  rectangleParent1: {
    top: 265,
  },
  history: {
    backgroundColor: Color.color,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default History1;
