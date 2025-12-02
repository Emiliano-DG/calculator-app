import { Fonts } from "@/constants/theme";
import { globalStyles } from "@/styles/global-styles";
import { Text, type TextProps } from "react-native";

interface Props extends TextProps {
  variant?: "primary" | "secondary";
}

const ThemeText = ({ children, variant = "primary", ...props }: Props) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: Fonts.rounded },
        variant === "primary" && globalStyles.mainResult,
        variant === "secondary" && globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...props}
    >
      {children}
    </Text>
  );
};

export default ThemeText;
