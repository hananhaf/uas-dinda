import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ListProduk = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.listproduk}
      contentContainerStyle={styles.listProdukScrollViewContent}
    >
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout3]} />
        <View
          style={[styles.groupItem, styles.groupPosition, styles.groupLayout3]}
        />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("ProfileKasir")}
        >
          <Image
            style={[styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Text style={[styles.toko, styles.tokoTypo]}>TOKO</Text>
        <Text style={[styles.tambahProduk, styles.tokoTypo]}>
          Tambah Produk
        </Text>
        <Pressable
          style={styles.group}
          onPress={() => navigation.navigate("TambahProduk")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
        </Pressable>
      </View>
      <View style={styles.image13ParentLayout}>
        <View style={[styles.image13Parent, styles.image13ParentLayout]}>
          <Image
            style={styles.image13Icon}
            resizeMode="cover"
            source={require("../assets/image-13.png")}
          />
          <View style={[styles.groupWrapper, styles.groupLayout2]}>
            <View style={[styles.groupParent, styles.groupLayout2]}>
              <View style={[styles.groupContainer, styles.groupLayout1]}>
                <Pressable style={[styles.groupPressable, styles.groupLayout1]}>
                  <View style={[styles.frameWrapper, styles.parentFrameLayout]}>
                    <View
                      style={[styles.expressoParent, styles.parentFrameLayout]}
                    >
                      <Text
                        style={[
                          styles.expresso,
                          styles.rp25000FlexBox,
                          styles.expressoTypo,
                        ]}
                      >
                        Expresso
                      </Text>
                      <View
                        style={[
                          styles.jessicaSilveiraSzudyembav8U,
                          styles.jessicaShadowBox,
                        ]}
                      />
                      <Image
                        style={styles.frameChild}
                        resizeMode="cover"
                        source={require("../assets/rectangle-34.png")}
                      />
                      <Text
                        style={[
                          styles.rp20000,
                          styles.latteTypo,
                          styles.rp20000Clr,
                        ]}
                      >
                        Rp 20.000
                      </Text>
                      <Image
                        style={[styles.vectorIcon, styles.vectorIconLayout]}
                        resizeMode="cover"
                        source={require("../assets/vector9.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.frameParent}>
                    <View
                      style={[styles.mochaParent, styles.parentFrameLayout]}
                    >
                      <Text style={[styles.mocha, styles.mochaTypo]}>
                        Mocha
                      </Text>
                      <Text
                        style={[
                          styles.rp25000,
                          styles.rp25000Typo,
                          styles.rp25000FlexBox,
                        ]}
                      >
                        Rp 25.000
                      </Text>
                      <View
                        style={[
                          styles.frameContainer,
                          styles.frameWrapperLayout,
                        ]}
                      >
                        <View style={styles.frameGroup}>
                          <View
                            style={[styles.groupFrame, styles.frameFlexBox]}
                          >
                            <Image
                              style={styles.groupIcon}
                              resizeMode="cover"
                              source={require("../assets/group2.png")}
                            />
                          </View>
                          <View style={[styles.frameView, styles.frameFlexBox]}>
                            <Image
                              style={styles.groupIcon1}
                              resizeMode="cover"
                              source={require("../assets/group3.png")}
                            />
                          </View>
                          <Text style={styles.text}>1</Text>
                        </View>
                      </View>
                    </View>
                    <Image
                      style={[styles.image3Icon, styles.parentFrameLayout]}
                      resizeMode="cover"
                      source={require("../assets/image-3.png")}
                    />
                  </View>
                  <Pressable
                    style={[styles.framePosition, styles.parentFrameLayout]}
                    onPress={() => navigation.navigate("ProdukDetail")}
                  >
                    <View
                      style={[styles.expressoParent, styles.parentFrameLayout]}
                    >
                      <Text style={[styles.macchiato, styles.mochaTypo]}>
                        Macchiato
                      </Text>
                      <Text
                        style={[
                          styles.rp250001,
                          styles.rp25000Typo,
                          styles.rp25000FlexBox,
                        ]}
                      >
                        Rp 25.000
                      </Text>
                      <View
                        style={[styles.groupView, styles.frameWrapperLayout]}
                      >
                        <View style={styles.frameGroup}>
                          <View
                            style={[styles.groupFrame, styles.frameFlexBox]}
                          >
                            <Image
                              style={styles.groupIcon}
                              resizeMode="cover"
                              source={require("../assets/group4.png")}
                            />
                          </View>
                          <View style={[styles.frameView, styles.frameFlexBox]}>
                            <Image
                              style={styles.groupIcon1}
                              resizeMode="cover"
                              source={require("../assets/group5.png")}
                            />
                          </View>
                          <Text style={styles.text}>1</Text>
                        </View>
                      </View>
                      <View
                        style={[
                          styles.frameWrapper2,
                          styles.frameWrapperLayout,
                        ]}
                      >
                        <View style={styles.frameGroup}>
                          <View
                            style={[styles.groupFrame, styles.frameFlexBox]}
                          >
                            <Image
                              style={styles.groupIcon}
                              resizeMode="cover"
                              source={require("../assets/group4.png")}
                            />
                          </View>
                          <View style={[styles.frameView, styles.frameFlexBox]}>
                            <Image
                              style={styles.groupIcon1}
                              resizeMode="cover"
                              source={require("../assets/group5.png")}
                            />
                          </View>
                          <Text style={styles.text}>1</Text>
                        </View>
                      </View>
                      <View
                        style={[
                          styles.frameWrapper3,
                          styles.frameWrapperLayout,
                        ]}
                      >
                        <View style={styles.frameGroup}>
                          <View
                            style={[styles.groupFrame, styles.frameFlexBox]}
                          >
                            <Image
                              style={styles.groupIcon}
                              resizeMode="cover"
                              source={require("../assets/group4.png")}
                            />
                          </View>
                          <View style={[styles.frameView, styles.frameFlexBox]}>
                            <Image
                              style={styles.groupIcon1}
                              resizeMode="cover"
                              source={require("../assets/group5.png")}
                            />
                          </View>
                          <Text style={styles.text}>1</Text>
                        </View>
                      </View>
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        resizeMode="cover"
                        source={require("../assets/vector9.png")}
                      />
                    </View>
                  </Pressable>
                  <View
                    style={[
                      styles.frappuchinoParent,
                      styles.frappuchinoParentLayout,
                    ]}
                  >
                    <Text
                      style={[
                        styles.frappuchino,
                        styles.rp30000Position,
                        styles.expressoTypo,
                      ]}
                    >
                      Frappuchino
                    </Text>
                    <View
                      style={[
                        styles.jessicaSilveiraSzudyembav8U1,
                        styles.frappuchinoParentLayout,
                        styles.jessicaShadowBox,
                      ]}
                    />
                    <Image
                      style={[styles.image11Icon, styles.image11IconLayout]}
                      resizeMode="cover"
                      source={require("../assets/image-11.png")}
                    />
                    <Text
                      style={[
                        styles.rp30000,
                        styles.rp30000Position,
                        styles.rp25000Typo,
                      ]}
                    >
                      Rp 30.000
                    </Text>
                    <Text
                      style={[
                        styles.frappuchino,
                        styles.rp30000Position,
                        styles.expressoTypo,
                      ]}
                    >
                      Frappuchino
                    </Text>
                    <View
                      style={[
                        styles.jessicaSilveiraSzudyembav8U1,
                        styles.frappuchinoParentLayout,
                        styles.jessicaShadowBox,
                      ]}
                    />
                    <Image
                      style={[styles.image11Icon, styles.image11IconLayout]}
                      resizeMode="cover"
                      source={require("../assets/image-11.png")}
                    />
                    <Text
                      style={[
                        styles.rp30000,
                        styles.rp30000Position,
                        styles.rp25000Typo,
                      ]}
                    >
                      Rp 30.000
                    </Text>
                  </View>
                  <View style={[styles.groupWrapper7, styles.wrapperLayout]}>
                    <View style={[styles.frameWrapper4, styles.wrapperLayout]}>
                      <View
                        style={[styles.frameWrapper4, styles.wrapperLayout]}
                      >
                        <Text style={[styles.latte, styles.latteTypo]}>
                          LATTE
                        </Text>
                        <Text
                          style={[
                            styles.rp200001,
                            styles.latteTypo,
                            styles.rp20000Clr,
                          ]}
                        >
                          Rp 20.000
                        </Text>
                        <View
                          style={[
                            styles.frameWrapper5,
                            styles.frameWrapperLayout,
                          ]}
                        >
                          <View style={styles.frameGroup}>
                            <View
                              style={[styles.groupFrame, styles.frameFlexBox]}
                            >
                              <Image
                                style={styles.groupIcon}
                                resizeMode="cover"
                                source={require("../assets/group10.png")}
                              />
                            </View>
                            <View
                              style={[styles.frameView, styles.frameFlexBox]}
                            >
                              <Image
                                style={styles.groupIcon1}
                                resizeMode="cover"
                                source={require("../assets/group11.png")}
                              />
                            </View>
                            <Text style={styles.text}>1</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </Pressable>
                <Image
                  style={[styles.image6Icon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/image-6.png")}
                />
              </View>
              <View style={[styles.groupWrapper10, styles.groupLayout]}>
                <View style={[styles.groupParent1, styles.groupLayout]}>
                  <View
                    style={[styles.frameWrapper6, styles.frameWrapper6Layout]}
                  >
                    <View
                      style={[styles.expressoGroup, styles.frameWrapper6Layout]}
                    >
                      <Text
                        style={[
                          styles.expresso,
                          styles.rp25000FlexBox,
                          styles.expressoTypo,
                        ]}
                      >
                        Expresso
                      </Text>
                      <View
                        style={[
                          styles.jessicaSilveiraSzudyembav8U,
                          styles.jessicaShadowBox,
                        ]}
                      />
                      <Text
                        style={[
                          styles.rp20000,
                          styles.latteTypo,
                          styles.rp20000Clr,
                        ]}
                      >
                        Rp 20.000
                      </Text>
                      <View
                        style={[
                          styles.frameWrapper7,
                          styles.frameWrapperLayout,
                        ]}
                      >
                        <View style={styles.frameGroup}>
                          <View
                            style={[styles.groupFrame, styles.frameFlexBox]}
                          >
                            <Image
                              style={styles.groupIcon}
                              resizeMode="cover"
                              source={require("../assets/group12.png")}
                            />
                          </View>
                          <View style={[styles.frameView, styles.frameFlexBox]}>
                            <Image
                              style={styles.groupIcon1}
                              resizeMode="cover"
                              source={require("../assets/group13.png")}
                            />
                          </View>
                          <Text style={styles.text}>1</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.frameParent6, styles.parentFrameLayout]}>
                    <View
                      style={[styles.expressoParent, styles.parentFrameLayout]}
                    >
                      <Text
                        style={[styles.milkyshakeChocolate, styles.mochaTypo]}
                      >
                        Milkyshake chocolate
                      </Text>
                      <Text style={[styles.rp250002, styles.rp250002Typo]}>
                        Rp 25.000
                      </Text>
                      <View
                        style={[
                          styles.frameContainer,
                          styles.frameWrapperLayout,
                        ]}
                      >
                        <View style={styles.frameGroup}>
                          <View
                            style={[styles.groupFrame, styles.frameFlexBox]}
                          >
                            <Image
                              style={styles.groupIcon}
                              resizeMode="cover"
                              source={require("../assets/group14.png")}
                            />
                          </View>
                          <View style={[styles.frameView, styles.frameFlexBox]}>
                            <Image
                              style={styles.groupIcon1}
                              resizeMode="cover"
                              source={require("../assets/group15.png")}
                            />
                          </View>
                          <Text style={styles.text}>1</Text>
                        </View>
                      </View>
                    </View>
                    <Image
                      style={[styles.image3Icon1, styles.image3Icon1Position]}
                      resizeMode="cover"
                      source={require("../assets/image-31.png")}
                    />
                  </View>
                  <View
                    style={[styles.image11IconLayout, styles.framePosition]}
                  >
                    <View
                      style={[styles.expressoParent, styles.parentFrameLayout]}
                    >
                      <Text style={[styles.milkyStrawberry, styles.mochaTypo]}>
                        Milky Strawberry
                      </Text>
                      <Text style={[styles.rp250003, styles.rp250002Typo]}>
                        Rp 25.000
                      </Text>
                      <View
                        style={[styles.groupView, styles.frameWrapperLayout]}
                      >
                        <View style={styles.frameGroup}>
                          <View
                            style={[styles.groupFrame, styles.frameFlexBox]}
                          >
                            <Image
                              style={styles.groupIcon}
                              resizeMode="cover"
                              source={require("../assets/group16.png")}
                            />
                          </View>
                          <View style={[styles.frameView, styles.frameFlexBox]}>
                            <Image
                              style={styles.groupIcon1}
                              resizeMode="cover"
                              source={require("../assets/group17.png")}
                            />
                          </View>
                          <Text style={styles.text}>1</Text>
                        </View>
                      </View>
                    </View>
                    <Image
                      style={styles.image12Icon}
                      resizeMode="cover"
                      source={require("../assets/image-12.png")}
                    />
                  </View>
                  <View
                    style={[styles.frameWrapper10, styles.groupInnerLayout]}
                  >
                    <View
                      style={[styles.groupInner, styles.groupInnerLayout]}
                    />
                  </View>
                  <Image
                    style={[
                      styles.whatsappImage20230111At0,
                      styles.image3Icon1Position,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/whatsapp-image-20230111-at-095650-1.png")}
                  />
                  <View style={styles.image6} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.listprodukChild}>
        <View
          style={[
            styles.iconLayout1,
            styles.groupPosition,
            styles.rectangleViewPosition,
          ]}
        >
          <View style={[styles.groupPosition, styles.rectangleViewPosition]}>
            <View
              style={[
                styles.rectangleView,
                styles.iconLayout1,
                styles.groupPosition,
                styles.rectangleViewPosition,
              ]}
            />
            <Image
              style={[styles.frameIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/frame1.png")}
            />
            <Text style={styles.order}>ORDER</Text>
            <Text style={[styles.profile, styles.profileTypo]}>PROFILE</Text>
            <Text
              style={[
                styles.history,
                styles.historyPosition,
                styles.profileTypo,
              ]}
            >
              History
            </Text>
            <Pressable
              style={[styles.vector1, styles.historyPosition]}
              onPress={() => navigation.navigate("History")}
            >
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require("../assets/vector11.png")}
              />
            </Pressable>
            <Pressable
              style={styles.vector2}
              onPress={() => navigation.navigate("ProfileKasir")}
            >
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require("../assets/vector12.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listProdukScrollViewContent: {
    flexDirection: "column",
  },
  groupLayout3: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.turquoise,
    width: "100%",
  },
  groupPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  tokoTypo: {
    textAlign: "center",
    color: Color.color,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  image13ParentLayout: {
    height: 954,
    width: 384,
  },
  groupLayout2: {
    height: 935,
    width: 377,
    position: "absolute",
  },
  groupLayout1: {
    height: 584,
    width: 376,
    top: 0,
    position: "absolute",
  },
  parentFrameLayout: {
    height: 101,
    position: "absolute",
  },
  rp25000FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  expressoTypo: {
    color: Color.gray_400,
    fontFamily: FontFamily.allerta,
    top: 20,
    fontSize: FontSize.size_xl,
  },
  jessicaShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
  },
  latteTypo: {
    color: Color.gray_500,
    fontWeight: "600",
    textAlign: "left",
    left: 112,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  rp20000Clr: {
    color: Color.gray_500,
    fontSize: FontSize.size_base,
  },
  vectorIconLayout: {
    width: "4.98%",
    height: "21.61%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  mochaTypo: {
    top: 24,
    textAlign: "left",
    color: Color.gray_400,
    fontFamily: FontFamily.allerta,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rp25000Typo: {
    top: 50,
    color: Color.gray_500,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
  },
  frameWrapperLayout: {
    height: 30,
    width: 89,
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_lg,
    flexDirection: "row",
    width: 30,
    backgroundColor: Color.beige,
    borderRadius: Border.br_xs,
    height: 30,
    top: 0,
    position: "absolute",
  },
  frappuchinoParentLayout: {
    height: 110,
    position: "absolute",
  },
  rp30000Position: {
    left: 117,
    textAlign: "left",
    position: "absolute",
  },
  image11IconLayout: {
    height: 102,
    position: "absolute",
  },
  wrapperLayout: {
    width: 355,
    height: 101,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  groupLayout: {
    height: 343,
    width: 375,
    left: 0,
    position: "absolute",
  },
  frameWrapper6Layout: {
    width: 359,
    height: 101,
    position: "absolute",
  },
  rp250002Typo: {
    top: 69,
    color: Color.gray_500,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  image3Icon1Position: {
    left: 25,
    width: 65,
    position: "absolute",
  },
  framePosition: {
    left: 3,
    width: 371,
    top: 0,
  },
  groupInnerLayout: {
    height: 15,
    width: 38,
    position: "absolute",
  },
  rectangleViewPosition: {
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  profileTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
    height: "8.37%",
    textAlign: "left",
    color: Color.color,
  },
  historyPosition: {
    left: "78.33%",
    position: "absolute",
  },
  groupChild: {
    height: "65.79%",
    bottom: "34.21%",
    borderColor: "#c3fffb",
    left: "0%",
    right: "0%",
    borderStyle: "solid",
    backgroundColor: Color.turquoise,
    top: "0%",
    position: "absolute",
  },
  groupItem: {
    height: "43.42%",
    top: "56.58%",
    borderColor: "#68d7d0",
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
  },
  tambahProduk: {
    top: "63.16%",
    left: "5.56%",
  },
  group: {
    left: "93.06%",
    top: "69.74%",
    right: "3.33%",
    bottom: "13.16%",
    width: "3.61%",
    height: "17.11%",
    position: "absolute",
  },
  rectangleParent: {
    height: 76,
    width: 360,
  },
  image13Icon: {
    width: 120,
    height: 120,
    left: 0,
    top: 0,
    position: "absolute",
  },
  expresso: {
    left: 112,
  },
  jessicaSilveiraSzudyembav8U: {
    width: 100,
    height: 100,
    position: "absolute",
  },
  frameChild: {
    top: 16,
    left: 17,
    height: 66,
    width: 65,
    position: "absolute",
  },
  rp20000: {
    top: 46,
  },
  vectorIcon: {
    top: "63%",
    right: "75.41%",
    bottom: "15.39%",
    left: "19.62%",
  },
  expressoParent: {
    width: 371,
    left: 0,
    top: 0,
  },
  frameWrapper: {
    top: 358,
    width: 371,
    left: 4,
  },
  mocha: {
    left: 115,
  },
  rp25000: {
    left: 115,
  },
  groupIcon: {
    height: 2,
    width: 13,
  },
  groupFrame: {
    left: 0,
  },
  groupIcon1: {
    height: 13,
    width: 13,
  },
  frameView: {
    left: 59,
  },
  text: {
    top: 3,
    left: 39,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.nunito,
    color: Color.black,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  frameGroup: {
    borderRadius: Border.br_xs,
    height: 30,
    width: 89,
    left: 0,
    top: 0,
    overflow: "hidden",
    position: "absolute",
    backgroundColor: Color.color,
  },
  frameContainer: {
    top: 35,
    left: 247,
  },
  mochaParent: {
    top: 2,
    width: 371,
    left: 0,
  },
  image3Icon: {
    width: 103,
    left: 0,
    top: 0,
  },
  frameParent: {
    top: 119,
    height: 103,
    width: 371,
    left: 0,
    position: "absolute",
  },
  macchiato: {
    left: 112,
  },
  rp250001: {
    left: 112,
  },
  groupView: {
    top: 32,
    left: 246,
  },
  frameWrapper2: {
    top: 357,
    left: 245,
  },
  frameWrapper3: {
    top: 457,
    left: 243,
  },
  vectorIcon1: {
    top: "77.88%",
    right: "75.13%",
    bottom: "0.51%",
    left: "19.9%",
  },
  frappuchino: {
    width: 129,
    height: 29,
  },
  jessicaSilveiraSzudyembav8U1: {
    width: 104,
  },
  image11Icon: {
    top: 4,
    left: 2,
    width: 94,
  },
  rp30000: {
    width: 84,
    height: 26,
  },
  frappuchinoParent: {
    top: 473,
    width: 246,
    left: 1,
  },
  latte: {
    top: 18,
    fontSize: FontSize.size_xl,
    color: Color.gray_500,
  },
  rp200001: {
    top: 45,
  },
  frameWrapper5: {
    top: 30,
    left: 240,
  },
  frameWrapper4: {
    left: 0,
    top: 0,
  },
  groupWrapper7: {
    top: 239,
    left: 7,
  },
  groupPressable: {
    left: 0,
  },
  image6Icon: {
    height: "10.42%",
    width: "15.88%",
    top: "44.17%",
    right: "75.77%",
    bottom: "45.4%",
    left: "8.35%",
    position: "absolute",
  },
  groupContainer: {
    left: 1,
  },
  frameWrapper7: {
    top: 28,
    left: 242,
  },
  expressoGroup: {
    left: 0,
    top: 0,
  },
  frameWrapper6: {
    top: 242,
    left: 4,
  },
  milkyshakeChocolate: {
    width: 145,
    left: 115,
  },
  rp250002: {
    left: 115,
  },
  image3Icon1: {
    top: 7,
    height: 87,
  },
  frameParent6: {
    top: 121,
    width: 371,
    left: 0,
  },
  milkyStrawberry: {
    width: 142,
    left: 112,
  },
  rp250003: {
    left: 112,
  },
  image12Icon: {
    left: 14,
    width: 73,
    height: 95,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    left: 0,
    top: 0,
  },
  frameWrapper10: {
    top: 289,
    left: 82,
  },
  whatsappImage20230111At0: {
    top: 249,
    height: 81,
  },
  image6: {
    height: "18.72%",
    width: "15.75%",
    top: "79.94%",
    right: "77.64%",
    bottom: "1.35%",
    left: "6.61%",
    position: "absolute",
  },
  groupParent1: {
    top: 0,
  },
  groupWrapper10: {
    top: 592,
  },
  groupParent: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 19,
    left: 7,
  },
  image13Parent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.teal_100,
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
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
    height: "8.37%",
    top: "79.63%",
    width: "13.22%",
    textAlign: "left",
    color: Color.color,
    position: "absolute",
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
  vector1: {
    top: "14.81%",
    right: "14.1%",
    bottom: "30.53%",
    width: "7.56%",
    height: "54.65%",
  },
  vector2: {
    left: "13.61%",
    top: "25.93%",
    right: "79.99%",
    bottom: "26.87%",
    width: "6.4%",
    height: "47.2%",
    position: "absolute",
  },
  listprodukChild: {
    height: 54,
    width: 360,
  },
  listproduk: {
    flex: 1,
    maxWidth: "100%",
    width: "100%",
    backgroundColor: Color.color,
  },
});

export default ListProduk;
