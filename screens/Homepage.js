import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepage}>
      <Text style={[styles.aplikasiKasirKu, styles.aplikasiKasirKuTypo]}>
        Aplikasi Kasir KU
      </Text>
      <Text style={[styles.mengelolaBisnisLebih, styles.aplikasiKasirKuTypo]}>
        Mengelola bisnis lebih mudah
      </Text>
      <ImageBackground
        style={styles.pngwing1Icon}
        resizeMode="cover"
        source={require("../assets/pngwing1.png")}
      />
      <View style={styles.cobaSekarangParent}>
        <Text style={[styles.cobaSekarang, styles.cobaSekarangTypo]}>
          COBA SEKARANG!!
        </Text>
        <Text style={[styles.miknatiKemudahanDalam, styles.cobaSekarangTypo]}>
          miknati kemudahan dalam mengelola bisnis anda
        </Text>
      </View>
      <Pressable style={[styles.suahPunyaAkunKasirKuParent, styles.suahLayout]}>
        <Text
          style={[styles.suahPunyaAkun, styles.akunTypo, styles.suahLayout]}
        >
          suah punya akun kasir KU ?
        </Text>
        <Pressable
          style={styles.masukDiSiniContainer}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.masukDiSini, styles.akunTypo]}>
            masuk di sini
          </Text>
        </Pressable>
      </Pressable>
      <Pressable
        style={[styles.btnPrimary, styles.btnLayout]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Pressable style={[styles.btnPrimaryChild, styles.btnLayout]} />
        <Text style={[styles.buatAkun, styles.akunTypo]}>{`Buat akun `}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  aplikasiKasirKuTypo: {
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    color: Color.black,
    position: "absolute",
  },
  cobaSekarangTypo: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  suahLayout: {
    width: 191,
    position: "absolute",
  },
  akunTypo: {
    height: 20,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
  },
  btnLayout: {
    height: 42,
    width: 240,
    position: "absolute",
  },
  aplikasiKasirKu: {
    top: 20,
    left: 115,
    width: 129,
  },
  mengelolaBisnisLebih: {
    top: 59,
    left: 57,
    width: 244,
  },
  pngwing1Icon: {
    top: 146,
    left: 11,
    width: 337,
    height: 141,
    position: "absolute",
  },
  cobaSekarang: {
    fontSize: 15,
    width: 277,
    height: 29,
    left: 13,
    top: 0,
  },
  miknatiKemudahanDalam: {
    top: 24,
    fontSize: FontSize.size_xs,
    height: 17,
    left: 0,
    width: 313,
  },
  cobaSekarangParent: {
    top: 365,
    left: 23,
    height: 41,
    width: 313,
    position: "absolute",
  },
  suahPunyaAkun: {
    left: 0,
    top: 0,
    color: Color.black,
    fontSize: FontSize.size_sm,
    width: 191,
  },
  masukDiSini: {
    color: Color.teal_200,
    width: 91,
  },
  masukDiSiniContainer: {
    left: 45,
    top: 27,
    position: "absolute",
  },
  suahPunyaAkunKasirKuParent: {
    top: 573,
    left: 84,
    height: 47,
  },
  btnPrimaryChild: {
    borderRadius: Border.br_md,
    backgroundColor: Color.teal_100,
    left: 0,
    top: 0,
  },
  buatAkun: {
    top: 10,
    fontWeight: "500",
    color: Color.color,
    width: 215,
    left: 13,
    position: "absolute",
  },
  btnPrimary: {
    top: 445,
    left: 59,
  },
  homepage: {
    backgroundColor: Color.color,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Homepage;
