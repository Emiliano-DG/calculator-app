import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    fontWeight: "400",
    textAlign: "right",
  },
  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    fontWeight: "300",
    textAlign: "right",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: Colors.darkGray,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    color: Colors.textPrimary,
    fontSize: 25,
    padding: 10,
    fontWeight: "300",
    fontFamily: Fonts.rounded,
  },
});
