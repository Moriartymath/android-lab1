import Input from "@/components/Input";
import RadionButtons from "@/components/RadioButtons";
import WarningModal from "@/components/WarningModal";
import { options } from "@/constants/options";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
function index() {
  const [inputText, setInputText] = useState("");
  const [selectedOption, setSelectedOption] = useState<
    (typeof options)[number] | null
  >(null);
  const [isOpen, setIsOpen] = useState(false);
  const [displayText, setDisplayText] = useState<null | string>(null);
  return (
    <View
      style={{
        height: "80%",
        padding: 16,
        gap: 16,
        justifyContent: "center",
      }}
    >
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
      <WarningModal visible={isOpen} onClose={() => setIsOpen(false)} />
    </View>
  );
}

export default index;
