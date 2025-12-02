import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/theme";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const index = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 3, marginBottom: 20 }}>
        <ThemeText variant="primary">50x50</ThemeText>
        <ThemeText variant="secondary">250</ThemeText>
      </View>
      {/* Teclado */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          blackColor
          color={Colors.lightGray}
          onPress={() => {}}
        />
        <CalculatorButton
          label="+/-"
          blackColor
          color={Colors.lightGray}
          onPress={() => {}}
        />
        <CalculatorButton
          label="del"
          blackColor
          color={Colors.lightGray}
          onPress={() => {}}
        />
        <CalculatorButton label="%" color={Colors.orange} onPress={() => {}} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => {}} />
        <CalculatorButton label="8" onPress={() => {}} />
        <CalculatorButton label="9" onPress={() => {}} />
        <CalculatorButton label="*" color={Colors.orange} onPress={() => {}} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => {}} />
        <CalculatorButton label="5" onPress={() => {}} />
        <CalculatorButton label="6" onPress={() => {}} />
        <CalculatorButton label="-" color={Colors.orange} onPress={() => {}} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => {}} />
        <CalculatorButton label="2" onPress={() => {}} />
        <CalculatorButton label="3" onPress={() => {}} />
        <CalculatorButton label="+" color={Colors.orange} onPress={() => {}} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="0" onPress={() => {}} doubleSize />
        <CalculatorButton label="." onPress={() => {}} />
        <CalculatorButton label="=" color={Colors.orange} onPress={() => {}} />
      </View>
    </View>
  );
};

export default index;
