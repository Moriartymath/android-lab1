import { options } from "@/constants/options";
import { FC } from "react";
import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

interface Props {
  value: (typeof options)[number] | null;
  onChange: (value: (typeof options)[number]) => void;
}
const RadionButtons: FC<Props> = ({ value, onChange }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%",
        alignSelf: "center",
      }}
    >
      {options.map((option) => (
        <View key={option}>
          <Text>{option} px</Text>
          <RadioButton
            status={value === option ? "checked" : "unchecked"}
            value={option}
            onPress={() => onChange(option)}
          />
        </View>
      ))}
    </View>
  );
};

export default RadionButtons;
