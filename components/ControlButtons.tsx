import { options } from "@/constants/options";
import { FC } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

interface Props {
  setDisplayText: (value: string | null) => void;
  inputText: string;
  displayText: string | null;
  selectedOption: (typeof options)[number] | null;
  setIsOpen: (value: boolean) => void;
}

const ControlButtons: FC<Props> = ({
  selectedOption,
  setDisplayText,
  displayText,
  inputText,
  setIsOpen,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        width: "100%",
      }}
    >
      <Button
        mode="contained"
        style={{
          flex: 1,
        }}
        onPress={() => {
          if (selectedOption && inputText) setDisplayText(inputText);
          else setIsOpen(true);
        }}
      >
        OK
      </Button>
      <Button
        style={{
          flex: 1,
        }}
        mode="contained"
        disabled={!displayText}
        onPress={() => {
          setDisplayText(null);
        }}
      >
        Cancel
      </Button>
    </View>
  );
};

export default ControlButtons;
