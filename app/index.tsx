import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";

import { View } from "react-native";

const index = () => {
  const { formula, buildNumber, clean, toggleSign } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 3, marginBottom: 20 }}>
        <ThemeText variant="primary">{formula}</ThemeText>
        <ThemeText variant="secondary">250</ThemeText>
      </View>
      {/* Teclado */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          blackColor
          color={Colors.lightGray}
          onPress={clean}
        />
        <CalculatorButton
          label="+/-"
          blackColor
          color={Colors.lightGray}
          onPress={toggleSign}
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
        <CalculatorButton
          label="7"
          onPress={() => {
            buildNumber("7");
          }}
        />
        <CalculatorButton
          label="8"
          onPress={() => {
            buildNumber("8");
          }}
        />
        <CalculatorButton
          label="9"
          onPress={() => {
            buildNumber("9");
          }}
        />
        <CalculatorButton label="*" color={Colors.orange} onPress={() => {}} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          onPress={() => {
            buildNumber("4");
          }}
        />
        <CalculatorButton
          label="5"
          onPress={() => {
            buildNumber("5");
          }}
        />
        <CalculatorButton
          label="6"
          onPress={() => {
            buildNumber("6");
          }}
        />
        <CalculatorButton label="-" color={Colors.orange} onPress={() => {}} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          onPress={() => {
            buildNumber("1");
          }}
        />
        <CalculatorButton
          label="2"
          onPress={() => {
            buildNumber("2");
          }}
        />
        <CalculatorButton
          label="3"
          onPress={() => {
            buildNumber("3");
          }}
        />
        <CalculatorButton label="+" color={Colors.orange} onPress={() => {}} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          onPress={() => {
            buildNumber("0");
          }}
          doubleSize
        />
        <CalculatorButton
          label="."
          onPress={() => {
            buildNumber(".");
          }}
        />
        <CalculatorButton label="=" color={Colors.orange} onPress={() => {}} />
      </View>
    </View>
  );
};

export default index;
