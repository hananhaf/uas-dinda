import * as React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ProfileKasir = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileKasir}>
      <View style={styles.profileKasirInner}>
        <View
          style={[
            styles.groupWrapper,
            styles.groupPosition,
            styles.groupPosition1,
          ]}
        >
          <View
            style={[
              styles.groupWrapper,
              styles.groupPosition,
              styles.groupPosition1,
            ]}
          >
            <View
              style={[
                styles.groupChild,
                styles.groupPosition,
                styles.groupPosition1,
              ]}
            />
            <Pressable
              style={[styles.frame, styles.frameLayout]}
              onPress={() => navigation.navigate("ListProduk")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <Text style={styles.order}>ORDER</Text>
            <Text style={[styles.profile, styles.profileTypo]}>PROFILE</Text>
            <Text style={[styles.history, styles.profileTypo]}>History</Text>
            <Pressable
              style={[styles.vector, styles.frameLayout]}
              onPress={() => navigation.navigate("History")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
            </Pressable>
            <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Text style={[styles.toko, styles.tokoTypo]}>TOKO</Text>
        <Text style={[styles.tambahProduk, styles.tokoTypo]}>
          Tambah Produk
        </Text>
        <Image
          style={[styles.groupIcon, styles.menuPosition, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
      </View>
      <View style={[styles.menu, styles.menuPosition]}>
        <View style={styles.menuInner}>
          <View style={[styles.parentFlexBox, styles.frameParentFlexBox]}>
            <View
              style={[styles.iconoutlinepersonParent, styles.parentFlexBox]}
            >
              <Image
                style={styles.iconoutlineperson}
                resizeMode="cover"
                source={require("../assets/iconoutlineperson.png")}
              />
              <Text style={[styles.myProfile, styles.ml20]}>Dinda Melika</Text>
            </View>
            <View
              style={[
                styles.chevronRight,
                styles.parentFlexBox,
                styles.frameParentFlexBox,
              ]}
            >
              <Image
                style={styles.groupIcon1}
                resizeMode="cover"
                source={require("../assets/group23.png")}
              />
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.menuInner, styles.mt30]}
          onPress={() => navigation.navigate("History")}
        >
          <View style={styles.frameParentFlexBox}>
            <View
              style={[styles.iconoutlinepersonParent, styles.parentFlexBox]}
            >
              <Image
                style={styles.iconoutlineperson}
                resizeMode="cover"
                source={require("../assets/iconoutlinemap.png")}
              />
              <Text style={[styles.myProfile, styles.ml20]}>
                History Transaction
              </Text>
            </View>
            <View
              style={[
                styles.chevronRight,
                styles.parentFlexBox,
                styles.frameParentFlexBox,
              ]}
            >
              <Image
                style={styles.groupIcon1}
                resizeMode="cover"
                source={require("../assets/group23.png")}
              />
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.menuInner, styles.mt30]}
          onPress={() => navigation.navigate("TambahProduk")}
        >
          <View style={styles.frameParentFlexBox}>
            <View
              style={[styles.iconoutlinepersonParent, styles.parentFlexBox]}
            >
              <Image
                style={styles.iconoutlineperson}
                resizeMode="cover"
                source={require("../assets/iconoutlinecreditcard.png")}
              />
              <Text style={[styles.myProfile, styles.ml20]}>Tambah produk</Text>
            </View>
            <View
              style={[
                styles.chevronRight,
                styles.parentFlexBox,
                styles.frameParentFlexBox,
              ]}
            >
              <Image
                style={styles.groupIcon1}
                resizeMode="cover"
                source={require("../assets/group23.png")}
              />
            </View>
          </View>
        </Pressable>
        <View style={[styles.menuInner, styles.mt30]}>
          <View style={styles.frameParentFlexBox}>
            <View
              style={[styles.iconoutlinepersonParent, styles.parentFlexBox]}
            >
              <Image
                style={styles.iconoutlineperson}
                resizeMode="cover"
                source={require("../assets/iconoutlineshoppingbag.png")}
              />
              <Text style={[styles.myProfile, styles.ml20]}>
                Ganti Operator
              </Text>
            </View>
            <View
              style={[
                styles.chevronRight,
                styles.parentFlexBox,
                styles.frameParentFlexBox,
              ]}
            >
              <Image
                style={styles.groupIcon1}
                resizeMode="cover"
                source={require("../assets/group23.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.menuInner, styles.mt30]}>
          <View style={styles.frameParentFlexBox}>
            <View
              style={[styles.iconoutlinepersonParent, styles.parentFlexBox]}
            >
              <Image
                style={styles.iconoutlineperson}
                resizeMode="cover"
                source={require("../assets/iconoutlinequestionmarkcircle.png")}
              />
              <Text style={[styles.myProfile, styles.ml20]}>
                Frequently Asked Questions
              </Text>
            </View>
            <View
              style={[
                styles.chevronRight,
                styles.parentFlexBox,
                styles.frameParentFlexBox,
              ]}
            >
              <Image
                style={styles.groupIcon1}
                resizeMode="cover"
                source={require("../assets/group23.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.iconbackAlt}
        onPress={() => navigation.navigate("ListProduk")}
      >
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/iconbackalt.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml20: {
    marginLeft: Margin.m_sm,
  },
  mt30: {
    marginTop: Margin.m_md,
  },
  groupPosition: {
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupPosition1: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  frameLayout: {
    height: "54.65%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  tokoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    color: Color.color,
    position: "absolute",
  },
  menuPosition: {
    right: "3.33%",
    position: "absolute",
  },
  frameParentFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupChild: {
    backgroundColor: Color.teal_100,
    height: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
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
    color: Color.color,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
    top: "79.63%",
    height: "8.37%",
    width: "13.22%",
    position: "absolute",
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
  vectorIcon: {
    height: "47.2%",
    width: "6.4%",
    top: "25.93%",
    right: "79.99%",
    bottom: "26.87%",
    left: "13.61%",
    position: "absolute",
  },
  groupWrapper: {
    height: "100%",
  },
  profileKasirInner: {
    height: "8.44%",
    top: "91.56%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  groupItem: {
    height: "69.44%",
    bottom: "30.56%",
    backgroundColor: Color.turquoise,
    borderStyle: "solid",
    borderColor: "#c3fffb",
    borderWidth: 1,
  },
  toko: {
    top: "20.83%",
    left: "17.22%",
  },
  tambahProduk: {
    top: "66.67%",
    left: "5.56%",
  },
  groupIcon: {
    height: "18.06%",
    width: "3.61%",
    top: "73.61%",
    bottom: "8.33%",
    left: "93.06%",
  },
  rectangleGroup: {
    height: "11.25%",
    bottom: "88.75%",
  },
  iconoutlineperson: {
    width: 24,
    height: 24,
  },
  myProfile: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0.4,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: FontFamily.nunito,
    color: Color.iris100,
    textAlign: "left",
    flex: 1,
  },
  iconoutlinepersonParent: {
    flex: 1,
  },
  groupIcon1: {
    width: 7,
    height: 12,
  },
  chevronRight: {
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_sm,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  menuInner: {
    width: 366,
    justifyContent: "center",
  },
  menu: {
    height: "53.44%",
    width: "91.39%",
    top: "13.28%",
    bottom: "33.28%",
    left: "5.28%",
  },
  icon2: {
    marginTop: -301,
    marginLeft: -168.3,
    height: "100%",
    width: "100%",
  },
  iconbackAlt: {
    left: "50%",
    top: "50%",
    width: 25,
    height: 18,
    position: "absolute",
  },
  profileKasir: {
    backgroundColor: Color.color,
    height: 640,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default ProfileKasir;
