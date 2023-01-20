const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splashscreen from "./screens/Splashscreen";
import Homepage from "./screens/Homepage";
import TambahProduk from "./screens/TambahProduk";
import ProdukDetail from "./screens/ProdukDetail";
import ListProduk from "./screens/ListProduk";
import Keranjang from "./screens/Keranjang";
import History1 from "./screens/History1";
import ProfileKasir from "./screens/ProfileKasir";
import PrintNota from "./screens/PrintNota";
import Input from "./screens/Input";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Roboto: require("./assets/fonts/Roboto.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    Allerta: require("./assets/fonts/Allerta.ttf"),
    Nunito: require("./assets/fonts/Nunito.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splashscreen"
              component={Splashscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TambahProduk"
              component={TambahProduk}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProdukDetail"
              component={ProdukDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ListProduk"
              component={ListProduk}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Keranjang"
              component={Keranjang}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="History"
              component={History1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileKasir"
              component={ProfileKasir}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrintNota"
              component={PrintNota}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Input"
              component={Input}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splashscreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
