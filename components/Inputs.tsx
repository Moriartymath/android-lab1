import { FC } from "react";
import { View } from "react-native";
import RadionButtons from "./RadioButtons";
import Input from "./Input";
import { options } from "@/constants/options";

interface Props {
  selectedOption: (typeof options)[number] | null;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  setSelectedOption: React.Dispatch<
    React.SetStateAction<"10" | "16" | "24" | null>
  >;
}

const Inputs: FC<Props> = ({
  selectedOption,
  inputText,
  setInputText,
  setSelectedOption,
}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        marginTop: 10,
      }}
    >
      <RadionButtons value={selectedOption} onChange={setSelectedOption} />
      <Input text={inputText} onTextChange={setInputText} />
    </View>
  );
};

export default Inputs;
