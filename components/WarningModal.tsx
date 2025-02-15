import { FC } from "react";
import { Button, Modal, Text, View } from "react-native";

interface Props {
  text?: string;
  visible: boolean;
  onClose: () => void;
}

const WarningModal: FC<Props> = ({ visible, onClose, text }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View
        style={{
          padding: 10,
          gap: 10,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "red",
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          {text || "You shoul fill out all inputs!"}
        </Text>
        <Button title="Return to home page" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default WarningModal;
