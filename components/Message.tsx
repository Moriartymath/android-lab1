import { deleteMessage } from "@/actions/message";
import { MessageT } from "@/db/schema";
import { Trash } from "lucide-react-native";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";

interface Props {
  data: MessageT;
}

const Message: FC<Props> = ({ data }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
      }}
    >
      <Text>ID: {data.id}</Text>
      <Text>Text Content: {data.content}</Text>
      <Text>Font size: {data.font_size}</Text>
      <Pressable onPress={() => deleteMessage(data.id)}>
        <Trash color={"red"} />
      </Pressable>
    </View>
  );
};

export default Message;
