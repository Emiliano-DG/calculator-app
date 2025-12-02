import { globalStyles } from "@/styles/global-styles";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";

// Configurar la barra de navegación en Android
import * as NavigationBar from "expo-navigation-bar";
const isAndroid = Platform.OS === "android";
if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("black");
}

const RootLayout = () => {
  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;
