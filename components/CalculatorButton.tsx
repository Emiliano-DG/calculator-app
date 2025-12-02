import { Colors } from "@/constants/theme";
import { globalStyles } from "@/styles/global-styles";
import * as Haptics from "expo-haptics";
import { Pressable, Text } from "react-native";

interface Props {
  label: string;
  color?: string;
  blackColor?: boolean;
  doubleSize?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  onPress,
  color = Colors.darkGray,
  blackColor = false,
  doubleSize = false,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackColor ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
