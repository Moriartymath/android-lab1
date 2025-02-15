import { FC } from "react";
import { TextInput, View } from "react-native";

interface Props {
  onTextChange: (newText: string) => void;
  text: string;
}

const Input: FC<Props> = ({ onTextChange, text }) => {
  return (
    <TextInput
      onChangeText={onTextChange}
      placeholder="Text"
      value={text}
      style={{
        backgroundColor: "wheat",
        paddingLeft: 10,
        borderRadius: 20,
        width: "60%",
      }}
    />
  );
};

export default Input;
