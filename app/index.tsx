import ControlButtons from "@/components/ControlButtons";
import DisplayInputedText from "@/components/DisplayInputedText";
import Input from "@/components/Input";
import Inputs from "@/components/Inputs";
import RadionButtons from "@/components/RadioButtons";
import WarningModal from "@/components/WarningModal";
import { options } from "@/constants/options";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { useSQLiteContext } from "expo-sqlite";
import { useState } from "react";
import { Keyboard, Text, View } from "react-native";
import { Button } from "react-native-paper";
function index() {
  const db = useSQLiteContext();
  useDrizzleStudio(db);

  const [inputText, setInputText] = useState("");
  const [selectedOption, setSelectedOption] = useState<
    (typeof options)[number] | null
  >(null);
  const [isOpen, setIsOpen] = useState(false);
  const [displayText, setDisplayText] = useState<null | string>(null);
  return (
    <View
      style={{
        height: "100%",
        padding: 16,
        gap: 16,
        justifyContent: "center",
      }}
    >
      <DisplayInputedText
        selectedOption={selectedOption}
        displayText={displayText}
      />

      <Inputs
        selectedOption={selectedOption}
        setInputText={setInputText}
        setSelectedOption={setSelectedOption}
        inputText={inputText}
      />
      <ControlButtons
        inputText={inputText}
        setIsOpen={setIsOpen}
        selectedOption={selectedOption}
        displayText={displayText}
        setDisplayText={setDisplayText}
      />
      <WarningModal visible={isOpen} onClose={() => setIsOpen(false)} />
      <View
        style={{
          gap: 6,
        }}
      >
        <Button
          mode="contained"
          disabled={!displayText && !inputText && !selectedOption}
          onPress={() => {
            setDisplayText(null);
            setSelectedOption(null);
            setInputText("");
            Keyboard.dismiss();
          }}
        >
          Clear Form
        </Button>
      </View>
    </View>
  );
}

export default index;
