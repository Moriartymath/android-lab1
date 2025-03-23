import { options } from "@/constants/options";
import { FC } from "react";
import { Text, View } from "react-native";

interface Props {
  selectedOption: (typeof options)[number] | null;
  displayText: string | null;
}

const DisplayInputedText: FC<Props> = ({ selectedOption, displayText }) => {
  return (
    <View
      style={{
        height: "10%",
      }}
    >
      {displayText && selectedOption && (
        <Text
          style={{
            fontSize: Number.parseInt(selectedOption),
            textAlign: "center",
          }}
        >
          {displayText}
        </Text>
      )}
    </View>
  );
};

export default DisplayInputedText;
